
import { BillsList } from './BillsList'
import { CreateBills } from './CreateBills'
import LoggedInNavBar from '../Navigation/NavLoggedin'
import '../../css/bill.css'
import { Button, Drawer } from '@material-ui/core'
import { useState } from 'react'
import { useStyles } from '../../css/materialuistyles'
export const Bill = (props) => {
	const [toggle, setToggle] = useState(false)
	const classes = useStyles()
	return (
		<>
			<div className='billparentdiv'>
				<LoggedInNavBar />
				<div className='box-1'>
					<div className='btn btn-one'>
						<span>Bill Resource List</span>
					</div>
				</div>
				<div className='billdiv '>
					<Button
						classes={{
							root: classes.button,
						}}
						fullWidth
						onClick={() => setToggle(!toggle)}>
						Create New Bill
					</Button>
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
		</>
	)
}
