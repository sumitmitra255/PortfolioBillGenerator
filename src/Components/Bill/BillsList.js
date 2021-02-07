import { useSelector, useDispatch } from 'react-redux'
import { billsListActionGenerator } from '../../Actions/billsActions'
import { useEffect } from 'react'
import { userbillsDetailsActionGenerator } from '../../Actions/billsActions'
import { useHistory } from 'react-router-dom'
import { Displaybills } from './Displaybills'
import {
	Paper,
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
	const dispatch = useDispatch()
	const history = useHistory()
	const { toggle } = props
	const [selectedBill, setSelectedBill] = useState()
	const token = useSelector((state) => state.logintoken.token)
	const billsList = useSelector((state) => state.billlist)
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
				<TableContainer aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Bill Name</TableCell>
							<TableCell>Created At</TableCell>
							<TableCell>Delete</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{/* {billsList.map((ele) => {
							return (
								<TableRow hover='true'>
									<Displaybills billsEle={ele} />
								</TableRow>
							)
						})} */}
						{toggle
							? billsList
									.slice(-5)
									.reverse()
									.map((ele) => {
										return (
											<>
												<TableRow hover='true'>
													<Displaybills billsEle={ele} />
												</TableRow>
											</>
										)
									})
							: billsList.reverse().map((ele) => {
									return (
										<>
											<TableRow hover='true'>
												<Displaybills billsEle={ele} />
											</TableRow>
										</>
									)
							  })}
					</TableBody>
				</TableContainer>
			</TableContainer>
		</>
	)
}
