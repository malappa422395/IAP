import { 
    SET_SEARCH_FILTER, 
    SET_ASSETS
} from '../types';
import store from '../store';

export const setAssets = (assetsData, type)=> (dispatch) => {
    if(type === "initial"){
        dispatch({
            type: SET_ASSETS,
            payload: assetsData
        })
        dispatch({
            type: SET_SEARCH_FILTER,
            payload: assetsData
        })
    }
    if(type === "normal"){
        dispatch({
            type: SET_ASSETS,
            payload: assetsData
        })
        dispatch({
            type: SET_SEARCH_FILTER,
            payload: store.getState().user.allAssets
        })
    }
}


export const searchFilter = (data) => (dispatch) => {
    let tagFound = [];
    let products = [];
    if(data.length > 0){
        products = store.getState().user.allAssets;
        products = products.filter((asset, index) => {
            let formattedAssetName = asset.name.replace(/[^\w\s]/gi, '');
            if (formattedAssetName?.toLowerCase().indexOf(data?.toLowerCase()) > -1 || asset.description.toLowerCase().indexOf(data.toLowerCase()) > -1)
            {
                return true
            }
            asset.techlogies.map((tag) => {
                if(tag.name.toLowerCase().indexOf(data.toLowerCase()) > -1){
                    tagFound[index] = true;
                }
                return tag;
            })
            if(tagFound[index]){
                return true
            }
            
            return false
        })
    }
    if(data.length === 0 && products.length ===0) {
        products = store.getState().user.allAssets;
    }
    dispatch({
        type: SET_SEARCH_FILTER,
        payload: products
    })
}

export const searchFilterArray = (data) => (dispatch) => {
    let tagFound = [];
    let products;
    if(data.length > 0){
        products = store.getState().user.allAssets;
        products = products?.filter((asset, index) => {
            asset?.techlogies?.map((tag) => {
                data?.map((value) => {
                    if(tag?.name?.toLowerCase()?.indexOf(value?.toLowerCase()) > -1){
                        tagFound[index] = true;
                    }
                    return value
                })
                return tag;
            })
            if(tagFound[index]){
                return true
            }
            return false
        })
    }
    if(data.length === 0) {
        products = store.getState().user.allAssets;
    }
    dispatch({
        type: SET_SEARCH_FILTER,
        payload: products
    })
}

export const getAssets = () =>{
    return store.getState().user.allAssets.length
}
