import * as yup from 'yup'

export const customerValidationSchema = yup.object({
	name: yup.string('enter customer name').required('Customer name is must'),
	email: yup
		.string('Enter your email')
		.email('Enter a valid email')
		.required('Email is required'),
	mobile: yup
		.number('Mobile number must be number')
		.required('Email is required'),
})
