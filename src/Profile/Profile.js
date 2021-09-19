import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostContainer state={props.state}  dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
