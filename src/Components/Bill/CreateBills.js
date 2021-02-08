import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { ItemCart } from './ItemCart'
import { SelectCustomer } from './SelectCustomer'
import { DisplayCart } from './DisplayCart'
import '../../css/bill.css'
import NavLoggedin from '../Navigation/NavLoggedin'
export const CreateBills = (props) => {
	const token = useSelector((state) => state)
	const { toggle } = props
	return (
		<>
			{toggle ? (
				<>
					<NavLoggedin />
					<div className='box-1'>
						<div className='btn btn-one'>
							<span>CreateBill</span>
						</div>
					</div>{' '}
				</>
			) : (
				<h1 className='createbillh1'>Create Bill</h1>
			)}

			<SelectCustomer />
			<ItemCart />
			<DisplayCart />
		</>
	)
}
