import React from "react";
import MyPost from "./MyPost";
import {
  AddPostActionCreator,
  ChangePostBufferActionCreator,
} from "../../Redux/Profile_reducer";

const MyPostContainer = (props) => {
  debugger;
  let AddPost = () => {
    props.dispatch(AddPostActionCreator());
  };

  let OnChangePost = (text) => {
    props.dispatch(ChangePostBufferActionCreator(text));
  };

  return (
    <MyPost
      postsData={props.state.Profile_Data.postsData}
      AddPost={AddPost}
      OnChangePost={OnChangePost}
      PostTextBuffer={props.state.Profile_Data.PostTextBuffer}
    />
  );
};

export default MyPostContainer;
