# NYSee

![No Ordinary Dancer](https://nysee.nyc/lowdown/_next/image?url=https://wordpress-1313045-4791931.cloudwaysapps.com/wp-content/uploads/2024/08/no-ordinary-dancer-1.0.0-1920px72dpi50q.jpg&w=1920&q=75)

NYSee.nyc has become my home for the latest creative projects I'm working on.

This is setup via a monorepo so it can host distinct projects, allowing others to have access for collaboration.

<br>

# Sites

## NYSee

This is currently a simple Next.js app leveraging the App router. After posting several projects it quickly started resembling a blog. After a few weeks of manually building posts, I thought the domain would be better served with a proper blog. That's become the NYSee Lowdown, briefly outlined below.

The top level app is a bit directionless atm. That will change. What I wanted is to have a site that I can customize very intentionally. While I'm definitely not looking to build a marketing type site, I'd like to customize it in various ways at various times. So a blog it isn't. That's where the Lowdown comes in.

## NYSee Lowdown

One of the apps within this monorepo is this first blog for NYSee. That's right ... at the moment there's one, there will be more for projects already in development.

The WordPress blogs are setup using [Cloudways](https://unified.cloudways.com/) which should take some of the hassle out of doing any of the sysadmin work I was more open to handling in the past. I'm trading a few 💸 in an attempt to hold onto what hair I've got left.

## NYSee Radar

NYSee Radar is another WordPress-based app focused on NYC galleries and museums.

## [More Details on both here](https://nysee.nyc/lowdown/about)

<br>

## Wait. What did i just do?!!

I don't think I've properly implemented Vercel's Turborepo. In fact, I don't know that I need it here at all. But in leaving myself breadcrumbs, here are the details on Vercel's Next.js [Turborepo starter](https://github.com/vercel/turbo/tree/main/examples/with-yarn). And another breadcrumb, [Deploying Turborepo to Vercel](https://vercel.com/docs/monorepos/turborepo).

### Multi-Zone Next.js Applications

What's' actually in play is the [Multi-Zone Next.js Applications](https://github.com/vercel/next.js/tree/canary/examples/with-zones) example.

I've currently got the single repo, but am using the multi-zone pattern to nest data/content from one app within another. Well, it's just a bunch of redirection slight of hand sending electrons in different directions.

#### Waaat??

The root address is: https://nysee.nyc/

That is a simple Next.js app that has a couple pages setup with the App router.

Within that, or at least revealed by a specific path, is a headless WordPress app's UI living at https://nysee.nyc/lowdown

Fancy.

The bubblegum holding the whole thing together happens within the `next.config.js` and `vercel.json` files within each app. Again, both apps live in a single repo, but it's not clear that's even necessary here. 🤔

The key ingredient allowing the the thing to stand up is the alignment of the 4 files spread between the 2 apps.

All of the Turborepo noise is still there atm, but if you want to take a peek at the setup it's here: [mechaneyes / nysee-monorepo](https://github.com/mechaneyes/nysee-monorepo)

If you'd like to experiment with something similar, to spare yourself the rat's nest, just go straight to the official example: https://github.com/vercel/next.js/tree/canary/examples/with-zones

<br><br>

# Mechaneyes Notes

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

## Radar Gallery Posts

```html
<div class="show">
  <h2>Amanda Ba</h2>
  <h3>Developing Desire</h3>
  <h3>Jeffrey Deitch</h3>
  <p>18 Wooster Street</p>
  <a href="https://deitch"><p>https://deitch</p></a>
</div>
```
