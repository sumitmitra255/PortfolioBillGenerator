
import { ItemCart } from './ItemCart'
import { SelectCustomer } from './SelectCustomer'
import { DisplayCart } from './DisplayCart'
import '../../css/bill.css'
export const CreateBills = (props) => {
	const { toggle } = props
	return (
		<>
			{toggle ? (
				<>
					<div className='box-1'>
						<div className='btn btn-one'>
							<span>CreateBill</span>
						</div>
					</div>
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
