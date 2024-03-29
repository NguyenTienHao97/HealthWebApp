import React, { useEffect, useRef } from 'react';
import { useStyles } from './styles';
import RecordCols from '../../containers/RecordCols';
import ChartRecord from '../../containers/ChartRecord';
import MyDiarys from '../../containers/MyDiarys';
import ImageIconArrow from '../../assets/svgs/icon_scroll.svg';
import MyExercises from '../../containers/MyExercises';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { getDiaries } from '../../apis/record';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import NotLogin from '../../components/NotLogin';

function Record(props: any) {
    const classes: any = useStyles();
    const [cookies, setCookies] = useCookies(['access_token']);
    const navigate: any = useNavigate();
    const [diaries, setDiaries] = React.useState<any>([]);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [page, setPage] = React.useState<number>(1);
    const charRecordRef: any = useRef();
    const myExerciesRef: any = useRef();
    const myDiariesRef: any = useRef();

    useEffect(() => {
        _getDiaries();
    }, []);

    async function _getDiaries() {
        try {
            setLoading(true);
            let resApi: any = await getDiaries();

            if (resApi.data) {
                setLoading(false);
                setDiaries(resApi.data);
            }
        } catch (err: any) {
            setLoading(false);
        }
    }

    function onLoadMore() {
        const nextPage = page + 1;
        setPage(nextPage);
    }

    function onScrollToElementChartRecord() {
        charRecordRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    function onScrollToElementMyExercies() {
        myExerciesRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    function onScrollToElementMyDiaries() {
        myDiariesRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className={classes.container}>
            {
                !!cookies?.access_token ? (
                    <>
                        <div>
                            <RecordCols
                                callbackHandleScrollToElementChartRecord={onScrollToElementChartRecord}
                                callbackHandleScrollToElementMyExercies={onScrollToElementMyExercies}
                                callbackHandleScrollToElementMyDiaries={onScrollToElementMyDiaries}
                            />
                            <ChartRecord
                                charRecordRef={charRecordRef} />
                            <MyExercises
                                myExerciesRef={myExerciesRef}
                            />
                            {
                                loading ? (
                                    <Box className={classes.wrapLoading}>
                                        <CircularProgress />
                                    </Box>
                                ) : (
                                    <MyDiarys
                                        myDiariesRef={myDiariesRef}
                                        curDiaries={diaries}
                                        callbackLoadMore={() => onLoadMore()}
                                        diaries={diaries.length > 0 ? diaries.slice(0, page * 8) : []}
                                    />
                                )
                            }

                        </div>
                        <div className={classes.wrapBtnScrollTop}>
                            <button className={classes.styleBtnScrollTop}>
                                <img
                                    src={ImageIconArrow}
                                />
                            </button>
                        </div>
                    </>
                ) : (
                    <NotLogin />
                )
            }
        </div>
    )
}

export default Record;