# Chord Sketch — portable code

This package contains the working app, its local SoundFont engine, built-in sounds, offline support and all editable HTML, CSS and JavaScript. It is a separate portable copy of the hosted app.

## Save to your iPad

Download Chord-Sketch-GitHub.zip, choose Share → Save to Files, then tap the ZIP in Files to unpack it. Keep the folder as a code backup. Opening index.html directly in Files will not run the full app reliably: audio worklets, module scripts, workers and offline installation need a proper web origin.

## Run on GitHub Pages

1. Create a repository, for example chord-sketch. A public repository works with GitHub Free.
2. Upload the contents of this folder to the repository, keeping docs and scripts at the repository root. Do not upload only the ZIP and do not nest these folders inside another chord-sketch folder.
3. Open repository Settings → Pages.
4. Under Build and deployment, choose Deploy from a branch. Select main and /docs, then Save.
5. Wait for GitHub to show the published Pages address. It will normally look like https://YOUR-USERNAME.github.io/chord-sketch/.
6. Open that address in Safari on the iPad. Add it to the Home Screen, with Open as Web App enabled if shown.
7. Launch the Home Screen icon while online, open Install / offline and tap Prepare for offline use. Wait for Ready offline, then test in Airplane Mode.

The ready-to-publish files are already built. No Node installation or build command is needed for the first upload. The .nojekyll file is included so these files can be served directly.

## Public access and saved work

Ordinary GitHub Pages sites are public. The current ChatGPT sign-in restriction does not transfer to GitHub. Nothing has been uploaded to GitHub automatically.

Songs, imported audio/video and your own loaded SoundFonts are stored on the device and are not included in this package. The new GitHub address has its own browser storage: export important MIDI/WAV files before moving. Re-select your audio files and user SoundFont banks in the new copy.

## Editing and updates

Edit files in docs. After every app change, run this from the repository root on a computer with Node installed:

    node scripts/build-offline.cjs

Commit the changed files and regenerated docs/offline-assets.json, docs/offline-shell.json and docs/service-worker.js. Installed copies display Save & update app when a complete update is available. Updating saves the current sketch before reloading.

The HTML links, manifest, workers and offline cache use relative paths and work under a GitHub project subfolder.

## Licences

Keep all bundled licence and attribution files. SpessaSynth and its Vorbis decoder use Apache 2.0; the bundled SoundFont has its own GeneralUser GS licence. The starter bank is a ten-preset subset adapted from GeneralUser GS 2.0.3 by S. Christian Collins. See docs/soundfonts and docs/vendor/spessasynth.

## References

Apple ZIP instructions: https://support.apple.com/en-gb/102532
GitHub Pages source setup: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
GitHub Pages access: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Smaller GitHub edition

The bundled 9.35 MB SoundFont bank is omitted. Built-in sounds remain available, and you can load your own SoundFont files through Sound & instruments. Offline setup downloads the app without the bundled bank.
