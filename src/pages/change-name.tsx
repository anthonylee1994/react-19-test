import React from "react";
import {ChangeName} from "../components/ChangeName";
import {Flex} from "@chakra-ui/react";

export const ChangeNamePage = () => {
    const [name, setName] = React.useState("John Doe");

    return (
        <Flex justify="center" align="center" h="100vh">
            <Flex borderRadius="md" m={2} p={4} boxShadow="md" bgColor="white" flexDirection="column" alignItems="center" width={400}>
                <ChangeName currentName={name} onUpdateName={setName} />
            </Flex>
        </Flex>
    );
};
