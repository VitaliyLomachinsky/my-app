const SHOW_MORE = "SHOW_MORE";
const FOLLOW_UNFOLLOW = "FOLLOW_UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
  users: [],
};

const Friends_reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MORE: {
      return state;
    }
    case SET_USERS: {
      return { ...state, users: [...action.users] };
    }
    case FOLLOW_UNFOLLOW: {
      debugger;
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            if (u.followed === false) {
              return { ...u, followed: true };
            } else {
              return { ...u, followed: false };
            }
          }
          return u;
        }),
      };
    }
    default: {
      return state;
    }
  }
};

export const follow_Unfollow_AC = (userId) => ({
  type: FOLLOW_UNFOLLOW,
  userId,
});
export const set_Users_AC = (users) => ({
  type: SET_USERS,
  users,
});
export const show_More_AC = () => ({ type: SHOW_MORE });

export default Friends_reducer;
