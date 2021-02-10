import { useSelector, useDispatch } from 'react-redux'
import { createCustomerActionGenerator } from '../../Actions/customerActions'
import { CustomerForm } from './CustomerForm'
import '../../css/customer.css'
export const CreateCustomer = (props) => {
	const token = useSelector((state) => state.logintoken.token)
	const customerList = useSelector((state) => state.customerlist)
	const dispatch = useDispatch()
	const createDispatcher = (values) => {
		dispatch(createCustomerActionGenerator(customerList, values, token))
	}

	return (
		<>
			<div className='box-1'>
				<div className='btn btn-one'>Create a new Customer</div>
			</div>
			<CustomerForm dispatcher={createDispatcher} />
		</>
	)
}
