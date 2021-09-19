import { NavLink } from "react-router-dom";
import clasess from "./SideBar.module.css";
import OnlineFriendsList from "./OnlineFriendsList/OnlineFriendsList";

const SideBar = (props) => {
  let newOnlineFriendsList = props.onlineFriends.map((temp) => (
    <OnlineFriendsList url={temp.url} />
  ));

  return (
    <div className={clasess.sideBar}>
      <ul className={clasess.bar}>
        <li className={clasess.bar_item}>
          <NavLink
            activeClassName={clasess.activeLink}
            to="/profile"
            className={clasess.bar_item_link}
          >
            Profile
          </NavLink>
        </li>
        <li className={clasess.bar_item}>
          <NavLink
            activeClassName={clasess.activeLink}
            to="/friends"
            className={clasess.bar_item_link}
          >
            Friends
          </NavLink>
        </li>
        <li className={clasess.bar_item}>
          <NavLink
            activeClassName={clasess.activeLink}
            to="/dialogs"
            className={clasess.bar_item_link}
          >
            Message
          </NavLink>
        </li>
        <li className={clasess.bar_item}>
          <NavLink
            activeClassName={clasess.activeLink}
            to="/settings"
            className={clasess.bar_item_link}
          >
            Settings
          </NavLink>
        </li>
      </ul>

      <div className={clasess.OnlineFriendsList}>{newOnlineFriendsList}</div>
    </div>
  );
};

export default SideBar;
