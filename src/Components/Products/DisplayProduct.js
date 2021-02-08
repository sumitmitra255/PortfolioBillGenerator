import { useSelector, useDispatch } from 'react-redux'
import {
	userproductDetailsActionGenerator,
	updateproductActionGenerator,
	deleteproductActionGenerator,
} from '../../Actions/productActions'
import { useStyles } from '../../css/materialuistyles'
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
	const classes = useStyles()
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
						classes={{
							root: classes.button,
						}}
						fullWidth
						onClick={() => setEditToggle(true)}>
						<EditIcon />
					</Button>
				</TableCell>
			)}
			<TableCell>
				<Button
					classes={{
						root: classes.button,
					}}
					fullWidth
					onClick={deleteProducts}>
					<DeleteIcon />
				</Button>
			</TableCell>
		</>
	)
}
