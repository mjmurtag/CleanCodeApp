import * as React from 'react';
import { TouchableOpacity, ViewStyle, Text } from 'react-native';

import { GLOBAL } from '../styles/global';

type Callback = () => any;
export interface Props {
  title: string;
  onClick: Callback;
  style?: ViewStyle;
}

/**
 * Default Button
 */
const BUTTON_DEFAULT = ({ title, onClick, style }: Props) => (
  <TouchableOpacity
    activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
    style={[GLOBAL.CTA.Style.primary, GLOBAL.LAYOUT.shadow, style]}
    onPress={() => onClick()}
  >
    <Text style={GLOBAL.CTA.Style.primaryText}>{title}</Text>
  </TouchableOpacity>
);

export { BUTTON_DEFAULT };
