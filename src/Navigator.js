import React from 'react'
import { useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from './AuthScreen';
import FeedScreen from './FeedScreen';
import ExitButton from './components/ExitButton';
import { requestLogOut } from './store/ducks/auth';
import AppLoadingScreen from './AppLoadingScreen';

const Stack = createStackNavigator();

const Navigator = () => {
    const dispatch = useDispatch()
    const onExitPress = () => {
        dispatch(requestLogOut())
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Loader"
                    component={AppLoadingScreen}
                />
                <Stack.Screen
                    name="Auth"
                    component={AuthScreen}
                    options={{ headerLeft: null }}
                />
                <Stack.Screen
                    name="Feed"
                    component={FeedScreen}
                    options={{ headerRight: () => <ExitButton onPress={onExitPress} />, headerLeft: null }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator
