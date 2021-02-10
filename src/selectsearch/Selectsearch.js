import { Button } from '@material-ui/core'
import Select from 'react-select'

// import { Displaybills } from './Displaybills'
export const Selectsearch = (props) => {
	const { options, setter, dispatcher } = props
	return (
		<>
			<div className='selectsearchdiv'>
				<div style={{ width: '1360px' }}>
					<Select
						options={options}
						onChange={(opt) => setter(opt.value)}
						isSearchable
					/>
				</div>
				<div>
					<Button variant='contained' color='primary' onClick={dispatcher}>
						Get Details
					</Button>
				</div>
			</div>
		</>
	)
}
