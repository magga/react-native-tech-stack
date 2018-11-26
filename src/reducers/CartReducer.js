const INITIAL_STATE = {
    products: [],
    address: '',
    shippingMethod: '',
    paymentMethod: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            break;
        case 'CHANGE_QUANTITY':
            break;
        case 'REMOVE_PRODUCT':
            break;
        case 'SELECT_ADDRESS':
            return { ...state, address: action.payload };
        case 'SELECT_SHIPPING_METHOD':
            break;
        case 'SELECT_PAYMENT_METHOD':
            break;
        case 'CLEAR_CART':
            return INITIAL_STATE;
        default:
            return state;
    }
};
