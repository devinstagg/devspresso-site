# Devspresso ☕ - DJ Mix Website

A clean, modern website for showcasing DJ mixes hosted on SoundCloud and YouTube.

## Built With
- Astro
- Tailwind CSS
- Netlify (hosting)

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Adding a New Mix

1. Create a new `.md` file in `src/content/mixes/` (e.g., `summer-vibes.md`)
2. Use this template:

```markdown
---
title: "Your Mix Title"
date: 2025-12-03
description: "Brief description"
coverImage: "/images/your-cover.jpg"
platform: "soundcloud"  # or "youtube"
embedUrl: "YOUR_EMBED_URL"
genre: "House"
duration: "45 min"
---

Your mix description in markdown...
```

### Getting Embed URLs

**SoundCloud:**
1. Go to your track → Share → Embed
2. Copy the `src` URL from the iframe
3. Format: `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/TRACK_ID...`

**YouTube:**
1. Go to your video → Share → Embed
2. Copy the `src` URL
3. Format: `https://www.youtube.com/embed/VIDEO_ID`

## Deploy to Netlify

1. Push code to GitHub
2. Connect repo to Netlify
3. Netlify auto-detects settings from `netlify.toml`
4. Deploy!

## Project Structure

```
├── public/
│   └── images/          # Mix cover images
├── src/
│   ├── content/
│   │   └── mixes/       # Mix markdown files
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro
│       ├── archive.astro
│       └── mixes/[slug].astro
└── netlify.toml
```
