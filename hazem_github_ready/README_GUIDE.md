# GitHub-ready project for Hazem Cafe App

This repository is prepared to automatically build an Android APK using Expo EAS on GitHub Actions.

## What to do next

1. Create a new repository on GitHub (private or public), e.g. `hazem-cafe-app`.
2. Upload (push) all files from this project to the `main` branch.
3. Create an Expo token:
   - On your machine: `npm install -g eas-cli`
   - `eas login`
   - `eas token:create` and copy the token value.

4. In your GitHub repo, go to:
   Settings → Secrets and variables → Actions → New repository secret
   - Name: `EXPO_TOKEN`
   - Value: *paste the token you created*

5. Also set a repo secret `EAS_PROJECT_ID` (optional but recommended) with your Expo project ID:
   - You can find it in your `app.json` under `expo.slug` and your expo account; or leave empty.

6. Commit & push to `main` or trigger the workflow manually from the Actions tab (there's a "Run workflow" button).

7. After workflow runs:
   - Open Actions → Build APK with EAS → the latest run → Artifacts → download `hazem-android-apk`.
   - Inside you'll find `android_app.apk`.

## Notes & troubleshooting

- The workflow uses your `EXPO_TOKEN` to authenticate with Expo.
- EAS may ask for keystore handling; follow prompts in the build logs.
- If the workflow fails, paste the error logs here and I will help debug.

Good luck — if you want, I can also create the GitHub repo for you (I can't push to your account, but I can prepare everything).
