import FriendsListItem from "./FriendsList/FriendsListItem";
import style from "./Friends.module.css";

const Friends = (props) => {
  debugger;
  let newUserList = props.users.map((user) => (
    <FriendsListItem user={user} follow_unfollow={props.follow_unfollow} />
  ));

  return (
    <div>
      {newUserList}
      <button className={style.btn}>Show more</button>
    </div>
  );
};

export default Friends;
