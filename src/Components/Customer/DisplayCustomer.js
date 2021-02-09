import { useSelector, useDispatch } from 'react-redux'
import {
	userCustomerDetailsActionGenerator,
	UpdateCustomerActionGenerator,
	deleteCustomerActionGenerator,
} from '../../Actions/customerActions'
import { useStyles } from '../../css/materialuistyles'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { useHistory } from 'react-router-dom'
import { CustomerForm } from './CustomerForm'
import { useState } from 'react'
import { Button, TableCell } from '@material-ui/core'

export const DisplayCustomer = (props) => {
	const { customerEle } = props
	const [editToggle, setEditToggle] = useState(false)
	const dispatch = useDispatch()
	const history = useHistory()
	const classes = useStyles()
	const token = useSelector((state) => state.logintoken.token)
	const customerList = useSelector((state) => state.customerlist)
	const displayCustomer = () => {
		dispatch(userCustomerDetailsActionGenerator(customerEle, token, history))
	}
	const updateCustomerdispatcher = (formdata) => {
		dispatch(
			UpdateCustomerActionGenerator(
				customerList,
				customerEle,
				formdata,
				token,
				setEditToggle
			)
		)
	}
	const deleteCustomer = () => {
		dispatch(
			deleteCustomerActionGenerator(
				customerList,
				customerEle,
				token,
				setEditToggle
			)
		)
	}
	return (
		<>
			{editToggle ? (
				<TableCell>
					<CustomerForm
						customerDetails={customerEle}
						dispatcher={updateCustomerdispatcher}
					/>
				</TableCell>
			) : (
				<>
					<TableCell onClick={displayCustomer}>{customerEle.name}</TableCell>
					<TableCell onClick={displayCustomer}>{customerEle._id}</TableCell>
				</>
			)}
			{editToggle ? (
				<TableCell>
					<Button
						classes={{
							root: classes.button,
						}}
						fullWidth
						onClick={() => setEditToggle(false)}>
						Cancel Edit
					</Button>
				</TableCell>
			) : (
				<TableCell>
					<Button
						variant='contained'
						color='primary'
						onClick={() => setEditToggle(true)}>
						<EditIcon />
					</Button>
				</TableCell>
			)}
			<TableCell>
				<Button variant='contained' color='secondary' onClick={deleteCustomer}>
					<DeleteIcon />
				</Button>
			</TableCell>
		</>
	)
}
