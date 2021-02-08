import '../css/App.css'
import { Register } from './Register'
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom'
import { Login } from './Login'
import { loginTokenGenerator } from '../Actions/actions'
import { useDispatch } from 'react-redux'
import { Home } from './Home'
import { CustomerDetails } from './Customer/CustomerDetails.js'
import { Customer } from './Customer/Customer.js'
import { Product } from './Products/Products'
import { ProductDetails } from './Products/ProductDetails.js'
import { Bill } from './Bill/Bill'
import { BillsDetails } from './Bill/BillsDetails.js'
import { useState } from 'react'
import { CreateBills } from './Bill/CreateBills'
import { CreateCustomer } from './Customer/CreateCustomer'
import { CreateProduct } from './Products/CreateProduct'
import { UserInfoDetails } from './UserInfoDetails'
import { Dashboard } from './Dashboard'
function App() {
	const dispatch = useDispatch()
	let history = useHistory()
	const [token, setToken] = useState(
		localStorage.getItem('userToken') ? localStorage.getItem('userToken') : ''
	)
	if (token) {
		dispatch(loginTokenGenerator(token, history))
		history.push('/home')
	} else {
		history.push('/login')
	}

	return (
		<>
			<Router>
				<Route exact path='/home' render={(props) => <Home />} />
				<Route exact path='/register' render={(props) => <Register />} />
				<Route exact path='/login' render={(props) => <Login />} />
				<Route
					exact
					path='/customerinfo'
					render={(props) => <CustomerDetails />}
				/>
				<Route exact path='/customer' render={(props) => <Customer />} />
				<Route exact path='/product' render={(props) => <Product />} />
				<Route
					exact
					path='/productinfo'
					render={(props) => <ProductDetails />}
				/>
				<Route exact path='/billsinfo' render={(props) => <BillsDetails />} />
				<Route exact path='/bill' render={(props) => <Bill />} />
				<Route
					exact
					path='/createbill'
					render={(props) => <CreateBills toggle={true} />}
				/>

				<Route
					exact
					path='/createcustomer'
					render={(props) => <CreateCustomer toggle={true} />}
				/>

				<Route
					exact
					path='/createproduct'
					render={(props) => <CreateProduct toggle={true} />}
				/>
				<Route
					exact
					path='/userinfo'
					render={(props) => <UserInfoDetails toggle={true} />}
				/>
				<Route
					exact
					path='/dashboard'
					render={(props) => <Dashboard toggle={true} />}
				/>
			</Router>
		</>
	)
}

export default App
