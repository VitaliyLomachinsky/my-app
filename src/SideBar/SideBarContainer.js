import SideBar from "./SideBar";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    onlineFriends: state.SideBar_Data.OnlineFriendsData.onlineFriends,
  };
};

const SideBarContainer = connect(mapStateToProps, null)(SideBar);

export default SideBarContainer;
