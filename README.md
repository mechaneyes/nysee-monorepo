# NYSee Monorepo


NYSee.nyc has become my home for the latest creative projects I'm working on. 

This is setup via a monorepo so it can host distinct projects, allowing others to have access for collaboration.


<br>

## NYSee

This is currently a simple Next.js app leveraging the App router. After posting several projects it quickly started resembling a blog. After a few weeks of manually building posts, I thought the domain would be better served with a proper blog. That's become the NYSee Lowdown, briefly outlined below.

The top level app is a bit directionless atm. That will change. What I wanted is to have a site that I can customize very intentionally. While I'm definitely not looking to build a marketing type site, I'd like to customize it in various ways at various times. So a blog it isn't. That's where the Lowdown comes in.


## NYSee Lowdown

One of the apps within this monorepo is this first blog for NYSee. That's right ... at the moment there's one, there will be more for projects already in development.

The WordPress blogs are setup using [Cloudways](https://unified.cloudways.com/) which should take some of the hassle out of doing any of the sysadmin work I was more open to handling in the past. I'm trading a few 💸 in an attempt to hold onto what hair I've got left.


## NYSee Radar

On deck, is the NYSee Radar. This app (WordPress based) is focused on NYC galleries and museums. More on that later.



<br>

## Wait. What did i just do?!!

I don't think I've properly implemented Vercel's Turborepo. In fact, I don't know that I need it here at all. But in leaving myself breadcrumbs, here are the details on Vercel's Next.js [Turborepo starter](https://github.com/vercel/turbo/tree/main/examples/with-yarn). And another breadcrumb, [Deploying Turborepo to Vercel](https://vercel.com/docs/monorepos/turborepo).


### Multi-Zone Next.js Applications

What's' actually in play is the [Multi-Zone Next.js Applications](https://github.com/vercel/next.js/tree/canary/examples/with-zones) example.

I've currently got the single repo, but am using the multi-zone pattern to nest data/content from one app within another. Well, it's just a bunch of redirection slight of hand sending electrons in different directions.

#### Waaat??

The root address is: https://nysee.nyc/

That is a simple Next.js app that has a couple pages setup with the App router.

Within that, or at least revealed by a specific path, is a headless WordPress app's UI living at https://nysee.nyc/optic

Fancy.

The bubblegum holding the whole thing together happens within the `next.config.js` and `vercel.json` files within each app. Again, both apps live in a single repo, but it's not clear that's even necessary here. 🤔

The key ingredient allowing the the thing to stand up is the alignment of the 4 files spread between the 2 apps.

All of the Turborepo noise is still there atm, but if you want to take a peek at the setup it's here: [mechaneyes / nysee-monorepo](https://github.com/mechaneyes/nysee-monorepo)

If you'd like to experiment with something similar, to spare yourself the rat's nest, just go straight to the official example: https://github.com/vercel/next.js/tree/canary/examples/with-zones


<br>

# Mechaneyes Notes

## favicon-cheat-sheet

https://github.com/audreyfeldroy/favicon-cheat-sheet?tab=readme-ov-file

>A painfully obsessive cheat sheet to favicon sizes/types.
>
>For the main favicon itself, it's best for cross-browser compatibility not to use any HTML. Just name the file favicon.ico and place it in the root of your domain.