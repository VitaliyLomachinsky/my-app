const ADD_POST = "AddPost";
const CHANGE_POST_BUFFER = "ChangePostBuffer";

const initialState = {
  postsData: [
    { id: 1, text: "Suup man, crazy game was be yesterday" },
    { id: 2, text: "Hellllo, how are you/???" },
    { id: 3, text: "Go to hell!" },
    { id: 4, text: "Shut the fuck up!" },
    { id: 5, text: "Sheeeeeeeeeeeeesh" },
  ],

  PostTextBuffer: "",
};

const Profile_reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      if (state.PostTextBuffer != "") {
        let newPost = {
          id: state.postsData.length + 1,
          text: state.PostTextBuffer,
        };

        let stateCopy = { ...state };
        stateCopy.postsData = [...state.postsData];
        stateCopy.postsData.push(newPost);
        stateCopy.PostTextBuffer = "";
        return stateCopy;
      }
      break;
    }

    case CHANGE_POST_BUFFER: {
      let stateCopy = { ...state };
      stateCopy.PostTextBuffer = action.text;
      return stateCopy;
    }

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
