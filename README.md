# NYSee

![No Ordinary Dancer](https://nysee.nyc/lowdown/_next/image?url=https://wordpress-1313045-4791931.cloudwaysapps.com/wp-content/uploads/2024/08/no-ordinary-dancer-1.0.0-1920px72dpi50q.jpg&w=1920&q=75)

NYSee.nyc has become a playground for creative projects I'm exploring.

This is setup via a monorepo so it can host distinct projects, allowing others to have as-needed access for collaboration.

<br>

# Under the Umbrella

## NYSee

This is a basic Next.js app. After several projects went up, it quickly started resembling a blog. And after a few weeks of manually building posts, I thought the domain would be better served with a proper blog. That's become the NYSee Lowdown.

The top level app is constantly in flux. It's something I can customize intentionally. Here today ....

## NYSee Lowdown

Within the nysee monorepo is this first wp blog, the NYSee Lowdown.

The WordPress blogs are setup using [Cloudways](https://unified.cloudways.com/) which takes some of the hassle out of doing any of the sysadmin work I was more open to handling in the past. I'm all for finicky, but choosing my battles.

## NYSee Radar

NYSee Radar is another WordPress-based app focused on NYC galleries and museums.

## [More Details on both here](https://nysee.nyc/lowdown/about)

<br>

## Multi-Zone Next.js Applications

I've currently got the single repo, but am using the multi-zone pattern to nest data/content from one app within another. Behind the scenes there's a lot of redirection slight of hand sending electrons in different directions.

I leveraged the [Multi-Zone Next.js Applications](https://github.com/vercel/next.js/tree/canary/examples/with-zones) Vercel example.

### Waaat??

The root address is: https://nysee.nyc/. It's a simple Next.js app with a couple pages within.

Inside it, or at least revealed by a specific path, is a Next.js headless WordPress app's UI living at https://nysee.nyc/lowdown. Then another at https://nysee.nyc/radar.

Fancy.

The bubblegum holding the whole thing together happens within the `next.config.js` and `vercel.json` files each holds. The three apps live in that monorepo.

If you'd like to experiment with something similar: <br>
https://github.com/vercel/next.js/tree/canary/examples/with-zones

<br><br>




# Soundtrack

###  Karnak On Acid @ The Lot Radio 12-13-2024 
https://soundcloud.com/thelotradio/karnak-on-acid-the-lot-radio-12-13-2024


### Ben Sims Presents: Run It Red · 24.03.24
https://www.nts.live/shows/ben-sims/episodes/ben-sims-24th-march-2024


### DISCWOMAN 40 x Octo Octa (Polyglamorous Year 3)
https://soundcloud.com/discwoman/discwoman-40-x-octo-octa-polyglamorous-year-3





<br><br>

# Notes to self

#### Saturday, 07 Sep 2024 16.13.56 PM EDT

## ART_GALLERY

Location of New York City Art Galleries

https://data.cityofnewyork.us/Recreation/ART_GALLERY/43hw-uvdj/about_data

<br><br>

## React Syntax Highlighter

#### Friday, 06 Sep 2024 11.06.23 AM EDT

https://github.com/react-syntax-highlighter/react-syntax-highlighter

```js
import { promises as fs } from "fs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

async function getCodeString(theFile) {
  const filePath = path.join(process.cwd(), theFile);
  return await fs.readFile(filePath, "utf8");
}

const imageFater = await getCodeString(
  "app/(galleries)/riso-motion/image-fader.js"
);
const p5sketch = await getCodeString("app/(galleries)/riso-motion/p5sketch.js");

<SyntaxHighlighter language="javascript" style={dracula}>
  {imageFater}
</SyntaxHighlighter>;
```

<br><br>

## Radar Antenna Video v Background Image

You can see the effect at https://nysee.nyc/radar

### Radar Antenna Video w Alpha

In order to achieve the spinning radar antenna video, I wanted to export the video from Premiere with the alpha transparency. Thank you, Claude, for the assist.

#### Via Claude:

To export a file from Premiere Pro that's suitable for web use with transparency, you'll want to use a format that supports alpha channels. Here's a recommended approach:

Export as QuickTime/MOV with the ProRes 4444 codec:

- Go to File > Export > Media
- In the Export Settings dialog, choose "QuickTime" as the Format
- Under Video Codec, select "Apple ProRes 4444"
- Ensure "Render at Maximum Depth" and "Use Maximum Render Quality" are checked
- In the Video tab, make sure "Composite in Linear Color" is checked
- Set your desired resolution and frame rate

This will give you a high-quality .mov file with preserved alpha channel, which you can then convert to WebM using the FFmpeg command I provided earlier.

Why this method:

1. ProRes 4444 preserves the alpha channel and maintains high quality.
2. It's widely supported and works well as an intermediate format.
3. It avoids compression artifacts that might affect the alpha channel.

After exporting from Premiere Pro, you can use the FFmpeg command to convert the .mov to .webm for web use:

```bash
ffmpeg -i your_exported_file.mov -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus -pix_fmt yuva420p output.webm
```

For iOS, to reduce the file size I again used FFmpeg to create a more compressed version while still preserving the alpha channel:

```bash
ffmpeg -i radarAlpha4.mov -c:v hevc -tag:v hvc1 -crf 23 -preset medium -pix_fmt yuva420p -movflags faststart radarAlpha4a.mov
```

This two-step process (Premiere Pro export to ProRes, then FFmpeg conversion to WebM) helps ensure you maintain the best possible quality and alpha channel integrity for your web video.

### Background Image

![Juili](./apps/🏂home/public/images/radar-juli-kosolapova_2880px.jpg)

Photo by [Juli Kosolapova](https://unsplash.com/@yuli_superson?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/mountains-under-white-clouds-at-daytime-pZ-XFIrJMtE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)

<br><br>

## favicon-cheat-sheet

https://github.com/audreyfeldroy/favicon-cheat-sheet?tab=readme-ov-file

> A painfully obsessive cheat sheet to favicon sizes/types.
>
> For the main favicon itself, it's best for cross-browser compatibility not to use any HTML. Just name the file favicon.ico and place it in the root of your domain.

<br><br>

## Image Carousel

### Image Carousel via Framer Motion

https://www.freecodecamp.org/news/build-an-image-carousel-with-react-and-framer-motion/

<br><br>

## Radar Gallery Posts

```html
<div class="show">
  <h2>AmandaBa</h2>
  <h3>DevelopingDesire</h3>
  <h3>JeffreyDeitch</h3>
  <p><a href="https">18WoosterStreet</a></p>
  <a href="https"><p>https</p></a>
</div>

<div class="show">
  <h4>September 12, 2024</h4>
  <h2>Christian Marclay</h2>
  <h3>Subtitled</h3>
  <h3>Paula Cooper Gallery</h3>
  <p>
    <a href="https://maps.app.goo.gl/FyugWATot69fuFkj9"
      >534 W 21st St, New York, NY 10011</a
    >
  </p>
  <a href="https://www.paulacoopergallery.com/exhibitions/christian-marclay14"
    ><p>https://www.paulacoopergallery.com/</p></a
  >
</div>
```
