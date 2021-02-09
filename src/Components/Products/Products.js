import { ProductList } from './ProductList'
import { CreateProduct } from './CreateProduct'
import '../../css/products.css'
import {  fabStyles } from '../../css/materialuistyles'
import { useState } from 'react'
import { Drawer, Fab, Menu, MenuItem, Tooltip } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { productListActionGenerator } from '../../Actions/productActions'
import AddIcon from '@material-ui/icons/Add'
export const Product = (props) => {
	const [toggle, setToggle] = useState(false)
	const dispatch = useDispatch()
	const fabclasses = fabStyles()
	const [anchorEl, setAnchorEl] = useState(null)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	const token = useSelector((state) => state.logintoken.token)
	return (
		<>
			<>
				<div className='productparentdiv'>
					<div className='box-1'>
						<div className='btn btn-one'>
							<span>Product Resource </span>
						</div>
					</div>
					<div className='productdiv '>
						<div className='productlist'>
							<ProductList />
						</div>
					</div>
					<Drawer
						anchor='right'
						open={toggle}
						onClose={() => setToggle(!toggle)}>
						<div className='productcreate'>
							<CreateProduct toggle={false} />
						</div>
					</Drawer>
				</div>
				<Tooltip title='Add' aria-label='add'>
					<Fab
						color='secondary'
						onClick={handleClick}
						className={fabclasses.absolute}>
						<AddIcon />
					</Fab>
				</Tooltip>
				<Menu
					id='simple-menu'
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}>
					<MenuItem onClick={() => setToggle(!toggle)}>Create Product</MenuItem>
					<MenuItem onClick={() => dispatch(productListActionGenerator(token))}>
						Refresh List
					</MenuItem>
				</Menu>
			</>
		</>
	)
}
