import {Button} from "@chakra-ui/react";
import {useFormStatus} from "react-dom";

export const SubmitButton = () => {
    const {pending} = useFormStatus();

    return (
        <Button isLoading={pending} type="submit" colorScheme="blue" mt={4}>
            Login
        </Button>
    );
};
