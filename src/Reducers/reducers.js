const initiallogin = {}

export const loginReducer = (state = initiallogin, action) => {
	switch (action.type) {
		case 'login': {
			return { ...action.payload }
		}
		default: {
			return { ...state }
		}
	}
}
const initialRegister = {}

export const registerReducer = (state = initialRegister, action) => {
	switch (action.type) {
		case 'register': {
			return { ...action.payload }
		}
		default: {
			return { ...state }
		}
	}
}
const initialuserinfo = {}

export const userinfoReducer = (state = initialuserinfo, action) => {
	switch (action.type) {
		case 'userinfo': {
			return { ...action.payload }
		}
		default: {
			return { ...state }
		}
	}
}
