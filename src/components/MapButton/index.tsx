import React from 'react';
import { ImageURISource, View } from 'react-native';
import { RectButtonProperties } from 'react-native-gesture-handler';

import * as S from './styles';

export interface IMapButtonProps extends RectButtonProperties {
  icon: ImageURISource;
  noMargin?: boolean;
  transparent?: boolean;
}

const MapButton: React.FC<IMapButtonProps> = ({
  icon,
  noMargin = false,
  transparent,
  ...props
}) => {
  return (
    // <S.Container
    <View
      noMargin={noMargin}
      transparent={transparent}
      {...props}
      style={{
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
      }}
    >
      <S.Icon source={icon} />
      </View>
    // </S.Container>
  );
};

export default MapButton;
