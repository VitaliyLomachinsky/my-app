const ADD_POST = "AddPost";
const CHANGE_POST_BUFFER = "ChangePostBuffer";

const Profile_reducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      if (state.PostTextBuffer != "") {
        debugger;
        let newPost = {
          id: state.postsData.length + 1,
          text: state.PostTextBuffer,
        };
        state.postsData.push(newPost);
        state.PostTextBuffer = "";
      }
      break;

    case CHANGE_POST_BUFFER:
      state.PostTextBuffer = action.text;
      break;

    default:
      return state;
  }
  return state;
};

export const AddPostActionCreator = () => ({ type: ADD_POST });
export const ChangePostBufferActionCreator = (text) => ({
  type: CHANGE_POST_BUFFER,
  text: text,
});

export default Profile_reducer;
