import React from 'react';

const HomePage = React.lazy(() => import ("../pages/Home"));
const RecordPage = React.lazy(() => import("../pages/Record"));
const ColumnPage = React.lazy(() => import("../pages/Column"));

const navigations: any = [
    {
        path: '/',
        name: "Home",
        component: HomePage,
    },
    {
        path: '/record',
        name: "Record",
        component: RecordPage,
    },
    {
        path: '/column',
        name: "Column",
        component: ColumnPage,
    }
];

let _navigations = [].concat(navigations);

function handleRouteRecursion(i_navigations: any) {
    try {
        if (i_navigations?.length) {
            i_navigations.forEach(function (navigation: any) {
                if (navigation.childrens && navigation.childrens.length) {
                    i_navigations = i_navigations.concat(handleRouteRecursion(navigation.childrens))
                }
            });
        }

        return i_navigations;
    } catch (error) {
    }
}

export default _navigations = handleRouteRecursion(_navigations);