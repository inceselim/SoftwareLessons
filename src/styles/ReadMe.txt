https://www.npmjs.com/package/react-dark-mode-toggle

React.useEffect(() => {
  const unsubscribe = navigation.addListener('tabPress', (e) => {
    // Prevent default behavior

    e.preventDefault();
    // Do something manually
    // ...
  });

  return unsubscribe;
}, [navigation]);


'rgb(00, 45, 85)'



iç kısımlara drawer navigation

Çoklu button


npm install react-native-youtube --save
