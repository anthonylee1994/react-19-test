import {Button, Input, Text, useToast} from "@chakra-ui/react";
import React from "react";
import {api} from "../util/api.ts";

interface Props {
    currentName: string;
    onUpdateName: (name: string) => void;
}

export const ChangeName = ({currentName, onUpdateName}: Props) => {
    const toast = useToast();
    const [optimisticName, setOptimisticName] = React.useOptimistic(currentName);

    const submitAction = async (formData: FormData) => {
        try {
            const newName = formData.get("name") as string;
            setOptimisticName(newName);
            await api.call();
            onUpdateName(newName);
        } catch (error: any) {
            toast({
                title: error.message,
                position: "top",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <form action={submitAction}>
            <Text as="p" mb={2}>
                Your name is: {optimisticName}
            </Text>
            <Input type="text" name="name" defaultValue={optimisticName} isDisabled={currentName !== optimisticName} />
            <Button mt={4} w="full" type="submit" isLoading={currentName !== optimisticName}>
                Update Name
            </Button>
        </form>
    );
};
