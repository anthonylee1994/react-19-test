import {Button, Input, Text, useToast} from "@chakra-ui/react";
import React from "react";

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
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    Math.random() > 0.5 ? resolve(null) : reject(new Error("Failed to update name"));
                }, 1000);
            });
            onUpdateName(newName);
        } catch (error: any) {
            toast({
                title: "Failed to update name",
                description: error.message,
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
            <Button mt={4} w="full" type="submit">
                Update Name
            </Button>
        </form>
    );
};
