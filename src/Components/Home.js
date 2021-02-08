import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { UserInfoDetails } from './UserInfoDetails'
import { Customer } from './Customer/Customer'
import LoggedInNavBar from './Navigation/NavLoggedin'
import { useEffect } from 'react'
import { customerListActionGenerator } from '../Actions/customerActions'
import { productListActionGenerator } from '../Actions/productActions'
import { billsListActionGenerator } from '../Actions/billsActions'
import { useStyles } from '../css/materialuistyles'
import CanvasJSReact from '..//assets/canvasjs.react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Dashboard } from './Dashboard'
import { Charts } from './Charts'
export var CanvasJSChart = CanvasJSReact.CanvasJSChart
export const Home = (props) => {
	const dispatch = useDispatch()
	const token = useSelector((state) => state.logintoken.token)
	const tokenst = useSelector((state) => state)
	useEffect(() => {
		dispatch(customerListActionGenerator(token))
		dispatch(productListActionGenerator(token))
		dispatch(billsListActionGenerator(token))
	}, [token])
	return (
		<>
			<LoggedInNavBar />
			<Dashboard />
			{/* <Charts />.. again pushed*/}
		</>
	)
}
