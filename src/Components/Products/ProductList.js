import { useSelector, useDispatch } from 'react-redux'
import { userproductDetailsActionGenerator } from '../../Actions/productActions'
import { useHistory } from 'react-router-dom'
import { DisplayProduct } from './DisplayProduct'
import {
	Paper,
	Table,
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
	const productList = useSelector((state) => state.productlist)
	const { toggle } = props
	const dispatch = useDispatch()
	const history = useHistory()
	const [selectedproduct, setSelectedproduct] = useState()
	const token = useSelector((state) => state.logintoken.token)
	const options = productList.map((ele) => {
		return { value: ele, label: `Name:${ele.name}` }
	})
	const displayproduct = () => {
		dispatch(userproductDetailsActionGenerator(selectedproduct, token, history))
	}
	return (
		<>
			<div className='fixedElement'>
				{toggle ? (
					''
				) : (
					<Selectsearch
						options={options}
						setter={setSelectedproduct}
						dispatcher={displayproduct}
					/>
				)}
			</div>
			<TableContainer component={Paper}>
				<Table aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Product Name</TableCell>
							<TableCell>Price Per Unit</TableCell>
							<TableCell>Edit</TableCell>
							<TableCell>Delete</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{toggle
							? productList
									.slice(-5)
									.reverse()
									.map((ele, i) => {
										return (
											<TableRow hover={true} key={i}>
												<DisplayProduct ProductEle={ele} />
											</TableRow>
										)
									})
							: productList.map((ele, i) => {
									return (
										<TableRow hover={true} key={i}>
											<DisplayProduct ProductEle={ele} />
										</TableRow>
									)
							  })}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}
