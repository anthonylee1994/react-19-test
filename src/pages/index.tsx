import {ListItem, OrderedList} from "@chakra-ui/react";
import {Center} from "../components/Center";
import {Link} from "react-router-dom";

export const IndexPage = () => {
    return (
        <Center>
            <div>
                <OrderedList fontSize="2xl" lineHeight={2}>
                    <ListItem>
                        <Link to="/use-transition">useTransition</Link>
                    </ListItem>

                    <ListItem>
                        <Link to="/use-action-state">useActionState</Link>
                    </ListItem>

                    <ListItem>
                        <Link to="/use-optimistic">useOptimistic</Link>
                    </ListItem>

                    <ListItem>
                        <Link to="/use-promise">usePromise</Link>
                    </ListItem>
                </OrderedList>
            </div>
        </Center>
    );
};
