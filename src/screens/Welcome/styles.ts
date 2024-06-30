import  styled from 'styled-components'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { ThemeProps } from '../../theme';
import { TouchableOpacity,Text } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-bottom: 60px;
`;

export const TopArea = styled.View<ThemeProps>`
  align-items: center;
  top: -10%;
  width: 100%;
  height: 50%;
  background: ${({ theme }) => theme.color.white};
  border-bottom-left-radius: 300px;
  border-bottom-right-radius: 300px;
`;

export const CabImg = styled.Image`
  bottom: -35%;
  height: ${hp('50%')}px;
`;

export const BottomArea = styled.View`
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 50%;
  padding: ${`${hp('10%')}px ${wp('10%')}px  ${hp('1%')}px ${wp('10%')}px`};
`;

export const Title = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 30px;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 22px;
`;

export const TitleBold = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 30px;
  color: ${({ theme }) => theme.color.textColor};
`;
export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const PhoneInputField = styled.TextInput`
color: white;
font-size: 18px;
`;
export const Label = styled.Text`
font-size: 16px;
color: #333;
margin-bottom: 5px;
`;
export const GetStartedButton = styled(TouchableOpacity)`
  /* background-color: #4caf50;  /* Green background */
  background-color:#B80028;
  padding: 15px 30px;        /* Padding for the button */
  border-radius: 25px;       /* Rounded corners */
  justify-content: center;   /* Center the text vertically */
  align-items: center;       /* Center the text horizontally */
  margin-top: 20px;          /* Space at the top */
`;

export const ButtonText = styled(Text)`
  color: white;             /* White text */
  font-size: 18px;          /* Text size */
  font-weight: bold;        /* Bold text */
`;