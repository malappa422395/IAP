import { 
    SET_SEARCH_FILTER, 
} from '../types';
import mainData from './../../mockdata/homepage.json';

let products = mainData.assets.slice();
let assets = [];

export const searchFilter = (data) => (dispatch) => {
    let tagFound = [];
    assets = products;
    if(data.length > 0){
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
            console.log(asset)
            if(tagFound[index]){
                return true
            }
            
            return false
        })
    }
    if(data.length === 0 && products.length ===0) {
        products = mainData.assets.slice();
    }
    dispatch({
        type: SET_SEARCH_FILTER,
        payload: products
    })
}

export const searchFilterArray = (data) => (dispatch) => {
    let tagFound = [];
    assets = products;
    if(data.length > 0){
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
    if(data.length === 0 && products.length ===0) {
        products = mainData.assets.slice();
    }
    dispatch({
        type: SET_SEARCH_FILTER,
        payload: products
    })
}

export const getAssets = () =>{
    return assets.length || 0;
}

// export const setAssets = (products)=>{
//   assets = products;
// }