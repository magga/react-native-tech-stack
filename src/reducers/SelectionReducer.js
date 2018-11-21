export default (state, actions) => {
    if (actions.type === 'SELECT_STACK_ID') {
        return actions.payload;
    } else {
        return 0;
    }
};
