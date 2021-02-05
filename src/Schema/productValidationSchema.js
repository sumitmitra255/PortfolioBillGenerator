import * as yup from 'yup'

export const productValidationSchema = yup.object({
	name: yup.string('enter customer name').required('Customer name is must'),
	price: yup
		.number('Mobile number must be number')
		.required('Email is required'),
})
