# Icon Voter
### Live website: https://next-crud-gloyens.vercel.app

## What is this project?
I make icon packs over at [rhosgfx.itch.io](https://rhosgfx.itch.io), and this website exists to allow people to vote on which icons they'd like to see next. Users can filter based on whether the icon is done, not done or in progress.

[TODO: ADD VIDEO HERE]

Unfortunately it's just a proof of concept for now, as I'm using Vercel KV, which limits hobby plans to 3000 requests per day. Even while testing it's quite easy to hit the limit!

## Aim
My goal for this website was to explore a few of Vercel's new (at time of writing) features, **[Server Actions](https://nextjs.org/blog/next-13-4#server-actions-alpha)** and **[Vercel KV](https://vercel.com/blog/vercel-storage)**, which works like **[Redis](https://redis.io/)** but is a bit more streamlined for the Vercel ecosystem. I've been working with Next 13 and deploying on Vercel quite a lot recently, and it's a great developer experience, so it was pretty exciting to see them come out with new backend technologies that would make that side of development a bit easier.

However, the mix of server-side and client-side rendering made developing this app quite a frustrating experience. Using KV as a database made server-side rendering necessary, but that meant that a couple of features that would have been simple with React's `useState` and `useEffect` hooks were a lot more difficult to implement than they should have been (e.g. adding filters, or adding a cooldown period on the vote button). Normally I'd use Phantom's **[useLocalState](https://www.npmjs.com/package/@phntms/use-local-state)** to sidestep this issue, but the package wasn't compatible with Next's experimental server actions.

Eventually I was able to achieve everything I wanted to using a weird mix of client components, server actions and cookies, but the big takeaway for me here was that sometimes Next just isn't the right tool for the job. 

In a similar vein, Vercel's KV only allows for 3000 requests per day, which I was able to hit fairly easily while developing and testing. It's convenient, but much more expensive than Redis, so I'll probably just use that going forward.

## How it works

[TODO]

```
This website uses Next 13 with Typescript and the /app router, hosted on Vercel. 
A markdown file holds the content for each album, as well as all the data necessary to complete the page; specifically:
- 📛 **Title**
- 0️⃣ **Index** (ordered by release date)
- 🎵 **BandcampCode** - link to the album on Bandcamp
- 👉 **NextAlbums** - whichever albums the user should be directed to next

This is all accessed through Frontmatter, and makes it extremely easy to change the various paths of the flowchart.

Pages are built from traditional React components as well as with **[CSS Components](https://www.css-components.net/)**.
```

## Future Plans
Besides the issues below, there's a few things I want to do:
- [ ] Redesign the site's CSS so it looks a bit nicer
- [ ] Add functionality to allow users to request icons to be added to the list, to be approved or rejected later in the admin panel
- [ ] Consider adding a DDOS protection service like Cloudflare

### Known Issues
- Admin panel authentication not particularly secure; not a huge issue right now, but might be if I decide to launch it as a real app.
