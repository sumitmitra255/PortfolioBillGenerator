import { BillsList } from './BillsList'
import { CreateBills } from './CreateBills'
import '../../css/bill.css'
import { Drawer, Fab, Menu, MenuItem, Tooltip } from '@material-ui/core'
import { useState } from 'react'
import {  fabStyles } from '../../css/materialuistyles'
import { useDispatch, useSelector } from 'react-redux'
import { billsListActionGenerator } from '../../Actions/billsActions'
import AddIcon from '@material-ui/icons/Add'
export const Bill = (props) => {
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
			<div className='billparentdiv'>
				<div className='box-1'>
					<div className='btn btn-one'>
						<span>Bill Resource List</span>
					</div>
				</div>
				<div className='billdiv '>
					<div className='billlist'>
						<BillsList />
					</div>
				</div>
				<Drawer anchor='right' open={toggle} onClose={() => setToggle(!toggle)}>
					<div className='billcreate'>
						<CreateBills toggle={false} />
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
				<MenuItem onClick={() => setToggle(!toggle)}>Create Bill</MenuItem>
				<MenuItem onClick={() => dispatch(billsListActionGenerator(token))}>
					Refresh List
				</MenuItem>
			</Menu>
		</>
	)
}
