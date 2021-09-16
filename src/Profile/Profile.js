import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPost from "./MyPosts/MyPost";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPost
        Profile_Data={props.Profile_Data}
        AddPost={props.AddPost}
        ChangePostBuffer={props.ChangePostBuffer}
      />
    </div>
  );
};

export default Profile;
