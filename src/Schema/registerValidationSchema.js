import * as yup from 'yup'

export const registerValidationSchema = yup.object({
	username: yup.string('Enter your email').required('Email is required'),
	email: yup
		.string('Enter your email')
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup
		.string('Enter your password')
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required'),
	businessName: yup
		.string('Enter your businessname')
		.required('Business name is required'),
	address: yup.string('Enter your Address').required('Address is required'),
})
