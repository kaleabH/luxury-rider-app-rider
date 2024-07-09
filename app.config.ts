import 'dotenv/config';
// import {GOOGLE_MAP_API_KEY} from '@env';
export default {
expo: {
    name: "luxury-rider-app-rider",
    slug: "luxury-rider-app-rider",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      "supportsTablet": true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/icon.png",
        backgroundColor: "#ffffff"
      },
      package: "com.kaleabhaliu.luxuryriderapprider",
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAP_API_KEY
        }
      }
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      eas: {
        projectId: "e4753b88-ebfc-465b-ad81-e7c4e3ebd625"
      }
    }
  }
}