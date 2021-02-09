import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import {
	customerListActionGenerator,
	setCustomersListLocalStorage,
} from '../Actions/customerActions'
import {
	productListActionGenerator,
	setProductListLocalStorage,
} from '../Actions/productActions'
import {
	billsListActionGenerator,
	setBillsListLocalStorage,
} from '../Actions/billsActions'
import { Dashboard } from './Dashboard'
export const Home = (props) => {
	const dispatch = useDispatch()
	const token = useSelector((state) => state.logintoken.token)
	const [customerlist, setcustomerlist] = useState(
		localStorage.getItem('customerlist')
			? JSON.parse(localStorage.getItem('customerlist'))
			: ''
	)
	const [productlist, setproductlist] = useState(
		localStorage.getItem('productlist')
			? JSON.parse(localStorage.getItem('productlist'))
			: ''
	)
	const [billlist, setbilllist] = useState(
		localStorage.getItem('billlist')
			? JSON.parse(localStorage.getItem('billlist'))
			: ''
	)
	// const statevalue = useSelector((state) => state)
	// console.log(statevalue)

	useEffect(() => {
		if (!customerlist) {
			dispatch(customerListActionGenerator(token))
		}
		if (!productlist) {
			dispatch(productListActionGenerator(token))
		}
		if (!billlist) {
			dispatch(billsListActionGenerator(token))
		}
	}, [])
	useEffect(() => {
		dispatch(setProductListLocalStorage(token, productlist))
		dispatch(setBillsListLocalStorage(token, billlist))
		dispatch(setCustomersListLocalStorage(token, customerlist))
	}, [])
	return (
		<>

			<Dashboard />
		</>
	)
}
