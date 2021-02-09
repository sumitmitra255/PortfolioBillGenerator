import { useSelector, useDispatch } from 'react-redux'
import { userbillsDetailsActionGenerator } from '../../Actions/billsActions'
import { useHistory } from 'react-router-dom'
import { Displaybills } from './Displaybills'
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@material-ui/core'
import { useState } from 'react'
import { Selectsearch } from '../../selectsearch/Selectsearch'
import '../../css/bill.css'
export const BillsList = (props) => {
	const billsList = useSelector((state) => state.billlist)
	const dispatch = useDispatch()
	const history = useHistory()
	const { toggle } = props
	const [selectedBill, setSelectedBill] = useState()
	const token = useSelector((state) => state.logintoken.token)
	const options = billsList.map((ele) => {
		return {
			value: ele,
			label: `ID:${ele._id}-CreateAt : ${ele.createdAt}) CID: ${ele.customer}`,
		}
	})
	const displaybilldetail = () => {
		dispatch(userbillsDetailsActionGenerator(selectedBill, token, history))
	}
	return (
		<>
			{toggle ? (
				''
			) : (
				<Selectsearch
					options={options}
					setter={setSelectedBill}
					dispatcher={displaybilldetail}
				/>
			)}
			<TableContainer component={Paper}>
				<Table aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Bill Name</TableCell>
							<TableCell>Created At</TableCell>
							<TableCell>Delete</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{toggle
							? billsList
									.slice(-5)
									.reverse()
									.map((ele, i) => {
										return (
											<TableRow hover={true} key={i}>
												<Displaybills billsEle={ele} />
											</TableRow>
										)
									})
							: billsList.map((ele, i) => {
									return (
										<TableRow hover={true} key={i}>
											<Displaybills billsEle={ele} />
										</TableRow>
									)
							  })}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}
