import { StyledTextProps } from "./types";
import styled from 'styled-components/native'
import { SafeAreaView } from "react-native";

const StyledSafeAreaView = styled (SafeAreaView)`
    flex: 1;
    `;

const StyledApplicationWrapper = styled.View`
    flex: 1;
    `;

const StyledText = styled.Text<StyledTextProps>`
    color: black;
    `;

    export {
        StyledApplicationWrapper,
        StyledSafeAreaView,
        StyledText,
    }