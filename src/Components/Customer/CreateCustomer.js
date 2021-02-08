import { useSelector, useDispatch } from 'react-redux'
import { createCustomerActionGenerator } from '../../Actions/customerActions'
import { CustomerForm } from './CustomerForm'
import '../../css/customer.css'
import NavLoggedin from '../Navigation/NavLoggedin'
export const CreateCustomer = (props) => {
	const { toggle } = props
	const token = useSelector((state) => state.logintoken.token)
	const customerList = useSelector((state) => state.customerlist)
	const dispatch = useDispatch()
	const createDispatcher = (values) => {
		dispatch(createCustomerActionGenerator(customerList, values, token))
	}

	return (
		<>
			{toggle ? <NavLoggedin /> : ''}
			<div className='box-1'>
				<div className='btn btn-one'>Create a new Customer</div>
			</div>
			<CustomerForm dispatcher={createDispatcher} />
		</>
	)
}
