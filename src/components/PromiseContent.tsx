import {use} from "react";
import {Flex, Text} from "@chakra-ui/react";

const fetchHelloWorld = async (): Promise<string> => {
    return new Promise(resolve => setTimeout(() => resolve("Hello, world"), 1000));
};

export const PromiseContent = () => {
    const content = use<string>(fetchHelloWorld());

    return (
        <Flex justify="center" align="center" h="100vh">
            <Text fontSize="4xl">{content}</Text>
        </Flex>
    );
};
