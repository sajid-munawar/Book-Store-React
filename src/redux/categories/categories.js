const CHECK_STATUS = 'CHECK_STATUS';

// eslint-disable-next-line default-param-last
const checkStatusReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export const checkStatus = (bookStaus) => ({
  type: CHECK_STATUS,
  bookStaus,
});

export default checkStatusReducer;
