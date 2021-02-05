import {
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import '../../css/userinfodetails.css'
import LoggedInNavBar from '../Navigation/NavLoggedin'
import { useStyles } from '../../css/materialuistyles'
export const CustomerDetails = (props) => {
	const dispatch = useDispatch()
	let history = useHistory()
	const classes = useStyles()
	const customerDetails = useSelector((state) => state.customerDetails)
	const token = useSelector((state) => state.logintoken.token)
	return (
		<>
			{customerDetails ? (
				<div className='userdisplayparent'>
					<LoggedInNavBar />
					<div class='box-1'>
						<div class='btn btn-one'>
							<span>Customer Information</span>
						</div>
					</div>
					<TableContainer component={Paper}>
						<Table aria-label='simple table'>
							<TableHead>
								<TableRow></TableRow>
							</TableHead>
							<TableBody>
								<TableRow hover='true'>
									<TableCell>Customer Name</TableCell>
									<TableCell> {customerDetails.name}</TableCell>
								</TableRow>
								<TableRow hover='true'>
									<TableCell>CreatedAt </TableCell>
									<TableCell>{customerDetails.createdAt}</TableCell>
								</TableRow>
								<TableRow hover='true'>
									<TableCell>Email</TableCell>
									<TableCell> {customerDetails.email}</TableCell>
								</TableRow>
								<TableRow hover='true'>
									<TableCell>UpdatedAt</TableCell>
									<TableCell>{customerDetails.updatedAt}</TableCell>
								</TableRow>
								<TableRow hover='true'>
									<TableCell>CreatedBy</TableCell>
									<TableCell>{customerDetails.user}</TableCell>
								</TableRow>
								<TableRow hover='true'>
									<TableCell>Customer ID </TableCell>
									<TableCell>{customerDetails._id}</TableCell>
								</TableRow>
								<TableRow hover='true'>
									<TableCell>
										<Button
											classes={{
												root: classes.button,
											}}
											onClick={history.goBack}>
											Go Back
										</Button>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>

					<br />
				</div>
			) : (
				<h5>Loading Details....</h5>
			)}
		</>
	)
}
