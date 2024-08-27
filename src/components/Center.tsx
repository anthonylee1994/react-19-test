import {Flex} from "@chakra-ui/react";
import React from "react";

interface Props {
    children: React.ReactNode;
}

export const Center = ({children}: Props) => {
    return (
        <Flex justify="center" align="center" h="100vh">
            {children}
        </Flex>
    );
};
