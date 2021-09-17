const ADD_MESSAGE = "AddMessage";
const CHANGE_MESSAGE_BUFFER = "ChangeMessageBuffer";

const Dialogs_reducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      if (state.MessageTextBuffer != "") {
        let newMessage = {
          id: state.MessagesData.length + 1,
          messageText: state.MessageTextBuffer,
          sender: true,
        };
        state.MessageTextBuffer = "";
        state.MessagesData.push(newMessage);
      }
      break;
    case CHANGE_MESSAGE_BUFFER:
      state.MessageTextBuffer = action.text;
      break;
    default:
      return state;
  }
  return state;
};

export const AddMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const ChangeMessageBufferActionCreator = (text) => ({
  type: CHANGE_MESSAGE_BUFFER,
  text: text,
});

export default Dialogs_reducer;
