import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import {
	userinfoReducer,
	loginReducer,
	registerReducer,
} from '../Reducers/reducers.js'
import {
	customerListReducer,
	customerDetailsReducer,
} from '../Reducers/customerReducers.js'
import {
	productListReducer,
	productDetailsReducer,
} from '../Reducers/productReducers'
import {
	billsListReducer,
	selectedcustomerReducer,
	selectedItemsReducer,
	billsDetailsReducer,
} from '../Reducers/billsReducers'
const configureStore = () => {
	const store = createStore(
		combineReducers({
			register: registerReducer,
			logintoken: loginReducer,
			userinfo: userinfoReducer,
			customerlist: customerListReducer,
			customerDetails: customerDetailsReducer,
			productlist: productListReducer,
			productdetails: productDetailsReducer,
			billlist: billsListReducer,
			selectedcustomer: selectedcustomerReducer,
			selecteditems: selectedItemsReducer,
			billsdetails: billsDetailsReducer,
		}),
		applyMiddleware(thunk)
	)
	return store
}
export default configureStore
