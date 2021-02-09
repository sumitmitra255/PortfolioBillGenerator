import { Box, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { useStyles } from '../../css/materialuistyles'
import { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
const LoggedInNavBar = (props) => {
	const history = useHistory()
	const classes = useStyles()
	const [anchorEl, setAnchorEl] = useState(null)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}
	return (
		<Box
			classes={{
				root: classes.boxnav,
			}}>
			<Button
				classes={{
					root: classes.button,
				}}
				onClick={() => {
					history.push('/home')
				}}>
				home
			</Button>
			<Button
				classes={{
					root: classes.button,
				}}
				onClick={() => {
					history.push('/customer')
				}}>
				Customer
			</Button>
			<Button
				classes={{
					root: classes.button,
				}}
				onClick={() => {
					history.push('/product')
				}}>
				Product
			</Button>
			<Button
				classes={{
					root: classes.button,
				}}
				onClick={() => {
					history.push('/bill')
				}}>
				BillList
			</Button>
			<Button
				classes={{
					root: classes.button,
				}}
				aria-controls='simple-menu'
				aria-haspopup='true'
				onClick={handleClick}>
				<MenuIcon />
			</Button>
			<Menu
				id='simple-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}>
				<MenuItem
					onClick={() => {
						history.push('/userinfo')
					}}>
					UserInfo
				</MenuItem>

				<MenuItem
					onClick={() => {
						history.push('/dashboard')
					}}>
					DashBoard
				</MenuItem>
				<MenuItem
					onClick={() => {
						history.push('/createbill')
					}}>
					Create Bill
				</MenuItem>
				<MenuItem
					onClick={() => {
						history.push('/createcustomer')
					}}>
					Create Customer
				</MenuItem>
				<MenuItem
					onClick={() => {
						history.push('/createproduct')
					}}>
					Create Product
				</MenuItem>

				<MenuItem
					onClick={() => {
						localStorage.clear()
						window.location.reload()
						history.push('/login')
					}}>
					Logout
				</MenuItem>
			</Menu>
		</Box>
	)
}
export default LoggedInNavBar
