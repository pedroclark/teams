import { MaterialIcons } from '@expo/vector-icons';
import styled , {css} from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 60px;

    background-color: ${({theme}) => theme.COLORS.GRAY_500};
    border-radius:  12px;
    flex-direction: row;
    align-items: center;
    margin-bottom:16px;

`
export const Name = styled.Text`
    flex:1;

    ${({theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px; 
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    
    `}

`
export const Icon = styled(MaterialIcons).attrs(({theme})=> ({
    size:12,
    color:theme.COLORS.GRAY_200
}))`
    margin-left: 16px;
    margin-right:4px ;
`;