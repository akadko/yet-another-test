import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { load, logIn, useLogin } from './store/ducks/auth';
import BaseScreen from './components/BaseScreen';
import LoginForm from './components/LoginForm';

const AuthScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const login = useLogin()
    const onLogin = (login, saveData) => dispatch(logIn(login, saveData))

    useEffect(() => {
        dispatch(load())
    }, [])

    useEffect(() => {
        if (login != null) {
            navigation.navigate('Feed')
        }
    }, [login, navigation])

    return (
        <BaseScreen>
            <LoginForm onLogin={onLogin} />
        </BaseScreen>
    )
}

export default AuthScreen
