import AsyncStorage from '@react-native-community/async-storage'
import { useSelector } from 'react-redux';
import {Alert} from 'react-native';

const LOADED = 'auth/LOAD'
const LOG_IN = 'auth/LOG_IN'
const ERROR = 'auth/ERROR'
const LOG_OUT = 'auth/LOG_OUT'

const initialState = {
    isLoaded: false,
    login: null,
    error: null,
}

export const load = () => async dispatch => {
    try {
        const login = await AsyncStorage.getItem('login')
        dispatch({ type: LOADED, login })
    } catch (error) {
        dispatch({ type: LOADED, login: null })
    }
}

export const logIn = (login: string, persist: boolean) => async dispatch => {
    try {
        if (persist) {
            await AsyncStorage.setItem('login', login)
        }
        dispatch({ type: LOG_IN, login })
    } catch (error) {
        console.warn(error)
        dispatch({ type: ERROR, error })
    }
}

const logOut = () => async dispatch => {
    await AsyncStorage.clear()
    dispatch({ type: LOG_OUT })
}

export const requestLogOut = () => dispatch => {
    Alert.alert('Do you really want to exit?', '', [
        {
            text: 'Cancel',
            style: 'cancel',
        },
        {
            text: 'Confirm',
            style: 'destructive',
            onPress: () => {
                dispatch(logOut())
            }
        }
    ])
}

export const getIsLoaded = state => state.auth.isLoaded
export const getLogin = state => state.auth.login

export const useLogin = () => useSelector(getLogin)

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                login: action.login,
            }
        case LOADED:
            return {
                ...state,
                login: action.login,
                isLoaded: true,
            }
        case ERROR:
            return {
                ...state,
                error: action.error,
            }
        case LOG_OUT:
            return initialState
        default:
            return state
    }
}
