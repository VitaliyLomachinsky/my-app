import SideBar from "./SideBar";

const SideBarContainer = (props) => {
  return (
    <SideBar
      onlineFriends={props.state.SideBar_Data.OnlineFriendsData.onlineFriends}
    />
  );
};

export default SideBarContainer;
