import { createStore, combineReducers } from "redux";
import Profile_reducer from "./Profile_reducer";
import Dialogs_reducer from "./Dialogs_reducer";
import SideBar_reducer from "./SideBar_reducer";

let reducers = combineReducers({
  Profile_Data:Profile_reducer,
  Dialogs_Messages_Data:Dialogs_reducer,
  SideBar_Data:SideBar_reducer
})


let store = createStore(reducers);

export default store;

