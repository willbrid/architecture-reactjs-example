import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectShopCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map((key) => collections[key])
);

export const selectShopCollection = collectionUrlParam => 
    createSelector(
        [selectShopCollections],
        collections => collections[collectionUrlParam]
    ); 

export const selectIsShopCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);  

export const selectIsShopCollectionLoaded = createSelector(
    [selectShop],
    shop => Object.keys(shop.collections).length > 0 ? true : false
);  