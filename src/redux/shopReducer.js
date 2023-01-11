import productss from './product';
import * as Actions from './actions'
const initialState = {
    products : productss,
    cart : [],
    currentItem : null 
}

const shopReducer = (state=initialState , action)=>{
    switch (action.type) {
        case Actions.ADD_TO_CART:
            const item = state.products.find((product)=>product.id==action.payload.id);
            const inCart = state.cart.find((product)=>product.id==action.payload.id?true:false) ;
            return {...state,
                cart:inCart? state.cart.map((product)=>product.id==action.payload.id?{...product,qty:product.qty+1}: product)  
                : [...state.cart , {...item,qty:1}]
            }
                
        case  Actions.DELETE_FROM_CART:
            return {...state,
                cart: state.cart.filter((product)=>product.id!=action.payload.id)  
                
            }
        case Actions.LOAD_CURRENT_ITEM:
            return {...state ,currentItem:action.payload.item}
        case  Actions.UPDATE_QTY:
            return {...state,cart:state.cart.map((item)=>item.id==action.payload.id ? {...item , qty:parseInt(action.payload.value)}:item )}

        default:
            return state;
    }
}

export default shopReducer;