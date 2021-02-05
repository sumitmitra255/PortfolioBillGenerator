import { Button } from '@material-ui/core'
import Select from 'react-select'
import { useStyles } from '../css/materialuistyles'

// import { Displaybills } from './Displaybills'
export const Selectsearch = (props) => {
	const { options, setter, dispatcher } = props
	const classes = useStyles()
	return (
		<>
			<div>
				<Select
					options={options}
					onChange={(opt) => setter(opt.value)}
					isSearchable
				/>
				<Button
					classes={{
						root: classes.button,
					}}
					fullWidth
					onClick={dispatcher}>
					Get Details
				</Button>
			</div>
		</>
	)
}
