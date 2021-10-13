import FriendsListItem from "./FriendsList/FriendsListItem";
import style from "./Friends.module.css";
import * as axios from "axios";
import { render } from "@testing-library/react";
import React from "react";

class Friends extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.set_users(response.data.items);
      });
  }

  render() {
    let newUserList = this.props.users.map((user) => (
      <FriendsListItem
        user={user}
        follow_unfollow={this.props.follow_unfollow}
      />
    ));

    return (
      <div>
        {newUserList}
        <button className={style.btn}>Show more</button>
      </div>
    );
  }
}

export default Friends;
