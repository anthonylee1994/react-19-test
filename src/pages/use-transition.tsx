import React from "react";
import {Alert, AlertIcon, Button, Input} from "@chakra-ui/react";
import {Center} from "../components/Center";
import {Paper} from "../components/Paper";
import {api} from "../util/api";

export const UseTransitionPage = () => {
    const [name, setName] = React.useState("");
    const [error, setError] = React.useState(null);
    const [isPending, startTransition] = React.useTransition();

    const handleSubmit = () => {
        startTransition(async () => {
            setError(null);
            try {
                await api.call();
            } catch (error: any) {
                setError(error.message);
            }
        });
    };

    return (
        <Center>
            <Paper>
                {error && (
                    <Alert mb={4} status="error">
                        <AlertIcon />
                        {error}
                    </Alert>
                )}
                <Input mb={4} placeholder="Name" name={name} onChange={e => setName(e.target.value)} />
                <Button isLoading={isPending} onClick={handleSubmit}>
                    Update
                </Button>
            </Paper>
        </Center>
    );
};
