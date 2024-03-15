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

  function handleFadeOutBox(){
    Animated.timing(boxOpacityAnimationValue, {
      duration : 500,
      toValue: 0,
      useNativeDriver: true
    }).start()
  }

  function handleCallbackMethod(){
    Animated.timing(boxOpacityAnimationValue, {
      duration : 500,
      toValue: 1,
      useNativeDriver: true
    }).start(() => {
      Animated.timing(boxOpacityAnimationValue, {
        duration : 500,
        toValue: 0.4,
        useNativeDriver: true
      }).start()
    })
  }

  const opacityStyle = {
    opacity: boxOpacityAnimationValue
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, opacityStyle]}></Animated.View>
      <Button onPress={handleFadeInBox} color={"black"} title="Fade This Red Box In" />
      <Button onPress={handleFadeOutBox} color={'green'} title='Fade This Red Box Out' />
      <Button onPress={handleCallbackMethod} color={'blue'} title='Handle Callback Of Timing Method' />
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
