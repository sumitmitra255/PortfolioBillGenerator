import axios from '../AxiosConfig/axiosConfig.js'
import swal from 'sweetalert'
import * as R from 'ramda'
import _ from 'lodash'

const setbillsListData = (data) => {
	return {
		type: 'billslist',
		payload: data,
	}
}

export const billsListActionGenerator = (token) => {
	return (dispatch) => {
		axios
			.get('/bills', {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((response) => {
				dispatch(setbillsListData(response.data))
				localStorage.setItem('billlist', JSON.stringify(response.data))
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
export const setBillsListLocalStorage = (token, billlist) => {
	return (dispatch) => {
		if (token) {
			dispatch(setbillsListData(billlist))
		}
	}
}
export const addBillActionGenerator = (token, formData, billsList, history) => {
	return (dispatch) => {
		if (formData.customer && formData.lineItems.length) {
			axios
				.post('/bills', formData, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((response) => {
					if (response.data._id) {
						billsList.push(response.data)
						dispatch(setbillsListData(billsList))
						localStorage.setItem('billlist', JSON.stringify(billsList))
						dispatch(setbillsinfoData(response.data))
						dispatch(setSelectedCustomer({}))
						dispatch(setSelecteditemslist([]))
						history.push(`/billsinfo/${response.data._id}`)
						swal('Whoa!', `Your Bill Generation is Sucessful!`, 'success')
					} else {
						swal(
							'Oops! Bill generation Failed!',
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
		} else {
			swal('Cannot Add Information is empty', 'error')
		}
	}
}

//selected customer
const setSelectedCustomer = (data) => {
	return {
		type: 'selectedcustomer',
		payload: data,
	}
}
export const selectedCustomerActionGenerator = (customerdispatchobject) => {
	return (dispatch) => {
		if (customerdispatchobject) {
			dispatch(setSelectedCustomer(customerdispatchobject))
			swal('Whoa!', `Dear user  Customer Name Add is Sucessful!`, 'success')
		} else {
			swal('Please Enter customer First', '', 'error')
		}
	}
}
//selected items
const setSelecteditemslist = (data) => {
	return {
		type: 'selecteditemslist',
		payload: data,
	}
}
export const selectedItemListrActionGenerator = (
	lineitemsdispatchobject,
	stateProducts
) => {
	return (dispatch) => {
		if (lineitemsdispatchobject) {
			stateProducts.push(lineitemsdispatchobject)
			dispatch(setSelecteditemslist(stateProducts))
		} else {
			swal('Please Enter Product details first', '', 'error')
		}
	}
}
export const deleteItemListActionGenerator = (deletedItem, stateProducts) => {
	return (dispatch) => {
		if (deletedItem.lineItems._id) {
			const temp = deletedItem
			const index = _.findIndex(stateProducts, { lineItems: temp.lineItems })
			const updatedCustomerList = R.remove(index, 1, stateProducts)
			dispatch(setSelecteditemslist(updatedCustomerList))
			// swal('Whoa!', `Dear  Your Registration is Sucessful!`, 'success')
		}
	}
}
//-----------------------------------------------
export const UpdatebillsActionGenerator = (
	billsList,
	billsEle,
	formdata,
	token,
	setEditToggle
) => {
	return (dispatch) => {
		if (formdata) {
			axios
				.put(`/bills/${billsEle._id}`, formdata, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((response) => {
					if (response.data._id) {
						const temp = response.data
						const index = _.findIndex(billsList, { _id: temp._id })
						const updatedbillsList = R.update(index, temp, billsList)
						dispatch(setbillsListData(updatedbillsList))
						localStorage.setItem('billlist', JSON.stringify(updatedbillsList))
						setEditToggle(false)
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
		} else {
			swal('Please enter edit details', '', 'error')
		}
	}
}

export const deletebillsActionGenerator = (billsList, billsEle, token) => {
	return (dispatch) => {
		axios
			.delete(`/bills/${billsEle._id}`, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((response) => {
				if (response.data._id) {
					const temp = response.data
					const index = _.findIndex(billsList, { _id: temp._id })
					const updatedbillsList = R.remove(index, 1, billsList)
					dispatch(setbillsListData(updatedbillsList))
					localStorage.setItem('billlist', JSON.stringify(updatedbillsList))
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
//bills details
const setbillsinfoData = (data) => {
	return {
		type: 'billsdetails',
		payload: data,
	}
}
export const userbillsDetailsActionGenerator = (bills, token, history) => {
	return (dispatch) => {
		if (bills) {
			axios
				.get(`/bills/${bills._id}`, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((response) => {
					dispatch(setbillsinfoData(response.data))
					history.push(`/billsinfo/${bills._id}`)
				})
				.catch((err) => {
					swal(
						'Server is LOST. Please Try Again after Sometime!',
						err.message,
						'error'
					)
				}, [])
		} else {
			swal('Please Choose a Bill FIrst', '', 'error')
		}
	}
}
