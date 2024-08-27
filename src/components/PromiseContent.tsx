import React from "react";
import {Flex, Text} from "@chakra-ui/react";

const fetchHelloWorld = async (): Promise<string> => {
    return new Promise(resolve => setTimeout(() => resolve("Hello, world"), 500));
};

export const PromiseContent = () => {
    const content = React.use<string>(fetchHelloWorld());

    return (
        <Flex justify="center" align="center" h="100vh">
            <Text fontSize="4xl">{content}</Text>
        </Flex>
    );
};
