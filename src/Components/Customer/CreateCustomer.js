import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createCustomerActionGenerator } from '../../Actions/customerActions'
import { CustomerForm } from './CustomerForm'
import { useStyles } from '../../css/materialuistyles'
import '../../css/customer.css'
import  NavLoggedin  from '../Navigation/NavLoggedin'
export const CreateCustomer = (props) => {
	const { toggle } = props
	const token = useSelector((state) => state.logintoken.token)
	const customerList = useSelector((state) => state.customerlist)
	const dispatch = useDispatch()
	const classes = useStyles()
	let history = useHistory()
	const createDispatcher = (values) => {
		dispatch(createCustomerActionGenerator(customerList, values, token))
	}

	return (
		<>
			{toggle ? <NavLoggedin /> : ''}
			<div class='box-1'>
				<div class='btn btn-one'>Create a new Customer</div>
			</div>
			<CustomerForm dispatcher={createDispatcher} />
		</>
	)
}
