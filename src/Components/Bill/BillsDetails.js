import {
	Button,
	Paper,
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
import { MyDocument } from './Pdfocument.js'
import { PDFDownloadLink } from '@react-pdf/renderer'


export const BillsDetails = (props) => {
	const dispatch = useDispatch()
	const billsDetails = useSelector((state) => state.billsdetails)
	const token = useSelector((state) => state.logintoken.token)
	let history = useHistory()
	const classes = useStyles()

	return (
		<>
			{billsDetails ? (
				<div className='userdisplayparent'>
					<LoggedInNavBar />
					<div height='50px'>
						<div class='box-1'>
							<div class='btn btn-one'>
								<span>INVOICE No : {billsDetails._id} </span>
							</div>
						</div>
					</div>
					<div className='userdisplayparent2'>
						<div>
							<div height='50px'>
								<div class='box-1'>
									<div class='btn btn-one'>
										<span>Bill Details</span>
									</div>
								</div>
							</div>
							<TableContainer component={Paper}>
								<TableCell aria-label='simple table'>
									<TableHead>
										<TableRow></TableRow>
									</TableHead>
									<TableBody>
										<TableRow hover='true'>
											<TableCell>Bill Total</TableCell>
											<TableCell>Rs.{billsDetails.total}</TableCell>
										</TableRow>
										<TableRow hover='true'>
											<TableCell>Bill Customer Id</TableCell>
											<TableCell>{billsDetails.customer}</TableCell>
										</TableRow>
										<TableRow hover='true'>
											<TableCell>Bill Createdby UserID</TableCell>
											<TableCell>{billsDetails.user} </TableCell>
										</TableRow>
										<TableRow hover='true'>
											<TableCell>Bill ID</TableCell>
											<TableCell>{billsDetails._id}</TableCell>
										</TableRow>
										<TableRow hover='true'>
											<TableCell>Bill Date</TableCell>
											<TableCell>{billsDetails.date}</TableCell>
										</TableRow>
										<TableRow hover='true'>
											<TableCell>Bill Updated On</TableCell>
											<TableCell>{billsDetails.updatedAt}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												<Button
													classes={{
														root: classes.button,
													}}
													onClick={history.goBack}>
													Go Back
												</Button>
											</TableCell>
											<TableCell>
												<PDFDownloadLink
													document={<MyDocument data={billsDetails} />}
													fileName={`Bill_detailsno_${billsDetails._id}.pdf`}
													className='Download'>
													{({ blob, url, loading, error }) =>
														loading ? 'Loading document...' : 'Download now!'
													}
												</PDFDownloadLink>
											</TableCell>
										</TableRow>
									</TableBody>
								</TableCell>
							</TableContainer>
						</div>
						<div className='billitemdetails'>
							<div height='50px'>
								<div class='box-1'>
									<div class='btn btn-one'>
										<span>Bill Item List</span>
									</div>
								</div>
							</div>
							<TableContainer>
								<TableCell aria-label='simple table'>
									<TableHead>
										<TableRow hover='true'>
											<TableCell>Quantity</TableCell>
											<TableCell>Price Per Unit</TableCell>
											<TableCell>Product</TableCell>
											<TableCell>Subtotal</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{billsDetails.lineItems.map((ele) => {
											return (
												<TableRow hover='true'>
													<TableCell>{ele.quantity}</TableCell>
													<TableCell>{ele.price}</TableCell>
													<TableCell>{ele.product}</TableCell>
													<TableCell> Rs . {ele.subTotal}</TableCell>
												</TableRow>
											)
										})}
									</TableBody>
								</TableCell>
							</TableContainer>
						</div>
					</div>
					<div></div>
				</div>
			) : (
				<h5>Loading Details....</h5>
			)}
		</>
	)
}
