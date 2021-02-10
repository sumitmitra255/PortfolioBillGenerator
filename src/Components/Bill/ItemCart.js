import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import { useState } from 'react'
import { selectedItemListrActionGenerator } from '../../Actions/billsActions'
import { Button, Input } from '@material-ui/core'
import '../../css/bill.css'
import swal from 'sweetalert'
export const ItemCart = (props) => {
	const dispatch = useDispatch()
	const stateProducts = useSelector((state) => state.selecteditems)
	const [selectedProduct, setSelectedProduct] = useState()
	const [quantity, setQuantity] = useState(0)
	const productList = useSelector((state) => state.productlist)
	const productOptions = productList.map((ele) => {
		return { value: ele, label: `${ele.name}(price per unit Rs. ${ele.price})` }
	})
	const addToItemList = (e) => {
		e.preventDefault()
		if (selectedProduct && quantity !== 0) {
			const lineitemsdispatchobject = {
				lineItems: selectedProduct,
				quantity: quantity,
			}
			dispatch(
				selectedItemListrActionGenerator(lineitemsdispatchobject, stateProducts)
			)
		} else {
			if (quantity === 0) {
				swal('Quantity of the product cannot be zero', '', 'error')
			} else {
				swal('Please Choose Product first', '', 'error')
			}
		}
	}
	return (
		<>
			<form onSubmit={addToItemList}>
				<div style={{ display: 'flex' }}>
					<Select
						options={productOptions}
						onChange={(opt) => setSelectedProduct(opt.value)}
						isSearchable
						className='itemcartsearch'
					/>
					<Input
						type='number'
						value={quantity < 0 ? setQuantity(0) : quantity}
						onChange={(e) => setQuantity(e.target.value)}
						margin='dense'
						required
					/>

					<Button variant='contained' color='primary' type='submit'>
						Add To ItemList
					</Button>
				</div>
			</form>
		</>
	)
}
