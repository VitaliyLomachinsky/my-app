import React from "react";
import { AddMessageActionCreator,ChangeMessageBufferActionCreator } from "../Redux/Dialogs_reducer";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";



const Dialogs = (props) => {
  let submitMessage = React.createRef();
 
  let AddMessage = () => {
    props.dispatch(AddMessageActionCreator());
  };

  let ChangeMessage = () => {
    debugger;
    let text = submitMessage.current.value;
    props.dispatch(ChangeMessageBufferActionCreator(text));
  };

  let DialogsDataNew = props.dialogsData.DialogsData.map((dialog) => (
    <DialogItem
      userName={dialog.userName}
      lastTimeOnline={dialog.lastTimeOnline}
      id={dialog.id}
    />
  ));
  let MessagesDataNew = props.dialogsData.MessagesData.map((message) => (
    <MessageItem
      MessageText={message.messageText}
      MessageId={message.id}
      MessageSender={message.sender}
    />
  ));

  return (
    <div className={s.Dialogs}>
      <div className={s.All_Dialogs}>{DialogsDataNew}</div>

      <div className={s.Current_Dialogs}>
        <div className={s.Current_Dialogs_Active_Zone}>
          <div className={s.Current_Dialogs_Active_Zone_Inside}>
            {MessagesDataNew}
          </div>
        </div>
        <div className={s.MessageBox_wrapper}>
          <div className={s.MessageBox}>
            <textarea
              ref={submitMessage}
              onChange={ChangeMessage}
              value={props.dialogsData.MessageTextBuffer}
            ></textarea>
            <button onClick={AddMessage}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
