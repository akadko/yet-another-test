import React from 'react'
import { TouchableOpacity } from 'react-native';
import ExitIcon from '../resources/exit.svg'

const ExitButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={{ paddingRight: 16 }}>
            <ExitIcon height={20} width={20} />
        </TouchableOpacity>
    )
}

export default ExitButton
