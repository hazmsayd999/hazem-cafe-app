# Hazem Cafe Menu - Expo Project (Prepared)

This project was generated from the Excel file you uploaded. It includes the app source and extracted `data.json` with your menus/prices.

## What I included
- `App.js` — main React Native (Expo) app (Arabic RTL-friendly)
- `data.json` — all sheets exported from your Excel file (menu items & rates)
- `package.json`, `app.json` — Expo config
- `assets/` — placeholder icon & splash (replace with your images)
- CSV exports of each Excel sheet for easy editing

## How to run locally (development)
1. Install Node.js (16+). Install Expo CLI:
   ```bash
   npm install -g expo-cli
   ```
2. In project folder, install dependencies:
   ```bash
   npm install
   ```
3. Start Expo:
   ```bash
   npm start
   ```
4. Scan the QR code with Expo Go on your phone or run on emulator.

## How to build an Android APK (recommended: EAS Build)
Expo now recommends EAS for production builds. Steps (you need an Expo account):

1. Install EAS CLI:
   ```bash
   npm install -g eas-cli
   ```
2. Login and configure:
   ```bash
   eas login
   eas build:configure
   ```
3. Create an Android build (APK):
   ```bash
   eas build -p android --profile production
   ```
4. Download the generated APK from Expo's build page and install on devices.

### Alternative (classic, may be deprecated)
You can try the classic expo build (if available):
```bash
expo build:android -t apk
```

## If you want me to produce the APK for you
I cannot run Expo/EAS builds from here, but I prepared the project. If you want, I can:
- Provide exact commands to run on your machine or a CI machine.
- Write the email text to send the APK to `hazmsayd999@gmail.com`.
- Help you replace icons, change package name, or add features before building.

## Quick notes
- Replace `assets/icon.png` and `assets/splash.png` with actual images for a professional look.
- If you want push notifications, payment, or order management, I can add screens and backend endpoints next.
