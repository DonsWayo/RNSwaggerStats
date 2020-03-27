import React, { ReactElement } from 'react'
import { Appbar } from 'react-native-paper'
import { ACCENT_COLOR } from '../core/Constants'

interface Props {
    name: string;
}

export default function Header({name}): ReactElement {
    return (
        <Appbar.Header style= {{backgroundColor: 'white'}}>
                <Appbar.Content
                    title={name}
                    titleStyle={{color: ACCENT_COLOR}}
                />
            </Appbar.Header>
    )
}
