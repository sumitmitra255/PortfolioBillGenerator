import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import { useState } from 'react'
import { selectedItemListrActionGenerator } from '../../Actions/billsActions'
import { Button } from '@material-ui/core'
import { useStyles } from '../../css/materialuistyles'
import '../../css/bill.css'
export const ItemCart = (props) => {
	const dispatch = useDispatch()
	const classes = useStyles()
	const stateProducts = useSelector((state) => state.selecteditems)
	const [selectedProduct, setSelectedProduct] = useState({})
	const [quantity, setQuantity] = useState(0)
	const token = useSelector((state) => state.logintoken.token)
	const productList = useSelector((state) => state.productlist)
	const productOptions = productList.map((ele) => {
		return { value: ele, label: `${ele.name}(price per unit Rs. ${ele.price})` }
	})
	const addToItemList = (e) => {
		e.preventDefault()
		const lineitemsdispatchobject = {
			lineItems: selectedProduct,
			quantity: quantity,
		}
		dispatch(
			selectedItemListrActionGenerator(lineitemsdispatchobject, stateProducts)
		)
	}
	return (
		<>
			<form onSubmit={addToItemList}>
				<Select
					options={productOptions}
					onChange={(opt) => setSelectedProduct(opt.value)}
					isSearchable
				/>
				<div className='general'>
					<span>Quantity : </span>

					<input
						type='number'
						value={quantity < 1 ? setQuantity(1) : quantity}
						onChange={(e) => setQuantity(e.target.value)}
					/>
				</div>

				<Button
					classes={{
						root: classes.button,
					}}
					fullWidth
					type='submit'>
					Add To ItemList
				</Button>
			</form>
		</>
	)
}
