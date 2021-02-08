import * as yup from 'yup'

export const productValidationSchema = yup.object({
	name: yup.string('enter product name').required('Product name is must'),
	price: yup
		.number('Mobile number must be number')
		.required('Email is required'),
})
