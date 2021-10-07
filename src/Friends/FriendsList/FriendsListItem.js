import style from "./FriendsListItem.module.css";

const FriendsListItem = (props) => {
  let returnFollowed = () => {
    if (props.user.followed === false) {
      return "unfollow";
    } else {
      return "follow";
    }
  };

  let OnBtnClick = () => {
    props.follow_unfollow(props.user.id);
  };

  return (
    <div className={style.item}>
      <div className={style.left}>
        <div className={style.left_inside}>
          <div className={style.image}></div>
          <button className={style.follow} onClick={OnBtnClick}>
            {returnFollowed()}
          </button>
        </div>
      </div>
      <div className={style.right}>
        <h1 className={style.name}>{props.user.name}</h1>
        <div className={style.lacation}>
          Kiev , Ukraine
        </div>
        <div className={style.status}>{props.user.status}</div>
      </div>
    </div>
  );
};

//{props.user.location.country}, {props.user.location.city}

export default FriendsListItem;
