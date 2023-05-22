```
npx expo start --tunnel
```

> reactotron

```
adb reverse tcp:9090 tcp:9090
```

```
npm install --global expo-cli eas-cli
expo login
eas login
# eas.json file
eas build -p android --profile preview
```

>download apk from expo website

> eas.json
> to build apk instead of playstore build file

```
{
    "build": {
      "preview": {
        "android": {
          "buildType": "apk"
        }
      },
      "preview2": {
        "android": {
          "gradleCommand": ":app:assembleRelease"
        }
      },
      "preview3": {
        "developmentClient": true
      },
      "production": {}
    }
  }
```

## Packages

```
react-native-template@1.0.0 /home/sc0rp10n/templates/react-native-template
├── @babel/core@7.21.8
├── @expo/webpack-config@18.0.4
├── @react-native-async-storage/async-storage@1.17.11
├── @react-navigation/native-stack@6.9.12
├── @react-navigation/native@6.1.6
├── dotenv@16.0.3
├── expo-status-bar@1.4.4
├── expo@48.0.17
├── nativewind@2.0.11
├── react-dom@18.2.0
├── react-icons@4.8.0
├── react-native-safe-area-context@4.5.0
├── react-native-screens@3.20.0
├── react-native-web@0.18.12
├── react-native@0.71.8
├── react@18.2.0
├── reactotron-react-native@5.0.3
└── tailwindcss@3.3.2
```
