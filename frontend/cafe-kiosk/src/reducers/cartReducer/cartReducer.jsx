export default function cartReducer(state, action) {
    switch(action.type) {
        case "ADD_ITEM":
            return [...state, action.payload];
        case "DELETE_ITEM":
            return [...action.payload];
        default: 
            return state;
    }
}