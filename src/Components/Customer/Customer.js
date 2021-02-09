import { CustomerList } from './CustomerList'
import { CreateCustomer } from './CreateCustomer'
import '../../css/customer.css'
import { useState } from 'react'
import { Drawer, Fab, Menu, MenuItem, Tooltip } from '@material-ui/core'
import { fabStyles } from '../../css/materialuistyles'
import { customerListActionGenerator } from '../../Actions/customerActions'
import { useDispatch, useSelector } from 'react-redux'
import AddIcon from '@material-ui/icons/Add'

export const Customer = (props) => {
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
			<div className='customerparentdiv'>
				<div className='box-1'>
					<div className='btn btn-one'>
						<span>Customer List</span>
					</div>
				</div>
				<div className='customerdiv'>
					<div className='buttonbar'></div>
					<div className='customerlist'>
						<CustomerList />
					</div>
				</div>
			</div>
			<Drawer anchor='right' open={toggle} onClose={() => setToggle(!toggle)}>
				<div className='customercreate'>
					<CreateCustomer toggle={false} />
				</div>
			</Drawer>
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
				<MenuItem onClick={() => setToggle(!toggle)}>Create Customer</MenuItem>
				<MenuItem onClick={() => dispatch(customerListActionGenerator(token))}>
					Refresh List{' '}
				</MenuItem>
			</Menu>
		</>
	)
}
