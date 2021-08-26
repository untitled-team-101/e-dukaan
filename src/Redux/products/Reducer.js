import {LOAD_PRODUCTS, SEARCH_CATEGORY, SEARCH_PRODUCTS} from "../CONSTANTS";

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

const selectCategory = (allProducts, category) => {
  return allProducts.filter(product => product.category.toLowerCase() === category.toLowerCase())
}

const filterCategories = (allProducts)=>{
  const categories = []
  for(const product of allProducts){
    let isNew = true;
    for(const category of categories){
      if(category === product.category)
        isNew = false
    }
    if(isNew)
      categories.push(product.category)
  }
  return categories
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        chosenProducts: chooseRandomProducts(action.payload),
        allCategories: filterCategories(action.payload)
      }
    case SEARCH_PRODUCTS:
      return {
        ...state,
        chosenProducts: chooseProducts(state.allProducts, action.payload)
      }
    case SEARCH_CATEGORY:
      return {
        ...state,
        chosenProducts: selectCategory(state.allProducts, action.payload)
      }
    default:
      return state
  }
}

export default reducer
