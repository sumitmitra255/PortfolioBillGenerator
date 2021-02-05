const initialproductlist = []

export const productListReducer = (state = initialproductlist, action) => {
	switch (action.type) {
		case 'productlist': {
			return [...action.payload]
		}
		default: {
			return [...state]
		}
	}
}

//product details
const initialproductDetails = {}

export const productDetailsReducer = (
	state = initialproductDetails,
	action
) => {
	switch (action.type) {
		case 'productdetails': {
			return { ...action.payload }
		}
		default: {
			return { ...state }
		}
	}
}
//update product
