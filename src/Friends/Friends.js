import FriendsListItem from "./FriendsList/FriendsListItem";
import style from "./Friends.module.css";
import * as axios from "axios";

const Friends = (props) => {
  let Users = [
    {
      id: 1,
      followed: false,
      fullName: "Vitaliy Lomachinsky",
      location: {
        city: "Kiev",
        country: "Ukraine",
      },
      status: "Hello, a im nisan",
    },
    {
      id: 2,
      followed: true,
      fullName: "Dima Sotnyk",
      location: {
        city: "Minsk",
        country: "Belarus",
      },
      status: "C# visual basic 31",
    },
    {
      id: 3,
      followed: true,
      fullName: "Oksana Maluh",
      location: {
        city: "San - Paulo",
        country: "Egypt",
      },
      status: "Cool birthday",
    },
  ];

  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        debugger;
        props.set_users(response.data.items);
      });
  }

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
