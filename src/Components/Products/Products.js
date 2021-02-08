import { useSelector, useDispatch } from 'react-redux'
import { ProductList } from './ProductList'
import { CreateProduct } from './CreateProduct'
import LoggedInNavBar from '../Navigation/NavLoggedin'
import '../../css/products.css'
import { useStyles } from '../../css/materialuistyles'
import { useState } from 'react'
import { Button, Drawer } from '@material-ui/core'
export const Product = (props) => {
	const dispatch = useDispatch()
	const [toggle, setToggle] = useState(false)
	const token = useSelector((state) => state.logintoken.token)
	const classes = useStyles()

	return (
		<>
			<>
				<div className='productparentdiv'>
					<LoggedInNavBar />
					<div className='box-1'>
						<div className='btn btn-one'>
							<span>Product Resource </span>
						</div>
					</div>
					<div className='productdiv '>
						<Button
							classes={{
								root: classes.button,
							}}
							fullWidth
							onClick={() => setToggle(!toggle)}>
							Create Product
						</Button>
						<div className='productlist'>
							<ProductList />
						</div>
						{/* {toggle ? (
							<div className='create'>
								<CreateProduct />
							</div>
						) : (
							''
						)} */}
					</div>
					<Drawer
						anchor='right'
						open={toggle}
						onClose={() => setToggle(!toggle)}>
						<div className='productcreate'>
							<CreateProduct />
						</div>
					</Drawer>
				</div>
			</>
		</>
	)
}
