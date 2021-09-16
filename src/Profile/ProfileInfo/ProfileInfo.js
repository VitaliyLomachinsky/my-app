import Main_image from "../../Media/Social-Network.jpg";
import Profile_image from "../../Media/avatar.jpg";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <img className={classes.big_image} src={Main_image} />
      <div className={classes.profile_main}>
        <div className={classes.profile_main_left}>
          <img className={classes.avatar} src={Profile_image}></img>
        </div>
        <div className={classes.profile_main_right}>
          <div className={classes.Name}>Vitaliy Lomachinsky</div>
          <div className={classes.About_Me}>
            <span>
              <b>Age: </b>34
            </span>
            <br></br>
            <span>
              <b>City:</b> Kiev
            </span>
            <br></br>
            <span>
              <b>Hobby:</b> Basketball
            </span>
            <br></br>
            <span>
              <b>About me:</b> love coding and play basketball , student
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
