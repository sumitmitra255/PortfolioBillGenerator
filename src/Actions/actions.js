import axios from '../AxiosConfig/axiosConfig.js'
import swal from 'sweetalert'
import * as R from 'ramda'
import _ from 'lodash'
// login reducers //login token actions

const setLoginData = (data) => {
	return {
		type: 'login',
		payload: data,
	}
}

export const loginActionGenerator = (formData, history) => {
	return (dispatch) => {
		if (formData) {
			axios
				.post('users/login', formData)
				.then((response) => {
					if (response.data.token) {
						localStorage.setItem('userToken', response.data.token)
						dispatch(setLoginData({ token: response.data.token }))
						swal('Whoa!', `Dear  Your Login is Sucessful!`, 'success')
						history.push('/home')
					} else {
						swal('Oops! Login Failed!', response.data.message, 'error')
					}
				})
				.catch((err) => {
					swal(
						'Server is LOST. Please Try Again after Sometime!',
						err.message,
						'error'
					)
				}, [])
		} else {
			swal('Your Login Failed', 'Your input data is missing', 'error')
		}
	}
}
export const loginTokenGenerator = (token, history) => {
	if (token) {
		return (dispatch) => {
			dispatch(setLoginData({ token: token }))
			// history.push('/home')
		}
	} else {
		swal('Login Token Not Found! Please Login', '', 'error')
	}
}

//register
const setRegisterData = (data) => {
	return {
		type: 'register',
		payload: data,
	}
}

export const registerActionGenerator = (formData, history) => {
	return (dispatch) => {
		if (formData) {
			axios
				.post('users/register', formData)
				.then((response) => {
					if (response.data._id) {
						dispatch(setRegisterData(response.data))
						swal(
							'Whoa!',
							`Dear ${response.data.username} Your Registration is Sucessful!`,
							'success'
						)
						history.push('/login')
					} else {
						swal('Oops! Registrations Failed!', response.data.message, 'error')
					}
				})
				.catch((err) => {
					swal(
						'Server is LOST. Please Try Again after Sometime!',
						err.message,
						'error'
					)
				}, [])
		} else {
			swal('Registration Failed! Try Again!', '', 'error')
		}
	}
}

//user info

const setUserinfoData = (data) => {
	return {
		type: 'userinfo',
		payload: data,
	}
}

export const userInfoActionGenerator = (token) => {
	return (dispatch) => {
		if (token) {
			axios
				.get('/users/account', {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((response) => {
					if (response.data._id) {
						dispatch(setUserinfoData(response.data))
					} else {
						swal('Oops! Registrations Failed!', response.data.message, 'error')
					}
				})
				.catch((err) => {
					swal(
						'Server is LOST. Please Try Again after Sometime!',
						err.message,
						'error'
					)
				}, [])
		} else {
			swal('Token is Lost ! LOgin Again!', '', 'error')
		}
	}
}
