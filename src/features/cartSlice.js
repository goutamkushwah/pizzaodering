const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action) {
            const check = state.find((item) => item.product.id === action.payload.product.id);
            if(check){
                check.quantity +=1;
                state = [...state.filter((item) => item.product.id !== action.payload.product.id),check];
            }
            else{
            state.push(action.payload);
            }
        },
        removeFromCart(state, action) {
            const itemToRemove = state.find((item) => item.product.id === action.payload);

            if (!itemToRemove) {
                return state;
            }

            if (itemToRemove.quantity > 1) {
              return state.map((item) =>
                item.product.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
              );
            }
  
            return state.filter((item) => item.product.id !== action.payload);
  


            // if(check.quantity>1){
            //     check.quantity -=1;
            //     return [...state.filter((item) => item.id !== action.payload.id),check];
            // }
            // else{
            //     return state.filter((item) => item.id !== action.payload.id);
            // }

            

        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;