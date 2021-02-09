import { useSelector, useDispatch } from 'react-redux'
import { createProductActionGenerator } from '../../Actions/productActions'
import { ProductForm } from './ProductForm'
import '../../css/products.css'
import NavLoggedin from '../Navigation/NavLoggedin'
export const CreateProduct = (props) => {
	const token = useSelector((state) => state.logintoken.token)
	const productList = useSelector((state) => state.productlist)
	const dispatch = useDispatch()
	const createDispatcher = (values) => {
		dispatch(createProductActionGenerator(productList, values, token))
	}

	return (
		<>
			<div className='box-1'>
				<div className='btn btn-one'>Create a new Product</div>
			</div>
			<ProductForm dispatcher={createDispatcher} />
		</>
	)
}
