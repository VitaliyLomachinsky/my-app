import "./App.css";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import Settings from "./Settings/Settings";
import Friends from "./Friends/Friends";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="Main">
        <Header />
        <SideBar OnlineFriendsData={props.appState.OnlineFriendsData} />
        <div className="content">
          <Route
            path="/profile"
            render={() => (
              <Profile
                Profile_Data={props.appState.Profile_Data}
                AddPost={props.AddPost}
                ChangePostBuffer={props.ChangePostBuffer}
              />
            )}
          />
          <Route path="/friends" render={() => <Friends />} />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogsData={props.appState.Dialogs_Messages_Data}
                AddMessage={props.AddMessage}
                ChangeMessageBuffer={props.ChangeMessageBuffer}
              />
            )}
          />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
