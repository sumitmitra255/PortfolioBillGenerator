import { useSelector, useDispatch } from 'react-redux'
import {
	userbillsDetailsActionGenerator,
	UpdatebillsActionGenerator,
	deletebillsActionGenerator,
} from '../../Actions/billsActions'

import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { Button, TableCell } from '@material-ui/core'
import { useStyles } from '../../css/materialuistyles'
import DeleteIcon from '@material-ui/icons/Delete'

export const Displaybills = (props) => {
	const { billsEle } = props
	const [editToggle, setEditToggle] = useState(false)
	const dispatch = useDispatch()
	const history = useHistory()
	const classes = useStyles()
	const token = useSelector((state) => state.logintoken.token)
	const billsList = useSelector((state) => state.billlist)
	const stu = useSelector((state) => state)
	const displaybills = () => {
		dispatch(userbillsDetailsActionGenerator(billsEle, token, history))
	}

	const deletebills = () => {
		dispatch(
			deletebillsActionGenerator(billsList, billsEle, token, setEditToggle)
		)
	}
	return (
		<>
			<TableCell onClick={displaybills}>{billsEle._id}</TableCell>
			<TableCell onClick={displaybills}>{billsEle.createdAt}</TableCell>
			<TableCell>
				<Button
					classes={{
						root: classes.button,
					}}
					fullWidth
					onClick={deletebills}>
					<DeleteIcon />
				</Button>
			</TableCell>
		</>
	)
}
