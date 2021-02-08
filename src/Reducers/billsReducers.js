const initialbillslist = []

export const billsListReducer = (state = initialbillslist, action) => {
	switch (action.type) {
		case 'billslist': {
			return [...action.payload]
		}
		default: {
			return [...state]
		}
	}
}

//bills details
const initialbillsDetails = {}

export const billsDetailsReducer = (state = initialbillsDetails, action) => {
	switch (action.type) {
		case 'billsdetails': {
			return { ...action.payload }
		}
		default: {
			return { ...state }
		}
	}
}
//seleted customer
const initialseletecCustomer = {}

export const selectedcustomerReducer = (
	state = initialseletecCustomer,
	action
) => {
	switch (action.type) {
		case 'selectedcustomer': {
			return { ...action.payload }
		}
		default: {
			return { ...state }
		}
	}
}
//seleted itemslist
const initialseletecItemsList = []

export const selectedItemsReducer = (
	state = initialseletecItemsList,
	action
) => {
	switch (action.type) {
		case 'selecteditemslist': {
			return [...action.payload]
		}
		default: {
			return [...state]
		}
	}
}
