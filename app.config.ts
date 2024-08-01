import 'dotenv/config';
import {GOOGLE_MAP_API_KEY} from '@env';
export default {
expo: {
    name: "luxury-rideUser",
    slug: "luxury-rideUser",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash10.jpg",
      resizeMode: "cover",
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