// Reducer
function cartReducer(state, action) {
    if (state === undefined) {
        // console.log("reducer initialized")
      return { 
        totalCost: 0,
        productCart: [
            {
                productName: "Veronica",
                productPrice: 0
            }
        ]
        
      };
    }

    switch(action.type){
        case "addProduct":
        console.log("add product called" + action.productData.productName);
        return{
            ...state,
            totalCost: state.totalCost + parseInt(action.productData.productPrice),
            productCart: state.productCart.concat({
                productName: action.productData.productName,
                productPrice: action.productData.productPrice
            })  
        }
        
        case "deleteProduct":

            const updatedArray =  state.productCart.filter( product =>
                {
                    return product.productName !== action.productData.productName
                }
            )

            return{

                ...state,
                totalCost: state.totalCost - parseInt(action.productData.productPrice),
                productCart: updatedArray

            }
        default:
            return (state)

    }
}

export default cartReducer;