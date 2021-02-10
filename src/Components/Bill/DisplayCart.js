import {
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
	addBillActionGenerator,
	deleteItemListActionGenerator,
} from '../../Actions/billsActions'
import '../../css/displaycart.css'
import DeleteIcon from '@material-ui/icons/Delete'
import swal from 'sweetalert'
export const DisplayCart = (props) => {
	const dispatch = useDispatch()
	const history = useHistory()
	const stateProducts = useSelector((state) => state.selecteditems)
	const stateCustomer = useSelector((state) => state.selectedcustomer)
	const token = useSelector((state) => state.logintoken.token)
	const billList = useSelector((state) => state.billlist)
	const lineObject = stateProducts.map((ele) => {
		return { product: ele.lineItems._id, quantity: ele.quantity }
	})
	const generatebill = () => {
		if (stateCustomer.customer && lineObject.length) {
			const addBilldispatchObject = {
				date: stateCustomer.date,
				customer: `${stateCustomer.customer._id}`,
				lineItems: lineObject,
			}
			dispatch(
				addBillActionGenerator(token, addBilldispatchObject, billList, history)
			)
		} else {
			if (!stateCustomer.customer) {
				swal('Choose Customer first', '', 'error')
			} else {
				swal('choose items first', '', 'error')
			}
		}
	}
	const handleDelete = (deletedItem) => {
		dispatch(deleteItemListActionGenerator(deletedItem, stateProducts))
	}
	return (
		<>
			<Button variant='contained' color='primary' onClick={generatebill}>
				Generate Bill
			</Button>
			<div className='cartlist'>
				<TableContainer component={Paper}>
					<Table aria-label='simple table'>
						<TableHead>
							<TableRow>
								<TableCell>Product Name</TableCell>
								<TableCell>Price Per Unit</TableCell>
								<TableCell></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{stateProducts.map((ele, i) => {
								return (
									<TableRow hover={true} key={i + Math.random()}>
										<TableCell>{ele.lineItems.name}</TableCell>
										<TableCell>Rs : {ele.lineItems.price}</TableCell>
										<TableCell>
											<Button
												variant='contained'
												color='secondary'
												onClick={() => handleDelete(ele)}>
												<DeleteIcon />
											</Button>
										</TableCell>
									</TableRow>
								)
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</>
	)
}
