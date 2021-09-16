import s from "./MessageItem.module.css";



const MessageItem = (props) => {
  
  let nameOfClass;
  if(props.MessageSender){
    nameOfClass=s.item_my;
  }
  else{
    nameOfClass=s.item_other;
  }
  
  return (
    <div className={s.item_rows}>
        <div className={nameOfClass}>{props.MessageText}</div>
    </div>
  );
};  

export default MessageItem;
