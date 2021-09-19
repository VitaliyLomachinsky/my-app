import "./App.css";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";
import Friends from "./Friends/Friends";
import { Route } from "react-router-dom";
import SideBarContainer from "./SideBar/SideBarContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <div className="Main">
      <Header />
      <SideBarContainer />
      <div className="content">
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/friends" render={() => <Friends />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  );
};

export default App;
