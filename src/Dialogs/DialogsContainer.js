import Dialogs from "./Dialogs";
import {
  AddMessageActionCreator,
  ChangeMessageBufferActionCreator,
} from "../Redux/Dialogs_reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    MessagesData: state.Dialogs_Messages_Data.MessagesData,
    DialogsData: state.Dialogs_Messages_Data.DialogsData,
    MessageTextBuffer: state.Dialogs_Messages_Data.MessageTextBuffer,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    ChangeMessage: (text) => {
      dispatch(ChangeMessageBufferActionCreator(text));
    },
    AddMessage: () => {
      dispatch(AddMessageActionCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
