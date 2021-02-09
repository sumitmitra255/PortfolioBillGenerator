import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { Button, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { loginValidationSchema } from '../Schema/loginValidationSchema'
import { loginActionGenerator } from '../Actions/actions'
import '../css/login.css'
import { useStyles } from '../css/materialuistyles'
export const Login = (props) => {
	const dispatch = useDispatch()
	let history = useHistory()
	const classes = useStyles()
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: loginValidationSchema,
		onSubmit: (values) => {
			dispatch(loginActionGenerator(values, history))
		},
	})

	return (
		<>
			<div className='loginparentdiv'>
				<h3>sumit1@gmail.com</h3>
				<h3>superstar25</h3>
				<div className='box-1'>
					<div className='btn btn-one'>
						<span>LOGIN </span>
					</div>
				</div>
				<div className='formdiv'>
					<form onSubmit={formik.handleSubmit}>
						<div className='logindiv'>
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
							<Button
								variant='contained'
								color='primary'
								type='submit'
								fullWidth>
								Submit
							</Button>
							<Button
								variant='contained'
								color='secondary'
								onClick={() => history.push('/register')}
								fullWidth>
								Register Here!
							</Button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}
