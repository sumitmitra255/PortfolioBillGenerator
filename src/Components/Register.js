import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { Button, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { registerValidationSchema } from '../Schema/registerValidationSchema'
import { registerActionGenerator } from '../Actions/actions'
import '../css/register.css'
export const Register = (props) => {
	const dispatch = useDispatch()
	let history = useHistory()
	const formik = useFormik({
		initialValues: {
			username: '',
			email: '',
			password: '',
			businessName: '',
			address: '',
		},
		validationSchema: registerValidationSchema,
		onSubmit: (values) => {
			dispatch(registerActionGenerator(values, history))
		},
	})

	return (
		<>
			<div className='registerroot'>
				<div className='box-1'>
					<div className='btn btn-one'>
						<span>REGISTER </span>
					</div>
				</div>

				<div className='formdiv'>
					<form onSubmit={formik.handleSubmit}>
						<div className='registerinput'>
							<TextField
								fullWidth
								id='username'
								name='username'
								label='username'
								type='text'
								value={formik.values.username}
								onChange={formik.handleChange}
								error={
									formik.touched.username && Boolean(formik.errors.username)
								}
								helperText={formik.touched.username && formik.errors.username}
							/>
							<TextField
								fullWidth
								id='email'
								name='email'
								label='Email'
								placeholder='abc@xyz.com'
								value={formik.values.email}
								onChange={formik.handleChange}
								error={formik.touched.email && Boolean(formik.errors.email)}
								helperText={formik.touched.email && formik.errors.email}
							/>
							<TextField
								fullWidth
								id='password'
								name='password'
								label='Password'
								type='password'
								value={formik.values.password}
								onChange={formik.handleChange}
								error={
									formik.touched.password && Boolean(formik.errors.password)
								}
								helperText={formik.touched.password && formik.errors.password}
							/>
							<TextField
								fullWidth
								multiline
								id='businessName'
								name='businessName'
								label='businessName'
								type='text'
								value={formik.values.businessName}
								onChange={formik.handleChange}
								error={
									formik.touched.businessName &&
									Boolean(formik.errors.businessName)
								}
								helperText={
									formik.touched.businessName && formik.errors.businessName
								}
							/>
							<TextField
								fullWidth
								multiline
								id='address'
								name='address'
								label='address'
								type='text'
								value={formik.values.address}
								onChange={formik.handleChange}
								error={formik.touched.address && Boolean(formik.errors.address)}
								helperText={formik.touched.address && formik.errors.address}
							/>
							<Button
								variant='contained'
								color='primary'
								type='submit'
								fullWidth>
								Submit
							</Button>
							<br />
							<Button
								variant='contained'
								color='secondary'
								fullWidth
								onClick={() => history.push('/login')}>
								Already Registered Login Here!
							</Button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}
