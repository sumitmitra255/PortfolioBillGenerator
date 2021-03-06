import { useSelector, useDispatch } from 'react-redux'
import {
	userproductDetailsActionGenerator,
	updateproductActionGenerator,
	deleteproductActionGenerator,
} from '../../Actions/productActions'
import { useHistory } from 'react-router-dom'
import { ProductForm } from './ProductForm'
import { useState } from 'react'
import { Button, TableCell } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

export const DisplayProduct = (props) => {
	const { ProductEle } = props
	const [editToggle, setEditToggle] = useState(false)
	const dispatch = useDispatch()
	const history = useHistory()
	const token = useSelector((state) => state.logintoken.token)
	const productList = useSelector((state) => state.productlist)
	const displayProducts = () => {
		dispatch(userproductDetailsActionGenerator(ProductEle, token, history))
	}
	const updateProductsdispatcher = (formdata) => {
		dispatch(
			updateproductActionGenerator(
				productList,
				ProductEle,
				formdata,
				token,
				setEditToggle
			)
		)
	}
	const deleteProducts = () => {
		dispatch(
			deleteproductActionGenerator(
				productList,
				ProductEle,
				token,
				setEditToggle
			)
		)
	}
	return (
		<>
			{editToggle ? (
				<TableCell>
					<ProductForm
						productsDetails={ProductEle}
						dispatcher={updateProductsdispatcher}
					/>
				</TableCell>
			) : (
				<>
					<TableCell onClick={displayProducts}>{ProductEle.name}</TableCell>
					<TableCell onClick={displayProducts}>{ProductEle.price}</TableCell>
				</>
			)}
			{editToggle ? (
				<TableCell>
					<Button
						variant='contained'
						color='primary'
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
				<Button variant='contained' color='secondary' onClick={deleteProducts}>
					<DeleteIcon />
				</Button>
			</TableCell>
		</>
	)
}
