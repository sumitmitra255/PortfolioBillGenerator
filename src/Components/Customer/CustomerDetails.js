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
					<div className='box-1'>
						<div className='btn btn-one'>
							<span>Customer Information</span>
						</div>
					</div>
					<TableContainer component={Paper}>
						<Table aria-label='simple table'>
							<TableHead key={Date.now() + Math.random()}>
								<TableRow key={Date.now() + Math.random()}></TableRow>
							</TableHead>
							<TableBody>
								<TableRow hover={true} key={Date.now() + Math.random()}>
									<TableCell key={Date.now() + Math.random()}>
										Customer Name
									</TableCell>
									<TableCell key={Date.now() + Math.random()}>
										{' '}
										{customerDetails.name}
									</TableCell>
								</TableRow>
								<TableRow hover={true} key={Date.now() + Math.random()}>
									<TableCell key={Date.now() + Math.random()}>
										CreatedAt{' '}
									</TableCell>
									<TableCell key={Date.now() + Math.random()}>
										{customerDetails.createdAt}
									</TableCell>
								</TableRow>
								<TableRow hover={true} key={Date.now() + Math.random()}>
									<TableCell key={Date.now() + Math.random()}>Email</TableCell>
									<TableCell key={Date.now() + Math.random()}>
										{' '}
										{customerDetails.email}
									</TableCell>
								</TableRow>
								<TableRow hover={true} key={Date.now() + Math.random()}>
									<TableCell key={Date.now() + Math.random()}>
										UpdatedAt
									</TableCell>
									<TableCell key={Date.now() + Math.random()}>
										{customerDetails.updatedAt}
									</TableCell>
								</TableRow>
								<TableRow hover={true} key={Date.now() + Math.random()}>
									<TableCell key={Date.now() + Math.random()}>
										CreatedBy
									</TableCell>
									<TableCell key={Date.now() + Math.random()}>
										{customerDetails.user}
									</TableCell>
								</TableRow>
								<TableRow hover={true} key={Date.now() + Math.random()}>
									<TableCell key={Date.now() + Math.random()}>
										Customer ID{' '}
									</TableCell>
									<TableCell key={Date.now() + Math.random()}>
										{customerDetails._id}
									</TableCell>
								</TableRow>
								<TableRow hover={true} key={Date.now() + Math.random()}>
									<TableCell key={Date.now() + Math.random()}>
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
