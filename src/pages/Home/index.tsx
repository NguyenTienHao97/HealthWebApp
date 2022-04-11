import React from 'react';
import { useStyles } from './styles';
import BackgroundImageProgressCircle from '../../components/BackgroundImageProgressCircle';
import Menus from '../../containers/Menus';
import CLineChart from '../../components/LineChart';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { getMeals } from '../../apis/home';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Home(props: any) {
    const classes: any = useStyles();
    const [cookies, setCookies] = useCookies(['access_token']);
    const navigate: any = useNavigate();
    const [meals, setMeals] = React.useState<any>([]);
    const [isLoading, setLoading] = React.useState<boolean>(false);
    const [items, setItems] = React.useState<any>([]);
    const [page, setPage] = React.useState<number>(1);

    React.useEffect(() => {
        _getMeals();
    }, []);

    async function _getMeals() {
        try {
            setLoading(true);
            let resApi: any = await getMeals();

            if (resApi.statusText === "OK") {
                let meal: any = resApi.data && resApi.data?.filter((meal: any) => {
                   return meal?.isSelected === true;
                })
                setMeals(resApi.data);

                setItems(meal[0]?.items);
                
                setLoading(false);
            }
        } catch (err: any) {
            setLoading(false);
        }
    }

    function onFilterByTypeMeal(meal: any) {
        const newItems = meals.filter((_meal: any) => {
            if (meal.id === _meal.id) {
                return true;
            }
        })[0]?.items;

        setItems(newItems);
         setPage(1);
    }

    function onLoadMore() {
        const nextPage = page + 1;
        setPage(nextPage);
    }

    return (
        <div className={classes.container}>
            {
                !!cookies?.access_token ? (
                    <>
                        <div className={classes.wrapSection}>
                            <BackgroundImageProgressCircle />
                            <CLineChart />
                        </div>
                        {
                            isLoading ? (
                                <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: 10, paddingBottom: 10, justifyContent: 'center', }}>
                                    <CircularProgress />
                                </Box>
                            ) : (
                                <Menus
                                    callbackFilterByTypeMeal={onFilterByTypeMeal}
                                    meals={meals}
                                    curItems={items}
                                    items={items.length > 0 ? items.slice(0, page * 8) : []}
                                    callbackLoadMoreItem={onLoadMore}
                                />
                            )
                        }

                    </>
                ) : (
                    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <p>{"Bạn chưa đăng nhập!"}</p>
                        <button style={{ height: 50, width: 200 }} onClick={() => navigate("/login")}>
                            {"Đăng nhập"}
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default Home;