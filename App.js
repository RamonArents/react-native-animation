import { useRef } from 'react';
import { StyleSheet, View, Animated, Button } from 'react-native';

export default function App() {

  const boxOpacityAnimationValue = useRef(new Animated.Value(0)).current;

  function handleFadeInBox(){
    Animated.timing(boxOpacityAnimationValue, {
      duration : 1000,
      toValue: 1,
      delay: 200,
      useNativeDriver: true
    }).start()
  }

  const opacityStyle = {
    opacity: boxOpacityAnimationValue
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, opacityStyle]}></Animated.View>
      <Button onPress={handleFadeInBox} color={"black"} title="Fade This Red Box" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height:200,
    backgroundColor: "red",
    marginBottom: 40
  }
});
