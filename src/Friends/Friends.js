import FriendsListItem from "./FriendsList/FriendsListItem";
import style from "./Friends.module.css";

const Friends = () => {
  return (
    <div>
      <FriendsListItem />
      <FriendsListItem />
      <FriendsListItem />
      <FriendsListItem />
      <button className={style.btn}>Show more</button>
    </div>
  );
};

export default Friends;
