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
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import '../../css/userinfodetails.css'
import LoggedInNavBar from '../Navigation/NavLoggedin'
import { useStyles } from '../../css/materialuistyles'
import { MyDocument } from './Pdfocument.js'
import { PDFDownloadLink } from '@react-pdf/renderer'

export const BillsDetails = (props) => {
	const billsDetails = useSelector((state) => state.billsdetails)
	let history = useHistory()
	const classes = useStyles()

	return (
		<>
			{billsDetails ? (
				<div className='userdisplayparent'>
					<LoggedInNavBar />
					<div height='50px'>
						<div className='box-1'>
							<div className='btn btn-one'>
								<span>INVOICE No : {billsDetails._id} </span>
							</div>
						</div>
					</div>
					<div className='userdisplayparent2'>
						<div>
							<div height='50px'>
								<div className='box-1'>
									<div className='btn btn-one'>
										<span>Bill Details</span>
									</div>
								</div>
							</div>
							<TableContainer component={Paper}>
								<Table aria-label='simple table'>
									<TableHead key={Date.now() + Math.random()}>
										<TableRow key={Date.now() + Math.random()}></TableRow>
									</TableHead>
									<TableBody>
										<TableRow hover={true} key={Date.now() + Math.random()}>
											<TableCell key={Date.now() + Math.random()}>Bill Total</TableCell>
											<TableCell key={Date.now() + Math.random()}>Rs.{billsDetails.total}</TableCell>
										</TableRow>
										<TableRow hover={true} key={Date.now() + Math.random()}>
											<TableCell key={Date.now() + Math.random()}>Bill Customer Id</TableCell>
											<TableCell key={Date.now() + Math.random()}>{billsDetails.customer}</TableCell>
										</TableRow>
										<TableRow hover={true} key={Date.now() + Math.random()}>
											<TableCell key={Date.now() + Math.random()}>Bill Createdby UserID</TableCell>
											<TableCell key={Date.now() + Math.random()}>{billsDetails.user} </TableCell>
										</TableRow>
										<TableRow hover={true} key={Date.now() + Math.random()}>
											<TableCell key={Date.now() + Math.random()}>Bill ID</TableCell>
											<TableCell key={Date.now() + Math.random()}>{billsDetails._id}</TableCell>
										</TableRow>
										<TableRow hover={true} key={Date.now() + Math.random()}>
											<TableCell key={Date.now() + Math.random()}>Bill Date</TableCell>
											<TableCell key={Date.now() + Math.random()}>{billsDetails.date}</TableCell>
										</TableRow>
										<TableRow hover={true} key={Date.now() + Math.random()}>
											<TableCell key={Date.now() + Math.random()}>Bill Updated On</TableCell>
											<TableCell key={Date.now() + Math.random()}>{billsDetails.updatedAt}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell key={Date.now() + Math.random()}>
												<Button
													classes={{
														root: classes.button,
													}}
													onClick={history.goBack}>
													Go Back
												</Button>
											</TableCell>
											<TableCell key={Date.now() + Math.random()}>
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
								</Table>
							</TableContainer>
						</div>
						<div className='billitemdetails'>
							<div height='50px'>
								<div className='box-1'>
									<div className='btn btn-one'>
										<span>Bill Item List</span>
									</div>
								</div>
							</div>
							<TableContainer>
								<Table aria-label='simple table'>
									<TableHead key={Date.now() + Math.random()}>
										<TableRow hover={true} key={Date.now() + Math.random()}>
											<TableCell key={Date.now() + Math.random()}>Quantity</TableCell>
											<TableCell key={Date.now() + Math.random()}>Price Per Unit</TableCell>
											<TableCell key={Date.now() + Math.random()}>Product</TableCell>
											<TableCell key={Date.now() + Math.random()}>Subtotal</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{billsDetails.lineItems.map((ele) => {
											return (
												<TableRow hover={true} key={Date.now() + Math.random()}>
													<TableCell key={Date.now() + Math.random()}>{ele.quantity}</TableCell>
													<TableCell key={Date.now() + Math.random()}>{ele.price}</TableCell>
													<TableCell key={Date.now() + Math.random()}>{ele.product}</TableCell>
													<TableCell key={Date.now() + Math.random()}> Rs . {ele.subTotal}</TableCell>
												</TableRow>
											)
										})}
									</TableBody>
								</Table>
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
