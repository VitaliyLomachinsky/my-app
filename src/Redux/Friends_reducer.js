const SHOW_MORE = "SHOW_MORE";
const FOLLOW_UNFOLLOW = "FOLLOW_UNFOLLOW";

const initialState = {
  users: [
    {
      id: 1,
      followed: false,
      fullName: "Vitaliy Lomachinsky",
      location: {
        city: "Kiev",
        country: "Ukraine",
      },
      status: "Hello, a im nisan",
    },
    {
      id: 2,
      followed: true,
      fullName: "Dima Sotnyk",
      location: {
        city: "Minsk",
        country: "Belarus",
      },
      status: "C# visual basic 31",
    },
    {
      id: 3,
      followed: true,
      fullName: "Oksana Maluh",
      location: {
        city: "San - Paulo",
        country: "Egypt",
      },
      status: "Cool birthday",
    },
  ],
};

const Friends_reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SHOW_MORE: {
      return state;
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
export const show_More_AC = () => ({ type: SHOW_MORE });

export default Friends_reducer;
