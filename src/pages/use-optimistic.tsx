import React from "react";
import {ChangeName} from "../components/ChangeName";
import {Paper} from "../components/Paper";
import {Center} from "../components/Center";

export const UseOptimisticPage = () => {
    const [name, setName] = React.useState("John Doe");

    return (
        <Center>
            <Paper>
                <ChangeName currentName={name} onUpdateName={setName} />
            </Paper>
        </Center>
    );
};
