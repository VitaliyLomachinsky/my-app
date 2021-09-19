import React from "react";
import MyPost from "./MyPost";
import {
  AddPostActionCreator,
  ChangePostBufferActionCreator,
} from "../../Redux/Profile_reducer";
import StoreContext from "../../Redux/StoreContext";

const MyPostContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let AddPost = () => {
          store.dispatch(AddPostActionCreator());
        };

        let OnChangePost = (text) => {
          store.dispatch(ChangePostBufferActionCreator(text));
        };

        return (
          <MyPost
            postsData={store.getState().Profile_Data.postsData}
            AddPost={AddPost}
            OnChangePost={OnChangePost}
            PostTextBuffer={store.getState().Profile_Data.PostTextBuffer}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostContainer;
