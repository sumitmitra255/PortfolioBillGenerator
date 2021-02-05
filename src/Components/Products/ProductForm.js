import { useFormik } from 'formik'
import { Button, TextField } from '@material-ui/core'
import { productValidationSchema } from '../../Schema/productValidationSchema'
import { useStyles } from '../../css/materialuistyles'
export const ProductForm = (props) => {
	const { dispatcher, productsDetails } = props
	const classes = useStyles()
	const formik = useFormik({
		initialValues: {
			name: productsDetails?.name,
			price: productsDetails?.price,
		},
		validationSchema: productValidationSchema,
		onSubmit: (values) => {
			dispatcher(values)
		},
	})

	return (
		<>
			<div class='Login-container'>
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
							id='price'
							name='price'
							label='price'
							type='number'
							value={formik.values.price}
							onChange={formik.handleChange}
							error={formik.touched.price && Boolean(formik.errors.price)}
							helperText={formik.touched.price && formik.errors.price}
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
