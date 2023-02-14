import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/filterReducer";
const FilterContext = createContext();

const initalState = {
    filter_products:[],
    all_products:[]
}
export const FilterContextProvider = ({children}) =>{
    const {products} = useProductContext();
    const [state,dispatch] = useReducer(reducer,initalState);
    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products})
    },[products])
   return(
    <FilterContext.Provider value={{...state }}>{children}</FilterContext.Provider>
   )
}
export const useFilterContext = () =>{
    return useContext(FilterContext);
}