import {Spinner} from "@chakra-ui/react";
import {PromiseContent} from "../components/PromiseContent.tsx";
import {Suspense} from "react";
import {Center} from "../components/Center.tsx";

export const UsePromisePage = () => {
    return (
        <Center>
            <Suspense fallback={<Spinner />}>
                <PromiseContent />
            </Suspense>
        </Center>
    );
};
