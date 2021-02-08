import { ProductList } from './ProductList'
import { CreateProduct } from './CreateProduct'
import LoggedInNavBar from '../Navigation/NavLoggedin'
import '../../css/products.css'
import { useStyles } from '../../css/materialuistyles'
import { useState } from 'react'
import { Button, Drawer } from '@material-ui/core'
export const Product = (props) => {
	const [toggle, setToggle] = useState(false)
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
			</>
		</>
	)
}
