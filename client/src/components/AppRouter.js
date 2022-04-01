// Закинем все страницы сюда (ссылки)

import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import {publicRoutes} from "../routes";
import {observer} from "mobx-react-lite";
import {HOME_ROUTE} from "../utils/consts";



const AppRouter = observer(() => {


    return (
        <Routes>
            {/*{user.isAuth && authRoutes.map(({path, Element}) =>*/}
            {/*    <Route key={path} path={path} element={Element} exact/>*/}
            {/*)}*/}
            {publicRoutes.map(({path, Element}) =>
                <Route key = {path} path={path} element={Element} exact/>
            )}
            <Route path={HOME_ROUTE} element={<Navigate to="/" />}
            />
        </Routes>
    );
});

export default AppRouter;
