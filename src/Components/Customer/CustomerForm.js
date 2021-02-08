import { useFormik } from 'formik'
import { Button, TextField } from '@material-ui/core'
import { customerValidationSchema } from '../../Schema/customerValidationSchema'
import { useStyles } from '../../css/materialuistyles'

export const CustomerForm = (props) => {
	const { dispatcher, customerDetails } = props
	const classes = useStyles()
	const formik = useFormik({
		initialValues: {
			name: customerDetails?.name,
			mobile: customerDetails?.mobile,
			email: customerDetails?.email,
		},
		validationSchema: customerValidationSchema,
		onSubmit: (values) => {
			dispatcher(values)
		},
	})

	return (
		<>
			<div className='Login-container'>
				<>
					<form onSubmit={formik.handleSubmit}>
						<TextField
							fullWidth
							id='name'
							name='name'
							label='name'
							type='text'
							value={formik.values.name}
							onChange={formik.handleChange}
							error={formik.touched.name && Boolean(formik.errors.name)}
							helperText={formik.touched.name && formik.errors.name}
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
							id='mobile'
							name='mobile'
							label='mobile'
							type='number'
							value={formik.values.mobile}
							onChange={formik.handleChange}
							error={formik.touched.mobile && Boolean(formik.errors.mobile)}
							helperText={formik.touched.mobile && formik.errors.mobile}
						/>

						<Button
							classes={{
								root: classes.button,
							}}
							fullWidth
							type='submit'>
							Submit
						</Button>
					</form>
				</>
			</div>
		</>
	)
}
