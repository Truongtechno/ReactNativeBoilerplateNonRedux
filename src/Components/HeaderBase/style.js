import { StyleSheet } from 'react-native';
import color from '../../Config/Color';

export default styles = StyleSheet.create({
    parrentView: {
        flex: 1,
        flexDirection: 'row'
    },
    viewLeft: {
        flex: 0.5
    },
    buttonLeft: {
        alignSelf: 'flex-start'
    },
    imageButtonLeft: {
        width: 12,
        height: 21,
        marginRight: 5
    },
    viewCenter: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    textCenter: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    viewRight: {
        flex: 0.5
    }
});
