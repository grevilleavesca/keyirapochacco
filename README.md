# KHAYRA

A birthday letter as a small React site. Khayra taps a sealed envelope, the flap opens, and the letter appears.

Built with Vite and React.

## Run it locally

```bash
npm install
npm run dev
```

Open the address Vite prints (usually http://localhost:5173).
Add `#letter` to the address to skip the envelope while you edit.

## Change the letter

All the text is at the top of `src/App.jsx` (`TITLE` and `PARAGRAPHS`).
Colors and fonts are the variables at the top of `src/styles.css`.

## Add your photos

The button under the letter pops out a random photo, and never shows the same one twice in a row. Save your three pictures in the `public` folder as `our-photo-1.jpg`, `our-photo-2.jpg` and `our-photo-3.jpg` (portrait or square photos look best). To use different names, .png files, or more photos, edit the `PHOTOS` list at the top of `src/App.jsx`.

## Framed photos around the letter (template)

Four small framed photos float beside the letter. Each frame is a rectangle (not a heart). To put your own pictures in them, save four photos in the `public` folder named:

- `frame-1.jpg` (top left)
- `frame-2.jpg` (top right)
- `frame-3.jpg` (bottom left)
- `frame-4.jpg` (bottom right)

Portrait photos (3:4) fit best; other shapes are cropped to fill the frame. If a file is missing, that frame shows the default picture (`grevi-face.png`), so nothing looks broken. To use .png files or other names, edit `FRAME_PHOTOS` in `src/App.jsx`. The frame size and look are under `.floating-frame` in `src/styles.css`.

## Add the opening music

Save your audio file in the `public` folder as `letter-song.mp3`. It starts playing when Khayra taps the envelope and loops until she pauses it with the round ♪ button in the bottom right corner. To use another name or format, or to change the volume, edit `AUDIO_FILE` and `AUDIO_VOLUME` at the top of `src/App.jsx`. Set `AUDIO_FILE` to `""` to turn audio off. If the file is missing, the button stays hidden. If you open the page with `#letter`, there is no tap on the envelope, so the music waits for the ♪ button.

## The envelopes and affirmations

Khayra opens a chain of envelopes. Each one holds a card of positive affirmations, and the last envelope opens into the main letter. Everything is in the `LAYERS` list at the top of `src/App.jsx`: add or remove an envelope by adding or removing one `{ label, tone, lines }` block, and reword the `lines` however you like. `tone` picks the envelope color (0 pink, 1 peach, 2 lilac, 3 butter).

The hearts that used to float up when the letter opened are gone. The ones that float up when she taps the photo button remain; set `HEARTS_ON_PHOTO` to `false` in `src/App.jsx` to remove them too.

## Add your Spotify playlist

Open the playlist in Spotify, choose Share, then Copy link to playlist. Paste it between the quotes of `PLAYLIST_URL` at the top of `src/App.jsx`. An "or maybe also click this" link then appears next to the photo button and opens Spotify in a new tab. While it is empty the link stays hidden.

## Put it on GitHub Pages

1. Create a new repository on GitHub and push this folder to the `main` branch.
2. In the repository go to **Settings → Pages**, and under **Build and deployment** set **Source** to **GitHub Actions**.
3. Push again, or open the **Actions** tab and run **Deploy to GitHub Pages**.
4. After the run finishes, the site is at `https://<your-username>.github.io/<repo-name>/`.

The workflow in `.github/workflows/deploy.yml` builds the site and publishes it on every push to `main`.
`vite.config.js` uses a relative base (`./`), so the repository name does not matter.

If the repository is private, GitHub Pages needs a paid GitHub plan. A public repository works on the free plan, but anyone with the link can read the letter.
