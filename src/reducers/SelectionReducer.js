export default (state, action) => {
    switch (action.payload) {
        case 'SELECT_STACK_ID':
            return action.payload;
        default:
            return 0;
    }
};
