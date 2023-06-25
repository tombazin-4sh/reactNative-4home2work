import { StyleSheet } from 'react-native';
import {primaryColor, backgroundColor, black, red, grey, transparent} from './colors';
import { bold, sizeL, sizeM, sizeS, sizeXL } from './text';

const PADDING = 12;

export const globalStyles = StyleSheet.create({
    titleText1: {
        fontSize: sizeXL,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: black,
    }
});
