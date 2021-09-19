import React from "react";
import Dialogs from "./Dialogs";
import {
  AddMessageActionCreator,
  ChangeMessageBufferActionCreator,
} from "../Redux/Dialogs_reducer";
import StoreContext from "../Redux/StoreContext";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let AddMessage = () => {
          store.dispatch(AddMessageActionCreator());
        };

        let ChangeMessage = (text) => {
          store.dispatch(ChangeMessageBufferActionCreator(text));
        };
        return (
          <Dialogs
            ChangeMessage={ChangeMessage}
            AddMessage={AddMessage}
            MessagesData={store.getState().Dialogs_Messages_Data.MessagesData}
            DialogsData={store.getState().Dialogs_Messages_Data.DialogsData}
            MessageTextBuffer={
              store.getState().Dialogs_Messages_Data.MessageTextBuffer
            }
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
