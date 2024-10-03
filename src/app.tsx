import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import {UseActionStatePage} from "./pages/use-action-state.tsx";
import {UseOptimisticPage} from "./pages/use-optimistic.tsx";
import {UsePromisePage} from "./pages/use-promise.tsx";
import {UseTransitionPage} from "./pages/use-transition.tsx";
import {IndexPage} from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexPage />,
    },
    {
        path: "/use-action-state",
        element: <UseActionStatePage />,
    },
    {
        path: "/use-optimistic",
        element: <UseOptimisticPage />,
    },
    {
        path: "/use-promise",
        element: <UsePromisePage />,
    },
    {
        path: "/use-transition",
        element: <UseTransitionPage />,
    },
]);

export const App = React.memo(() => {
    return (
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    );
});
