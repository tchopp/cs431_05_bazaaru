import { TopHalf } from "./TopHalf";
import {Chat} from "./Chat";
import { Fragment } from "react";
const Messages = () => { 
    return (
        <Fragment>
            <TopHalf />
            <Chat />
        </Fragment>
    );
}

export default Messages;