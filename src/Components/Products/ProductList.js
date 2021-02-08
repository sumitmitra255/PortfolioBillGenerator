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
	const { toggle } = props
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
					<TableHead key={Date.now() + Math.random()}>
						<TableRow key={Date.now() + Math.random()}>
							<TableCell key={Date.now() + Math.random()}>
								Product Name
							</TableCell>
							<TableCell key={Date.now() + Math.random()}>
								Price Per Unit
							</TableCell>
							<TableCell key={Date.now() + Math.random()}>Edit</TableCell>
							<TableCell key={Date.now() + Math.random()}>Delete</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{toggle
							? productList
									.slice(-5)
									.reverse()
									.map((ele, i) => {
										return (
											<>
												<TableRow hover={true} key={Date.now() + Math.random()}>
													<DisplayProduct ProductEle={ele} />
												</TableRow>
											</>
										)
									})
							: productList.reverse().map((ele) => {
									return (
										<>
											<TableRow hover={true} key={Date.now() + Math.random()}>
												<DisplayProduct ProductEle={ele} />
											</TableRow>
										</>
									)
							  })}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}
