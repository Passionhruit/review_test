import shortid from "shortid";

// Action Value
const ADD_REVIEW = "ADD_REVIEW";
const DELETE_REVIEW = "DELETE_REVIEW";

// Action Creator

export const addReview = (user, comment) => {
  return {
    type: ADD_REVIEW,
    payload: {
      id: shortid.generate(),
      user,
      comment,
    },
  };
};

// InitialState

const initialState = [
  {
    id: shortid.generate(),
    user: "홍길동",
    comment: "댓글입니다.",
  },
];

// 리듀서

const reviews = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return [...state, action.payload];
    case DELETE_REVIEW:
      return state.filter((value) => value.id !== action.payload);
    default:
      return state;
  }
};

export default reviews;
