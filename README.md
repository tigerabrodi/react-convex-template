# React Convex Template

I did this one for myself.

- React
- Convex
- Convex Auth
- Vercel
- Tailwind
- Shadcn

Has some nice prettier + eslint rules that I like. I just push to the main branch btw.

I also use the same Auth logic + UI as base for all my side projects hehe + just deploy to Vercel.

Generally, I like using most of what Vercel has to offer, it's usually enough for me, I sometimes reach for other tools if necessary but considering Convex as a whole backend platform, I usually need very little from external services lol

# What can you build with this?

You can build anything almost, including multiplayer games.

# How to get started + deploy

How I do it after fork/clone + `pnpm install`:

1. `npx convex dev` (you need to be logged into convex in your browser)
2. Push to a repo
3. Deploy to Vercel + read [deploy to vercel](https://docs.convex.dev/production/hosting/vercel#deploying-to-vercel)
   1. Generate deploy key in Convex.
   2. Create new vercel project.
   3. Override build command with `npx convex deploy --cmd 'npm run build'`.
   4. Setup CONVEX_DEPLOY_KEY environment variable with the deploy key you generated in Convex.
   5. Deploy.
4. `npx @convex-dev/auth`
5. Run locally and make sure auth works for dev.
6. `npx @convex-dev/auth --prod`

# Convetions I enjoy

`handlePromise` for dealing with promises over try/catch.

---

I import convex stuff from `@/convex/...`

---

You can see my lint config + prettier of what I prefer I guess, generally a fan of clean and simple code.

---

`InputWithFeedback` component for inputs with error + helper text.

# Tailor to your product

- index.css file for the theme -> just ask ai to do it for you i guess
- index.html file for all meta tags
- package.json name license, etc.
- See login form `src/pages/login/index.tsx` + add your name.
