// INI ADALAH ACTION CREATOR
export const selectStackId = (id) => {
    // INI ADALAH ACTION
    // ACTION BERUPA OBJECT
    return {
        type: 'SELECT_STACK_ID',
        payload: id
    };
};
