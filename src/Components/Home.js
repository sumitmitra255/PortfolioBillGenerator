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
import '../css/dashboard.css'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Dashboard } from './Dashboard'
var CanvasJSChart = CanvasJSReact.CanvasJSChart
const Charts = (props) => {
	const nocustomers = useSelector((state) => state.customerlist)
	const options = {
		backgroundColor: '#4caf50',
		animationEnabled: true,
		animationDuration: 3000,
		width: 320,
		height: 260,
		title: {
			text: 'Total Customers',
			fontColor: 'white',
		},
		subtitles: [
			{
				fontColor: 'white',
				text: `Customers : ${nocustomers.length}`,
				verticalAlign: 'center',
				fontSize: 14,
				dockInsidePlotArea: true,
			},
		],
		data: [
			{
				toolTipContent: '{y}',
				color: 'white',
				type: 'doughnut',
				showInLegend: true,
				indexLabel: '{name}: {y}',
				indexLabelBackgroundColor: '#4caf50',
				indexLabelFontColor: 'white',
				yValueFormatString: '',
				dataPoints: [{ name: 'No Of Customers', y: nocustomers.length }],
			},
		],
	}

	return (
		<>
			<CanvasJSChart
				options={options}
				/* onRef={ref => this.chart = ref} */
			/>
		</>
	)
}
export const Home = (props) => {
	const dispatch = useDispatch()
	const token = useSelector((state) => state.logintoken.token)
	const tokenst = useSelector((state) => state)
	console.log(tokenst)
	useEffect(() => {
		dispatch(customerListActionGenerator(token))
		dispatch(productListActionGenerator(token))
		dispatch(billsListActionGenerator(token))
	}, [token])
	return (
		<>
			<LoggedInNavBar />
			<Dashboard />
		</>
	)
}
