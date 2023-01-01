import {toastr} from 'react-redux-toastr'
export const getConttentType = ()=>({
	'Content-Type':'application/json'
})

export const errorCatch = (error:any):string => error.response && error.response.data
	? typeof  error.response.data.message == 'object'
		? error.response.message[0]
		: error.response.message
	: error.message

export const toastError =(error: any, title =  'Error request') =>{
	const message = errorCatch(error)
	toastr.error(title, message)
	throw message
}