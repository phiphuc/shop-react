import axios from 'axios';
import { URL_API_FETCH_INITIAL_DATA } from '../config/app';
import { initCart } from './cart'

export const SHOW_SYSTEM_MESSAGE = 'SHOW_SYSTEM_MESSAGE';
export const HIDE_SYSTEM_MESSAGE = 'HIDE_SYSTEM_MESSAGE';
export const FETCH_INITIAL_DATA_PENDING = 'FETCH_INITIAL_DATA_PENDING';
export const FETCH_INITIAL_DATA_FULFILLED = 'FETCH_INITIAL_DATA_FULFILLED';
export const FETCH_INITIAL_DATA_REJECTED = 'FETCH_INITIAL_DATA_REJECTED';
export const FETCH_DEPARTMENTS_PENDING = 'FETCH_DEPARTMENTS_PENDING';
export const FETCH_DEPARTMENTS_FULFILLED = 'FETCH_DEPARTMENTS_FULFILLED';
export const FETCH_DEPARTMENTS_REJECTED = 'FETCH_DEPARTMENTS_REJECTED';
export const SET_USER_MENU_VISIBILITY = 'SET_USER_MENU_VISIBILITY';
export const SET_LOGIN_FORM_ACTIVE_STATUS = 'SET_LOGIN_FORM_ACTIVE_STATUS';
export const SET_IS_AUTHENTICATED = 'SET_IS_AUTHENTICATED';

export function fetchInitialData(){
    return (dispatch) => {
        dispatch({
            type: FETCH_INITIAL_DATA_PENDING
        });
        axios.get(URL_API_FETCH_INITIAL_DATA)
            .then(res => res.data)
            .then(data => {
                if(data.success){
                    dispatch({
                        type: FETCH_DEPARTMENTS_FULFILLED,
                        payload: data.data.departments
                    });
                    if(data.data.customer){
                        dispatch({
                            type: SET_IS_AUTHENTICATED,
                            payload: {
                                isAuthenticated: !! data.data.customer.email,
                                profile: { ...data.data.customer }
                            }
                        });
                    }
                    dispatch({
                        type: FETCH_INITIAL_DATA_FULFILLED,
                        payload: true
                    });
                    initCart(data.data.cart)(dispatch);
                }else{
                    throw new Error('')
                }
            })
            .catch(err => dispatch({type:  FETCH_DEPARTMENTS_REJECTED, payload: err}))
    }
}

export function hideSystemMessage() {
    return {
        type: HIDE_SYSTEM_MESSAGE,
        payload: {
            text: '',
            type:''
        }
    }
}