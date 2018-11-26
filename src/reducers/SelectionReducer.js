export default (state = 0, action) => {
    switch (action.type) {
        case 'SELECT_STACK_ID':
            return action.payload;
        default:
            return state;
    }
};
