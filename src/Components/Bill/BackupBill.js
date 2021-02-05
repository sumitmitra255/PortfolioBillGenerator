import { useSelector } from 'react-redux'
import Select from 'react-select'
import { useState } from 'react'
import { useEffect } from 'react'

export const CreateBills = (props) => {
	const [selectedCustomer, setSelectedCustomer] = useState({})
	const [selectedProduct, setSelectedProduct] = useState([{}])
	const [quantity, setQuantity] = useState(0)
	const [lineItems, setLineItems] = useState([])
	const date2 = new Date()
	const productList = useSelector((state) => state.productlist)
	const customerList = useSelector((state) => state.customerlist)
	const token = useSelector((state) => state.logintoken.token)

	const customerOptions = customerList.map((ele) => {
		return { value: ele, label: `${ele.name}(${ele.email})` }
	})
	const productOptions = productList.map((ele) => {
		return { value: ele, label: `${ele.name}(price per unit Rs. ${ele.price})` }
	})
	const lineItemList = (opt) => {
		const temp = selectedProduct
		temp.push({ product: opt.value._id })
		setSelectedProduct(temp)
	}
	const lineitem = [
		<>
			<Select
				options={productOptions}
				onChange={(opt) => lineItemList(opt)}
				isSearchable
			/>
			<button onClick={() => setQuantity(quantity + 1)}>+</button>
			<input
				type='number'
				value={quantity < 0 ? setQuantity(0) : quantity}
				onChange={(e) => setQuantity(e.target.value)}
			/>
			<button onClick={() => setQuantity(quantity - 1)}>-</button>
		</>,
	]
	useEffect(() => {
		setLineItems([...lineitem])
	}, [])
	const handleSubmit = (e) => {
		e.preventDefault()
		const billdispatchobject = {
			date: date2,
			customer: selectedCustomer,
			lineItems: selectedProduct,
		}
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<Select
					options={customerOptions}
					onChange={(opt) => setSelectedCustomer(opt.value._id)}
					isSearchable
				/>
				{lineItems.map((ele, i) => {
					return ele
				})}
				<button
					onClick={() => {
						setLineItems([...lineItems, ...lineitem])
					}}>
					Add line item
				</button>
				<Button type='submit' value='Submit'></Button>
				{/* <input type='submit'>submit</input> */}
			</form>
		</>
	)
}
