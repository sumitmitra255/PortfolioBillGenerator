import { Button } from '@material-ui/core'
import Select from 'react-select'
import { useStyles } from '../css/materialuistyles'

// import { Displaybills } from './Displaybills'
export const Selectsearch = (props) => {
	const { options, setter, dispatcher } = props
	const classes = useStyles()
	return (
		<>
			<div className='selectsearchdiv'>
				<div style={{ width: '1320px' }}>
					<Select
						options={options}
						onChange={(opt) => setter(opt.value)}
						isSearchable
					/>
				</div>
				<div>
					<Button
						classes={{
							root: classes.button,
						}}
						onClick={dispatcher}>
						Get Details
					</Button>
				</div>
			</div>
		</>
	)
}
