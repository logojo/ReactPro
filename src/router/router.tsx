import { lazy } from "react";
import { createBrowserRouter,  } from "react-router-dom";
import App from '../App';
import Home from "../lazyLoad/pages/Home";
import { Shopping } from "../component-patterns/pages/Shopping";
import { ShoppingControlProps } from "../component-patterns/pages/ShoppingControlProps";
import { ShoppingStateInitializer } from "../component-patterns/pages/shoppingStateInitializer";

const About = lazy(() => import("../lazyLoad/pages/About"));
const Users = lazy(() => import("../lazyLoad/pages/Users"));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <Shopping /> },
            { path: 'shopping', element: <ShoppingControlProps />,  },
            { path: 'shopping2', element: <ShoppingStateInitializer />,  },
            { path: 'about', element: <About />,  },
            { path: 'users', element: <Users />,  },
        ]
    },
    {
    path: '*',
    element: <h1>Not found</h1>,
    },
]);

