import React, { useEffect } from 'react'
import { getIsLoaded, load, useLogin } from './store/ducks/auth';
import {useDispatch, useSelector} from 'react-redux';
import EmptyScreen from './components/EmptyScreen';

const AppLoadingScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const login = useLogin()
    const isLoginLoaded = useSelector(getIsLoaded)

    useEffect(() => {
        dispatch(load())
    }, [])

    useEffect(() => {
        if (isLoginLoaded) {
            navigation.navigate(login != null ? 'Feed' : 'Auth')
        }
    }, [isLoginLoaded, login])

    return <EmptyScreen />
}

export default AppLoadingScreen
