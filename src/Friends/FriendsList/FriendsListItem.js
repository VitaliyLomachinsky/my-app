import style from "./FriendsListItem.module.css";

const FriendsListItem = () => {
  return (
    <div className={style.item}>
      <div className={style.left}>
        <div className={style.left_inside}>
          <div className={style.image}></div>
          <button className={style.follow}>Follow</button>
        </div>
      </div>
      <div className={style.right}>
        <h1 className={style.name}>Vitaliy Lomachinsky</h1>
        <div className={style.lacation}>Kiev, Ukraine</div>
        <div className={style.status}>am looking for a new job</div>
      </div>
    </div>
  );
};

export default FriendsListItem;
