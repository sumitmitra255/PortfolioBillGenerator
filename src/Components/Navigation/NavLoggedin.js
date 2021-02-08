import { Box, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useStyles } from '../../css/materialuistyles'
const LoggedInNavBar = (props) => {
	const history = useHistory()
	const classes = useStyles()
	return (
		<Box
			classes={{
				root: classes.boxnav,
			}}>
			<Button
				classes={{
					root: classes.button,
				}}
				onClick={() => {
					history.push('/home')
				}}>
				home
			</Button>
			<Button
				classes={{
					root: classes.button,
				}}
				onClick={() => {
					history.push('/customer')
				}}>
				Customer
			</Button>
			<Button
				classes={{
					root: classes.button,
				}}
				onClick={() => {
					history.push('/product')
				}}>
				Product
			</Button>
			<Button
				classes={{
					root: classes.button,
				}}
				onClick={() => {
					history.push('/bill')
				}}>
				BillList
			</Button>
			<Button
				classes={{
					root: classes.button,
				}}
				onClick={() => {
					history.push('/createbill')
				}}>
				CreateNewBill
			</Button>
			<Button
				classes={{
					root: classes.button,
				}}
				onClick={() => {
					history.push('/createcustomer')
				}}>
				CreateNewCustomer
			</Button>
			<Button
				classes={{
					root: classes.button,
				}}
				onClick={() => {
					history.push('/createproduct')
				}}>
				CreateNewProduct
			</Button>
			<Button
				classes={{
					root: classes.button,
				}}
				onClick={() => {
					history.push('/userinfo')
				}}>
				UserProfile
			</Button>
			<Button
				classes={{
					root: classes.button,
				}}
				onClick={() => {
					localStorage.clear()
					window.location.reload()
					history.push('/login')
				}}>
				Logout
			</Button>
		</Box>
	)
}
export default LoggedInNavBar
