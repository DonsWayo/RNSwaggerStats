import React, { ReactElement } from 'react'
import { Appbar } from 'react-native-paper'

interface Props {
    name: string;
}

export default function Header({name}): ReactElement {
    return (
        <Appbar.Header style= {{backgroundColor: 'white'}}>
                <Appbar.Content
                    title={name}
                    titleStyle={{color:'#41B883'}}
                />
            </Appbar.Header>
    )
}
