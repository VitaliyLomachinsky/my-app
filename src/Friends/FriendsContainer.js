import { connect } from "react-redux";
import Friends_reducer, { follow_Unfollow_AC, set_Users_AC } from "../Redux/Friends_reducer";
import Friends from "./Friends";

const mapStateToProps = (state) => {
  return {
    users: state.Users_Data.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow_unfollow: (userId) => {
      dispatch(follow_Unfollow_AC(userId));
    },
    set_users: (users) =>{  
      dispatch(set_Users_AC(users))
    }
  };
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
