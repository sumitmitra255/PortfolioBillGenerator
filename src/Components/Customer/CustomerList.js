import { useSelector, useDispatch } from 'react-redux'
import { userCustomerDetailsActionGenerator } from '../../Actions/customerActions'
import { useHistory } from 'react-router-dom'
import { DisplayCustomer } from './DisplayCustomer'
import {
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Table,
} from '@material-ui/core'
import '../../css/customer.css'
import { Selectsearch } from '../../selectsearch/Selectsearch'
import { useState } from 'react'

export const CustomerList = (props) => {
	const customerList = useSelector((state) => state.customerlist)
	const dispatch = useDispatch()
	const history = useHistory()
	const [selectedcust, setSelectedcust] = useState()
	const { toggle } = props
	const token = useSelector((state) => state.logintoken.token)
	const options = customerList.map((ele) => {
		return { value: ele, label: `ID:${ele.name}-Email : ${ele.email})` }
	})
	const displayCustomer = () => {
		dispatch(userCustomerDetailsActionGenerator(selectedcust, token, history))
	}
	
	return (
		<>
			{toggle ? (
				''
			) : (
				<div className='fixedElement'>
					<Selectsearch
						options={options}
						setter={setSelectedcust}
						dispatcher={displayCustomer}
					/>
				</div>
			)}
			<TableContainer component={Paper}>
				<Table aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Customer Name</TableCell>
							<TableCell>Customer ID</TableCell>
							<TableCell>Edit</TableCell>
							<TableCell>Delete</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{toggle
							? customerList
									.slice(-5)
									.reverse()
									.map((ele, i) => {
										return (
											<TableRow hover={true} key={i}>
												<DisplayCustomer customerEle={ele} />
											</TableRow>
										)
									})
							: customerList.map((ele, i) => {
									return (
										<TableRow hover={true} key={i}>
											<DisplayCustomer customerEle={ele} />
										</TableRow>
									)
							  })}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}
