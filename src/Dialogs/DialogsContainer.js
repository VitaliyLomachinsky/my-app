import React from "react";
import Dialogs from "./Dialogs";
import {
  AddMessageActionCreator,
  ChangeMessageBufferActionCreator,
} from "../Redux/Dialogs_reducer";

const DialogsContainer = (props) => {
  debugger;
  let AddMessage = () => {
    props.dispatch(AddMessageActionCreator());
  };

  let ChangeMessage = (text) => {
    props.dispatch(ChangeMessageBufferActionCreator(text));
  };

  return (
    <Dialogs
      ChangeMessage={ChangeMessage}
      AddMessage={AddMessage}
      MessagesData={props.state.Dialogs_Messages_Data.MessagesData}
      DialogsData={props.state.Dialogs_Messages_Data.DialogsData}
      MessageTextBuffer={props.state.Dialogs_Messages_Data.MessageTextBuffer}
    />
  );
};

export default DialogsContainer;
