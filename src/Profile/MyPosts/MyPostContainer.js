import MyPost from "./MyPost";
import {
  AddPostActionCreator,
  ChangePostBufferActionCreator,
} from "../../Redux/Profile_reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    postsData: state.Profile_Data.postsData,
    PostTextBuffer: state.Profile_Data.PostTextBuffer,
  };
};

const mapDispatchToProps  = (dispatch) => {
  return {
    AddPost: () => {
      dispatch(AddPostActionCreator());
    },
    OnChangePost: (text) => {
      dispatch(ChangePostBufferActionCreator(text));
    },
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
