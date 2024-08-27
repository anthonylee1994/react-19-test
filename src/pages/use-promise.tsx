import {Flex, Spinner} from "@chakra-ui/react";
import {PromiseContent} from "../components/PromiseContent.tsx";
import {Suspense} from "react";

export const UsePromisePage = () => {
    return (
        <Flex justify="center" align="center" h="100vh">
            <Suspense fallback={<Spinner />}>
                <PromiseContent />
            </Suspense>
        </Flex>
    );
};
