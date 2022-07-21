const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// eslint-disable-next-line default-param-last
const checkStatusReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default checkStatusReducer;
