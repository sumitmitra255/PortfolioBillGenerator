import { useSelector, useDispatch } from 'react-redux'
import { userInfoActionGenerator } from '../Actions/actions'
import { useEffect } from 'react'
import '../css/userinfodetails.css'
import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell  from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import LoggedInNavBar from './Navigation/NavLoggedin'
import { useStyles } from '../css/materialuistyles'
import { Box } from '@material-ui/core'
export const UserInfoDetails = (props) => {
	const dispatch = useDispatch()
	const classes = useStyles()
	const token = useSelector((state) => state.logintoken.token)
	useEffect(() => {
		dispatch(userInfoActionGenerator(token))
	}, [])
	const userDetails = useSelector((state) => state.userinfo)
	return (
		<Box>
			{userDetails ? (
				<>
					<LoggedInNavBar />
					<Box>
						<div className='box-1'>
							<div className='btn btn-one'>
								<span>User Information</span>
							</div>
						</div>
					</Box>
					<TableContainer component={Paper}>
						<Table>
							<TableHead key={Date.now() + Math.random()}>
								<TableRow key={Date.now() + Math.random()}></TableRow>
							</TableHead>
							<TableBody>
								<TableRow hover={true} key={Date.now() + Math.random()}>
									<TableCell key={Date.now() + Math.random()}>
										Address{' '}
									</TableCell>
									<TableCell key={Date.now() + Math.random()}>
										{userDetails.address}
									</TableCell>
								</TableRow>
								<TableRow hover={true} key={Date.now() + Math.random()}>
									<TableCell key={Date.now() + Math.random()}>
										BusinessName
									</TableCell>
									<TableCell key={Date.now() + Math.random()}>
										{userDetails.businessName}
									</TableCell>
								</TableRow>
								<TableRow hover={true} key={Date.now() + Math.random()}>
									<TableCell key={Date.now() + Math.random()}>
										CreatedAt
									</TableCell>
									<TableCell key={Date.now() + Math.random()}>
										{userDetails.createdAt}
									</TableCell>
								</TableRow>
								<TableRow hover={true} key={Date.now() + Math.random()}>
									<TableCell key={Date.now() + Math.random()}>Email</TableCell>
									<TableCell key={Date.now() + Math.random()}>
										{userDetails.email}
									</TableCell>
								</TableRow>
								<TableRow hover={true} key={Date.now() + Math.random()}>
									<TableCell key={Date.now() + Math.random()}>
										UpdatedAt
									</TableCell>
									<TableCell key={Date.now() + Math.random()}>
										{userDetails.updatedAt}
									</TableCell>
								</TableRow>
								<TableRow hover={true} key={Date.now() + Math.random()}>
									<TableCell key={Date.now() + Math.random()}>
										Username
									</TableCell>
									<TableCell key={Date.now() + Math.random()}>
										{userDetails.username}
									</TableCell>
								</TableRow>
								<TableRow hover={true} key={Date.now() + Math.random()}>
									<TableCell key={Date.now() + Math.random()}>ID</TableCell>
									<TableCell key={Date.now() + Math.random()}>
										{userDetails.username}
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</>
			) : (
				<h5>Loading Details....</h5>
			)}
		</Box>
	)
}
