import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import {LoginPage} from "./pages/login.tsx";
import {ChangeNamePage} from "./pages/change-name.tsx";
import {UsePromisePage} from "./pages/use-promise.tsx";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/change-name",
        element: <ChangeNamePage />,
    },
    {
        path: "/use-promise",
        element: <UsePromisePage />,
    },
]);

export const App = React.memo(() => {
    return (
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    );
});
