const ADD_MESSAGE = "AddMessage";
const CHANGE_MESSAGE_BUFFER = "ChangeMessageBuffer";

let initialState = {
  DialogsData: [
    { id: 1, userName: "Vitaliy Lomachinsky", lastTimeOnline: "19:32" },
    { id: 2, userName: "Dima Gnevush", lastTimeOnline: "01:12" },
    { id: 3, userName: "Dima Kuzov", lastTimeOnline: "14:32" },
    { id: 4, userName: "Vasiliy Xuuanovich", lastTimeOnline: "02:18" },
  ],

  MessagesData: [
    { id: 1, messageText: "Privet!", sender: true },
    { id: 2, messageText: "Darova", sender: false },
    { id: 3, messageText: "Rad tebya videtb", sender: false },
    { id: 4, messageText: "Kak dela?", sender: true },
    { id: 5, messageText: "Vse xorowo =)", sender: false },
    { id: 6, messageText: "Ooo, a kuda zavtra?", sender: true },
    { id: 7, messageText: "Daleko)", sender: false },
  ],

  MessageTextBuffer: "",
};

const Dialogs_reducer = (state = initialState, action) => {
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
