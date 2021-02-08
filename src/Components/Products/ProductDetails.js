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
						<div className='box-1'>
							<div className='btn btn-one'>
								<span>Product Information</span>
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
											Product Name
										</TableCell>
										<TableCell key={Date.now() + Math.random()}>
											{productDetails.name}{' '}
										</TableCell>
									</TableRow>
									<TableRow hover={true} key={Date.now() + Math.random()}>
										<TableCell key={Date.now() + Math.random()}>
											Product Price
										</TableCell>
										<TableCell key={Date.now() + Math.random()}>
											{productDetails.price}
										</TableCell>
									</TableRow>
									<TableRow hover={true} key={Date.now() + Math.random()}>
										<TableCell key={Date.now() + Math.random()}>
											Product ID
										</TableCell>
										<TableCell key={Date.now() + Math.random()}>
											{productDetails._id}{' '}
										</TableCell>
									</TableRow>
									<TableRow hover={true} key={Date.now() + Math.random()}>
										<TableCell key={Date.now() + Math.random()}>
											Product Createdby
										</TableCell>
										<TableCell key={Date.now() + Math.random()}>
											{productDetails.user}
										</TableCell>
									</TableRow>
									<TableRow hover={true} key={Date.now() + Math.random()}>
										<TableCell key={Date.now() + Math.random()}>
											Product Created on
										</TableCell>
										<TableCell key={Date.now() + Math.random()}>
											{productDetails.createdAt}
										</TableCell>
									</TableRow>
									<TableRow hover={true} key={Date.now() + Math.random()}>
										<TableCell key={Date.now() + Math.random()}>
											Product Last Update on{' '}
										</TableCell>
										<TableCell key={Date.now() + Math.random()}>
											{productDetails.updatedAt}
										</TableCell>
									</TableRow>
									<TableRow hover={true} key={Date.now() + Math.random()}>
										<TableCell key={Date.now() + Math.random()}>
											Product Price{' '}
										</TableCell>
										<TableCell key={Date.now() + Math.random()}>
											Rs . {productDetails.price}
										</TableCell>
									</TableRow>
									<TableRow key={Date.now() + Math.random()}>
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
				</>
			) : (
				<h5>Loading Details....</h5>
			)}
		</>
	)
}
