import {TouchableOpacityProps} from 'react-native'
import { ButtoIconTypeStyleProps, Container, Icon } from './styles'
import {  MaterialIcons } from '@expo/vector-icons'
type Props = TouchableOpacityProps & {
    icon:keyof typeof MaterialIcons.glyphMap;
    type?: ButtoIconTypeStyleProps;
}


export function ButtonIcon ({icon, type = 'PRIMARY', ...rest}:Props){
    return (
        <Container>
            <Icon
                name={icon} 
                type={type}
            />
        </Container>
    )

}