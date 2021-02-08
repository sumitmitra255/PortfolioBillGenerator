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
import { useStyles } from '../../css/materialuistyles'
export const DisplayCart = (props) => {
	const dispatch = useDispatch()
	const history = useHistory()
	const classes = useStyles()
	const stateProducts = useSelector((state) => state.selecteditems)
	const stateCustomer = useSelector((state) => state.selectedcustomer)
	const token = useSelector((state) => state.logintoken.token)
	const billList = useSelector((state) => state.billlist)
	const lineObject = stateProducts.map((ele) => {
		return { product: ele.lineItems._id, quantity: ele.quantity }
	})
	const generatebill = () => {
		const addBilldispatchObject = {
			date: stateCustomer.date,
			customer: `${stateCustomer.customer._id}`,
			lineItems: lineObject,
		}
		dispatch(
			addBillActionGenerator(token, addBilldispatchObject, billList, history)
		)
	}
	const handleDelete = (deletedItem) => {
		dispatch(deleteItemListActionGenerator(deletedItem, stateProducts))
	}
	return (
		<>
			<Button
				classes={{
					root: classes.button,
				}}
				fullWidth
				onClick={generatebill}>
				Generate Bill
			</Button>
			<div className='cartlist'>
				<TableContainer component={Paper}>
					<Table aria-label='simple table'>
						<TableHead key={Date.now() + Math.random()}>
							<TableRow key={Date.now() + Math.random()}>
								<TableCell key={Date.now() + Math.random()}>
									Product Name
								</TableCell>
								<TableCell key={Date.now() + Math.random()}>
									Price Per Unit
								</TableCell>
								<TableCell key={Date.now() + Math.random()}></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{stateProducts.map((ele, i) => {
								return (
									<TableRow hover={true} key={Date.now() + Math.random()}>
										<TableCell key={Date.now() + Math.random()}>
											{ele.lineItems.name}
										</TableCell>
										<TableCell key={Date.now() + Math.random()}>
											Rs : {ele.lineItems.price}
										</TableCell>
										<TableCell key={Date.now() + Math.random()}>
											<Button
												classes={{
													root: classes.button,
												}}
												fullWidth
												onClick={() => handleDelete(ele)}>
												Delete
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
