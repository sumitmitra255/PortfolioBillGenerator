import { useSelector, useDispatch } from 'react-redux'
import LoggedInNavBar from './Navigation/NavLoggedin'
import { useEffect } from 'react'
import { customerListActionGenerator } from '../Actions/customerActions'
import { productListActionGenerator } from '../Actions/productActions'
import { billsListActionGenerator } from '../Actions/billsActions'
import CanvasJSReact from '..//assets/canvasjs.react'
export var CanvasJSChart = CanvasJSReact.CanvasJSChart
export const Home = (props) => {
	const dispatch = useDispatch()
	const token = useSelector((state) => state.logintoken.token)
	useEffect(() => {
		dispatch(customerListActionGenerator(token))
		dispatch(productListActionGenerator(token))
		dispatch(billsListActionGenerator(token))
	}, [])
	return (
		<>
			<LoggedInNavBar />
			Home
			{/* <Charts />.. again pushed*/}
		</>
	)
}
