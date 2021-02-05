import { useSelector, useDispatch } from 'react-redux'
import { CustomerList } from './CustomerList'
import { CreateCustomer } from './CreateCustomer'
import LoggedInNavBar from '../Navigation/NavLoggedin'
import '../../css/customer.css'
import { useState } from 'react'
import { Button, Drawer, Fab } from '@material-ui/core'
import { useStyles } from '../../css/materialuistyles'
export const Customer = (props) => {
	const dispatch = useDispatch()
	const classes = useStyles()
	const [toggle, setToggle] = useState(false)
	const token = useSelector((state) => state.logintoken.token)

	return (
		<>
			<div className='customerparentdiv'>
				<div className='customernavdiv'>
					<LoggedInNavBar />
				</div>
				<div class='box-1'>
					<div class='btn btn-one'>
						<span>Customer Resource List</span>
					</div>
				</div>
				<div className='customerdiv'>
					<Button
						fullWidth
						classes={{
							root: classes.button,
						}}
						onClick={() => setToggle(!toggle)}>
						Create New Customer
					</Button>
					<div className='customerlist'>
						<CustomerList />
					</div>
					{/* {toggle ? (
						<div className='customercreate'>
							<CreateCustomer />
						</div>
					) : (
						''
					)} */}
				</div>
			</div>
			<Drawer anchor='right' open={toggle} onClose={() => setToggle(!toggle)}>
				<div className='customercreate'>
					<CreateCustomer />
				</div>
			</Drawer>
		</>
	)
}
