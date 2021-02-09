import axios from '../AxiosConfig/axiosConfig.js'
import swal from 'sweetalert'
import * as R from 'ramda'
import _ from 'lodash'
//Customer reducers

const setcustomerListData = (data) => {
	return {
		type: 'customerlist',
		payload: data,
	}
}

export const customerListActionGenerator = (token) => {
	return (dispatch) => {
		axios
			.get('/customers', {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((response) => {
				dispatch(setcustomerListData(response.data))
				localStorage.setItem('customerlist', JSON.stringify(response.data))
			})
			.catch((err) => {
				swal(
					'Server is LOST. Please Try Again after Sometime!',
					err.message,
					'error'
				)
			}, [])
	}
}
export const setCustomersListLocalStorage = (token, customerlist) => {
	return (dispatch) => {
		if (token) {
			dispatch(setcustomerListData(customerlist))
		}
	}
}
export const createCustomerActionGenerator = (
	customerList,
	formData,
	token
) => {
	return (dispatch) => {
		if (formData) {
			axios
				.post('/customers', formData, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((response) => {
					if (response.data._id) {
						const temp = [response.data]
						const test = [...temp, ...customerList]
						dispatch(setcustomerListData(test))
						localStorage.setItem('customerlist', JSON.stringify(test))
						swal('Whoa!', `Customer Add Sucessful!`, 'success')
					} else {
						swal('Oops! Customer Add Failed!', response.data.message, 'error')
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
			swal('Please enter Details First', '', 'error')
		}
	}
}
export const UpdateCustomerActionGenerator = (
	customerList,
	customerEle,
	formdata,
	token,
	setEditToggle
) => {
	return (dispatch) => {
		if (formdata) {
			axios
				.put(`/customers/${customerEle._id}`, formdata, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((response) => {
					if (response.data._id) {
						const temp = response.data
						const index = _.findIndex(customerList, { _id: temp._id })
						const updatedCustomerList = R.update(index, temp, customerList)
						dispatch(setcustomerListData(updatedCustomerList))
						localStorage.setItem(
							'customerlist',
							JSON.stringify(updatedCustomerList)
						)
						setEditToggle(false)
						swal('Whoa!', `Dear  Customer Update is Sucessful!`, 'success')
					} else {
						swal(
							'Oops! Customer Update Failed!',
							response.data.message,
							'error'
						)
					}
				})
				.catch((err) => {
					swal(
						'Server is LOST. Please Try Again after Sometime!',
						err.message,
						'error'
					)
				}, [])
		}
		swal('Please Enter Details First', '', 'error')
	}
}

export const deleteCustomerActionGenerator = (
	customerList,
	customerEle,
	token,
	setEditToggle
) => {
	return (dispatch) => {
		axios
			.delete(`/customers/${customerEle._id}`, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((response) => {
				if (response.data._id) {
					const temp = response.data
					const index = _.findIndex(customerList, { _id: temp._id })
					const updatedCustomerList = R.remove(index, 1, customerList)
					dispatch(setcustomerListData(updatedCustomerList))
					localStorage.setItem(
						'customerlist',
						JSON.stringify(updatedCustomerList)
					)
					swal('Whoa!', `Dear  Your Registration is Sucessful!`, 'success')
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
	}
}
//customer info reducer
const setCustomerinfoData = (data) => {
	return {
		type: 'customerdetails',
		payload: data,
	}
}
export const userCustomerDetailsActionGenerator = (
	customer,
	token,
	history
) => {
	return (dispatch) => {
		if (customer) {
			axios
				.get(`/customers/${customer._id}`, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((response) => {
					dispatch(setCustomerinfoData(response.data))
					history.push(`/customerinfo/${customer._id}`)
				})
				.catch((err) => {
					swal(
						'Server is LOST. Please Try Again after Sometime!',
						err.message,
						'error'
					)
				}, [])
		} else {
			swal('Please select a customer first', '', 'error')
		}
	}
}
