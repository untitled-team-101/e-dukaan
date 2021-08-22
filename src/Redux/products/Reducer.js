import {LOAD_PRODUCTS, SEARCH_PRODUCTS} from "../CONSTANTS";

const chooseProducts = (allProducts, searchKeyword) => {
  if(!searchKeyword)
    return []
  // TODO: Multi word searching
  console.log(allProducts)
  return allProducts.filter(product => product.toLowerCase().contains(searchKeyword.toLowerCase));
}

const chooseRandomProducts = (allProducts, count)=>{
  count = count ?? 10
  if(allProducts.length <= count)
    return [...allProducts]
  const chosenProducts = []
  while(chosenProducts.length < count){
    const randomProduct = allProducts[Math.floor(Math.random()*allProducts.length)]
    if(chosenProducts.filter(product => product.id === randomProduct.id).length === 0)
      chosenProducts.push(randomProduct)
  }
  return chosenProducts
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        chosenProducts: chooseRandomProducts(action.payload)
      }
    case SEARCH_PRODUCTS:
      return {
        ...state,
        chosenProducts: chooseProducts(state.allProducts, action.payload)
      }
    default:
      return state
  }
}

export default reducer
