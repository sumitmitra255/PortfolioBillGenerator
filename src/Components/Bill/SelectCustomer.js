import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import { useState } from 'react'
import { selectedCustomerActionGenerator } from '../../Actions/billsActions'
import { Button } from '@material-ui/core'
import { useStyles } from '../../css/materialuistyles'
import '../../css/bill.css'
import swal from 'sweetalert'
export const SelectCustomer = (props) => {
	const dispatch = useDispatch()
	const classes = useStyles()
	const date = new Date()
	const date2 = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
	const customerList = useSelector((state) => state.customerlist)
	const [selectedCustomer, setSelectedCustomer] = useState()
	const customerOptions = customerList.map((ele) => {
		return { value: ele, label: `${ele.name}(${ele.email})` }
	})
	const handlecustomersave = (e) => {
		e.preventDefault()
		if (selectedCustomer) {
			const customerdispatchobject = {
				customer: selectedCustomer,
				date: date2,
			}
			dispatch(selectedCustomerActionGenerator(customerdispatchobject))
		} else {
			swal('Please choose customer First', '', 'error')
		}
	}
	return (
		<>
			<form onSubmit={handlecustomersave}>
				<div className='general'>
					Only One Customer can be selected, however You Can ReSelect customer
					multiple times!
				</div>
				<Select
					options={customerOptions}
					onChange={(opt) => setSelectedCustomer(opt.value)}
					isSearchable
				/>
				<Button
					classes={{
						root: classes.button,
					}}
					fullWidth
					type='submit'>
					Add Customer
				</Button>
			</form>
		</>
	)
}
