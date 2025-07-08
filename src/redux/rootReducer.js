import { combineReducers } from '@reduxjs/toolkit';
import AuthReducer from './slice/AuthSlice';
import toastReducer from './slice/toastSlice';
import rightSideOffCanvasReducer from './slice/RightSideOffCanvasSlice';
import CartReducer from './slice/CartSlice';
import AllDataReducer from './slice/AllDataSlice';
import CategoryFilterReducer from './slice/CategoryFilterSlice';
import DropDownBrandSelectedItemFilterReducer from './slice/DropDownBrandSelectedItemSlice';
import dropDownDiscountSelectedItemFilterReducer from './slice/DropDownDiscountSelectedItemSlice ';
import productIDFilterReducer from './slice/ProductIdSlice';


const rootReducer = combineReducers({
	auth: AuthReducer,
	toast: toastReducer,
	rightSideOffCanvas: rightSideOffCanvasReducer,
	allData: AllDataReducer,
	cart: CartReducer,
	categoryFilter: CategoryFilterReducer,
	dropDownBrandSelectedItemFilter: DropDownBrandSelectedItemFilterReducer,
	dropDownDiscountSelectedItemFilter: dropDownDiscountSelectedItemFilterReducer,
	productIDFilter: productIDFilterReducer,
})
export default rootReducer;

