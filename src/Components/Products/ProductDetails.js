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
import LoggedInNavBar from '../Navigation/NavLoggedin'
import '../../css/userinfodetails.css'
import { useHistory } from 'react-router-dom'
import { useStyles } from '../../css/materialuistyles'
export const ProductDetails = (props) => {
	const dispatch = useDispatch()
	const productDetails = useSelector((state) => state.productdetails)
	const token = useSelector((state) => state.logintoken.token)
	let history = useHistory()
	const classes = useStyles()
	return (
		<>
			{productDetails ? (
				<>
					<div className='userdisplayparent'>
						<LoggedInNavBar />
						<div class='box-1'>
							<div class='btn btn-one'>
								<span>Product Information</span>
							</div>
						</div>
						<TableContainer component={Paper}>
							<TableCell aria-label='simple table'>
								<TableHead>
									<TableRow></TableRow>
								</TableHead>
								<TableBody>
									<TableRow hover='true'>
										<TableCell>Product Name</TableCell>
										<TableCell>{productDetails.name} </TableCell>
									</TableRow>
									<TableRow hover='true'>
										<TableCell>Product Price</TableCell>
										<TableCell>{productDetails.price}</TableCell>
									</TableRow>
									<TableRow hover='true'>
										<TableCell>Product ID</TableCell>
										<TableCell>{productDetails._id} </TableCell>
									</TableRow>
									<TableRow hover='true'>
										<TableCell>Product Createdby</TableCell>
										<TableCell>{productDetails.user}</TableCell>
									</TableRow>
									<TableRow hover='true'>
										<TableCell>Product Created on</TableCell>
										<TableCell>{productDetails.createdAt}</TableCell>
									</TableRow>
									<TableRow hover='true'>
										<TableCell>Product Last Update on </TableCell>
										<TableCell>{productDetails.updatedAt}</TableCell>
									</TableRow>
									<TableRow hover='true'>
										<TableCell>Product Price </TableCell>
										<TableCell>Rs . {productDetails.price}</TableCell>
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
									</TableRow>
								</TableBody>
							</TableCell>
						</TableContainer>
						<br />
					</div>
				</>
			) : (
				<h5>Loading Details....</h5>
			)}
		</>
	)
}
