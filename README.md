# Prince Travels

A responsive travel-assistance website built with React, TypeScript, and Vite.

## Run locally

```powershell
npm install
npm run dev
```

Create and type-check a production build with:

```powershell
npm run build
```

## Photography

Local travel imagery is sourced from Unsplash and served from `public/images`
so the site does not depend on a third-party image host at runtime:

- [Dubai skyline — Unsplash image](https://images.unsplash.com/photo-1512453979798-5ea266f8880c)
- [Dubai coastline — Unsplash image](https://images.unsplash.com/photo-1518684079-3c830dcef090)
- [Kerala backwaters — Unsplash image](https://images.unsplash.com/photo-1602216056096-3b40cc0c9944)
- [Flight above the clouds — Unsplash image](https://images.unsplash.com/photo-1436491865332-7a61a109cc05)
Images that are illustrative rather than location-specific are used as
decorative travel imagery, not as a claim that they depict a listed destination.

## Branding

The site uses a custom crown-and-wordmark lockup and matching favicon because
no original Prince Travels logo asset is included. Brand colors are defined in
`src/index.css` and mirrored in `src/config/site.ts`.
