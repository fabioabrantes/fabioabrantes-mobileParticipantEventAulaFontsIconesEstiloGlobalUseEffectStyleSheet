import { ActivityIndicator, View } from 'react-native';

import { THEMES } from '../../global/thmesGlobal';


export function Loading() {

  return (
    <View style={{ flex: 1,backgroundColor:"black", alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator
        color={THEMES.colors.white}
        size={THEMES.size.lg}
      />
    </View>
  )
}