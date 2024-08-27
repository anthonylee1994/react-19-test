import React from "react";
import {Alert, AlertIcon, Button, Flex, Input, Stack, Text} from "@chakra-ui/react";

export const LoginPage = () => {
    const [error, submitAction, isPending] = React.useActionState(async (_: string | null, formData: FormData) => {
        console.log(_, formData.get("username"));

        // Simulate a network request
        await new Promise(resolve => setTimeout(resolve, 1000));
        return "Login Failed!";
    }, null);

    return (
        <Flex justify="center" align="center" h="100vh">
            <form action={submitAction}>
                <Flex borderRadius="md" m={2} p={4} boxShadow="md" bgColor="white" flexDirection="column" alignItems="center" width={400}>
                    {error && (
                        <Alert status="error">
                            <AlertIcon />
                            {error}
                        </Alert>
                    )}
                    <Text mt={2} fontSize="2xl" mb={2}>
                        Login
                    </Text>
                    <Stack w="full" spacing={3}>
                        <Input type="text" placeholder="Username" name="username" required disabled={isPending} />
                        <Input type="password" placeholder="Password" name="password" required disabled={isPending} />
                    </Stack>
                    <Button isLoading={isPending} type="submit" colorScheme="blue" mt={4}>
                        Login
                    </Button>
                </Flex>
            </form>
        </Flex>
    );
};
