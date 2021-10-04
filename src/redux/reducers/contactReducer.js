const initialState = [
  {
    id: 0,
    name: "Jayakrishnan",
    number: 212112,
    email: "jk@gmail.com",
  },
  {
    id: 1,
    name: "TestName",
    number: 536893,
    email: "test@gmai.com",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    default:
      return state;
  }
};

export default contactReducer;
