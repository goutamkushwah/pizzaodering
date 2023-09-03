const { createSlice } = require('@reduxjs/toolkit');


const initialState = {
    data : [],
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts : (state, action)=>{
            state.data = action.payload;
        },
    }
})


export const { setProducts } = productSlice.actions;
export default productSlice.reducer;

// export const fetchProducts = createAsyncThunk('products/fetch', async ()=>{
//     const res = await fetch('http://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68');
//     const data = await res.json();
//     console.log(data);
//     return data;
// })

export function fetchProducts() {
        return async function fetchProductThunk(dispatch,getState) {
            
            try {
                const res = await fetch('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68');
                const data = await res.json();
                dispatch(setProducts(data));
                
            } catch (err) {
                console.log(err);
                
            }
        };
    }