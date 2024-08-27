import {Flex} from "@chakra-ui/react";
import React from "react";

interface Props {
    children: React.ReactNode;
}

export const Paper = ({children}: Props) => {
    return (
        <Flex borderRadius="md" m={2} p={4} boxShadow="md" bgColor="white" flexDirection="column" alignItems="center" width={400}>
            {children}
        </Flex>
    );
};
