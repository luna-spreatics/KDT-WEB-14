const DEPOSIT = "bank/DEPOSIT";
const WITHDRAW = "bank/WITHDRAW";

const initialState = 0;

// payload 라는 이름으로 데이터를 받아주겠다
export const deposit = (payload) => ({ type: DEPOSIT, payload });
export const withdraw = (payload) => ({ type: WITHDRAW, payload });

const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      return state + action.payload;
    case WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
};

export default bankReducer;
