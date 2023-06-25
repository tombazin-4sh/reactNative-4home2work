import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { globalStyles } from '../Styles/globals';
import { black } from '../Styles/colors';
import { bold, sizeM, sizeS, sizeXS } from '../Styles/text';

/*
Example of use:
<Paragraph style={{ color: 'red', fontSize: 16 }}>Hello world!</Paragraph>
<Paragraph style={[ { color: 'red' }, { fontSize: 16 } ]}>Hello world!</Paragraph>
*/

export function Paragraph(props) {
    const componentProps = { ...props };
    delete componentProps.children;

    componentProps.style = [{ fontSize: sizeM }, componentProps.style];

    return (
        <Text {...componentProps}>{ props.children }</Text>
    )
}

export function Title1(props) {
    const componentProps = { ...props };
    delete componentProps.children;

    componentProps.style = [globalStyles.titleText1, componentProps.style];

    return (
        <Text {...componentProps}>{ props.children }</Text>
    )
}