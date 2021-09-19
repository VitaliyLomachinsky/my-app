import SideBar from "./SideBar";
import StoreContext from "../Redux/StoreContext.js";

const SideBarContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => (
        <SideBar
          onlineFriends={
            store.getState().SideBar_Data.OnlineFriendsData.onlineFriends
          }
        />
      )}
    </StoreContext.Consumer>
  );
};

export default SideBarContainer;
