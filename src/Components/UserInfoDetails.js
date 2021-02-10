import { useSelector, useDispatch } from 'react-redux'
import { userInfoActionGenerator } from '../Actions/actions'
import { useEffect } from 'react'
import '../css/userinfodetails.css'
import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Box } from '@material-ui/core'
export const UserInfoDetails = (props) => {
	const dispatch = useDispatch()
	const token = useSelector((state) => state.logintoken.token)
	const userDetails = useSelector((state) => state.userinfo)
	useEffect(() => {
		dispatch(userInfoActionGenerator(token))
	}, [])
	return (
		<Box>
			{userDetails ? (
				<>
					<Box>
						<div className='box-1'>
							<div className='btn btn-one'>
								<span>User Information</span>
							</div>
						</div>
					</Box>
					<TableContainer component={Paper}>
						<Table>
							<TableHead>
								<TableRow></TableRow>
							</TableHead>
							<TableBody>
								<TableRow hover={true}>
									<TableCell>Address </TableCell>
									<TableCell>{userDetails.address}</TableCell>
								</TableRow>
								<TableRow hover={true}>
									<TableCell>BusinessName</TableCell>
									<TableCell>{userDetails.businessName}</TableCell>
								</TableRow>
								<TableRow hover={true}>
									<TableCell>CreatedAt</TableCell>
									<TableCell>{userDetails.createdAt}</TableCell>
								</TableRow>
								<TableRow hover={true}>
									<TableCell>Email</TableCell>
									<TableCell>{userDetails.email}</TableCell>
								</TableRow>
								<TableRow hover={true}>
									<TableCell>UpdatedAt</TableCell>
									<TableCell>{userDetails.updatedAt}</TableCell>
								</TableRow>
								<TableRow hover={true}>
									<TableCell>Username</TableCell>
									<TableCell>{userDetails.username}</TableCell>
								</TableRow>
								<TableRow hover={true}>
									<TableCell>ID</TableCell>
									<TableCell>{userDetails.username}</TableCell>
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
