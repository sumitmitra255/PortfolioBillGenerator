const initialcustomerlist = []

export const customerListReducer = (state = initialcustomerlist, action) => {
	switch (action.type) {
		case 'customerlist': {
			return [...action.payload]
		}
		default: {
			return [...state]
		}
	}
}

//customer details
const initialCustomerDetails = {}

export const customerDetailsReducer = (
	state = initialCustomerDetails,
	action
) => {
	switch (action.type) {
		case 'customerdetails': {
			return { ...action.payload }
		}
		default: {
			return { ...state }
		}
	}
}
//update customer
