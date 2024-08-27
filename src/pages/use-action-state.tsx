import React from "react";
import {Alert, AlertIcon, Input, Stack, Text} from "@chakra-ui/react";
import {Paper} from "../components/Paper";
import {Center} from "../components/Center";
import {SubmitButton} from "../components/SubmitButton";

export const UseActionStatePage = () => {
    const [error, submitAction, isPending] = React.useActionState(async (_: string | null, formData: FormData) => {
        console.log(_, formData.get("username"));

        // Simulate a network request
        await new Promise(resolve => setTimeout(resolve, 1000));
        return "Login Failed!";
    }, null);

    return (
        <Center>
            <form action={submitAction}>
                <Paper>
                    {error && (
                        <Alert mb={2} status="error">
                            <AlertIcon />
                            {error}
                        </Alert>
                    )}
                    <Text fontSize="2xl" mb={2}>
                        Login
                    </Text>
                    <Stack w="full" spacing={3}>
                        <Input type="text" placeholder="Username" name="username" required disabled={isPending} />
                        <Input type="password" placeholder="Password" name="password" required disabled={isPending} />
                    </Stack>
                    <SubmitButton />
                </Paper>
            </form>
        </Center>
    );
};
