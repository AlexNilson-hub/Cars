import {
    HOME_ROUTE,
    CAR_ROUTE,
} from "./utils/consts";

import HomePage from "./pages/HomePage";
import CarPage from "./pages/CarPage";



// export const authRoutes = [
//     {
//         path: ADMIN_ROUTE,
//         Element: <Admin/>
//     }
// ]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Element: <HomePage/>
    },
    {
        path: CAR_ROUTE,
        Element: <CarPage/>
    },

]

