import axios from '../AxiosConfig/axiosConfig.js'
import swal from 'sweetalert'
import * as R from 'ramda'
import _ from 'lodash'
//product reducers

const setproductListData = (data) => {
	return {
		type: 'productlist',
		payload: data,
	}
}

export const productListActionGenerator = (token) => {
	return (dispatch) => {
		axios
			.get('/products', {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((response) => {
				dispatch(setproductListData(response.data))
				localStorage.setItem('productlist', JSON.stringify(response.data))
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
export const setProductListLocalStorage = (token, productlist) => {
	return (dispatch) => {
		if (token) {
			dispatch(setproductListData(productlist))
		}
	}
}
export const createProductActionGenerator = (productList, formData, token) => {
	return (dispatch) => {
		if (formData) {
			axios
				.post('/products', formData, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((response) => {
					if (response.data._id) {
						const temp = [response.data]
						const test = [...temp, ...productList]
						dispatch(setproductListData(test))
						localStorage.setItem('productlist', JSON.stringify(test))
						swal('Whoa!', ` Your Product Add is Sucessful!`, 'success')
					} else {
						swal('Oops! Product Add Failed!', response.data.message, 'error')
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
			swal('Please enter details first', '', 'error')
		}
	}
}
export const updateproductActionGenerator = (
	productList,
	productEle,
	formdata,
	token,
	setEditToggle
) => {
	return (dispatch) => {
		if (formdata) {
			axios
				.put(`/products/${productEle._id}`, formdata, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((response) => {
					if (response.data._id) {
						const temp = response.data
						const index = _.findIndex(productList, { _id: temp._id })
						const updatedproductList = R.update(index, temp, productList)
						dispatch(setproductListData(updatedproductList))
						localStorage.setItem(
							'productlist',
							JSON.stringify(updatedproductList)
						)
						setEditToggle(false)
						swal('Whoa!', `Dear  Your Product Update is Sucessful!`, 'success')
					} else {
						swal('Oops! Product Update Failed!', response.data.message, 'error')
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
			swal('Please Enter details first', '', 'error')
		}
	}
}

export const deleteproductActionGenerator = (
	productList,
	productEle,
	token,
	setEditToggle
) => {
	return (dispatch) => {
		axios
			.delete(`/products/${productEle._id}`, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((response) => {
				if (response.data._id) {
					const temp = response.data
					const index = _.findIndex(productList, { _id: temp._id })
					const updatedproductList = R.remove(index, 1, productList)
					dispatch(setproductListData(updatedproductList))
					localStorage.setItem(
						'productlist',
						JSON.stringify(updatedproductList)
					)
					swal('Whoa!', `Dear  Your Delete Product is Sucessful!`, 'success')
				} else {
					swal('Oops! Delete Product Failed!', response.data.message, 'error')
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
//product info reducer
const setproductinfoData = (data) => {
	return {
		type: 'productdetails',
		payload: data,
	}
}
export const userproductDetailsActionGenerator = (product, token, history) => {
	return (dispatch) => {
		if (product) {
			axios
				.get(`/products/${product._id}`, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((response) => {
					dispatch(setproductinfoData(response.data))
					history.push(`/productinfo/${product._id}`)
				})
				.catch((err) => {
					swal(
						'Server is LOST. Please Try Again after Sometime!',
						err.message,
						'error'
					)
				}, [])
		} else {
			swal('Please select a product first', '', 'error')
		}
	}
}
