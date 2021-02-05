import { useSelector, useDispatch } from 'react-redux'
import {
	productListActionGenerator,
	userproductDetailsActionGenerator,
} from '../../Actions/productActions'
import { useEffect } from 'react'
import { userProductDetailsActionGenerator } from '../../Actions/productActions'
import { useHistory } from 'react-router-dom'
import { DisplayProduct } from './DisplayProduct'
import {
	Paper,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@material-ui/core'
import { Selectsearch } from '../../selectsearch/Selectsearch'
import { useState } from 'react'
import '../../css/products.css'
export const ProductList = (props) => {
	const dispatch = useDispatch()
	const history = useHistory()
	const [selectedproduct, setSelectedproduct] = useState()
	const token = useSelector((state) => state.logintoken.token)
	const productList = useSelector((state) => state.productlist)
	const options = productList.map((ele) => {
		return { value: ele, label: `Name:${ele.name}` }
	})
	const displayproduct = () => {
		dispatch(userproductDetailsActionGenerator(selectedproduct, token, history))
	}
	return (
		<>
			<div className='fixedElement'>
				<Selectsearch
					options={options}
					setter={setSelectedproduct}
					dispatcher={displayproduct}
				/>
			</div>
			<TableContainer component={Paper}>
				<TableContainer aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Product Name</TableCell>
							<TableCell>Price Per Unit</TableCell>
							<TableCell>Edit</TableCell>
							<TableCell>Delete</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{productList.map((ele) => {
							return (
								<>
									<TableRow hover='true'>
										<DisplayProduct ProductEle={ele} />
									</TableRow>
								</>
							)
						})}
					</TableBody>
				</TableContainer>
			</TableContainer>
		</>
	)
}
