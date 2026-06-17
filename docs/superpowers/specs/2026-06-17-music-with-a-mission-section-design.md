# Music with a Mission — Homepage Section

**Date:** 2026-06-17
**Status:** Approved (design)

## Purpose

Add a designed homepage section that states the festival's reason for existing: it
is a charity event whose proceeds go to the **Community Humane Shelter of Steuben
County**. Tagline: "Music with a Mission." The section pairs the shelter's brand
with a video about the shelter and a path to donate.

## Placement

Inserted into `app/page.tsx` immediately after `<HeroSection />`, making it the first
section visitors meet after the hero. Resulting order:

1. HeroSection
2. **MissionSection** (new)
3. VideoSection (2025 recap)
4. SponsorsSection
5. LineupPreview
6. VenuePreview
7. NewsletterSignup

## Layout — centered stack

Single centered column (matches existing `VideoSection` / `SponsorsSection` rhythm):

1. Community Humane Shelter logo (transparent version)
2. Tagline: "Music with a Mission" (display font)
3. Mission paragraph
4. Video (16:9, rounded frame)
5. "Donate to the shelter" button → `/donate`

All content wrapped in `ScrollReveal` (`fadeUp`) for the site-standard entrance.

## Visual design

- **Background:** brand sunset yellow `#e2df20` (`bg-sunset`), full-bleed section.
- **Text:** navy `lake-950` `#0b1e2f` (`text-lake-950`). White fails WCAG AA on this
  yellow; navy passes comfortably and echoes the logo's navy.
- **Logo:** `public/images/sponsors/CommunityHumaneShelterLogo.png` — the transparent
  (navy + red) version. Chosen over `public/images/HumaneShelterLogo.png` because that
  file has a baked-in yellow background sampled at `~#E0D72E`, which does not match the
  section's `#e2df20` and would show a visible rectangular seam. The transparent logo
  floats cleanly.
- **CTA:** brand pink gradient button (`from-pink to-pink-light`) for complementary
  contrast against the yellow — reuses the pattern from `app/donate/page.tsx`.

## Video

- Cloudflare Stream, video ID `a5be567ba670d8e102cf9b507a4ad936`.
- Embed via iframe: `https://customer-w6h9o08eg118alny.cloudflarestream.com/a5be567ba670d8e102cf9b507a4ad936/iframe`
- Same pattern, attributes, and rounded `aspect-video` framing as the existing
  `VideoSection`.

## Mission copy (draft)

> ### Music with a Mission
> Every boat on the sandbar and every dollar raised goes to the Community Humane
> Shelter of Steuben County — giving homeless dogs and cats food, care, and a second
> chance at a forever home.

## Components / files

- **New:** `components/home/MissionSection.tsx` — server component (renders the
  client `ScrollReveal` and `Button`, exactly like `VideoSection`). Uses `assetPath()`
  for the logo `src` so the GitHub Pages base path is respected.
- **Edit:** `app/page.tsx` — import and render `<MissionSection />` after `<HeroSection />`.

## Out of scope (YAGNI)

- No data-file/constants extraction; copy and IDs live in the component (consistent with
  `VideoSection`, which hardcodes its own video ID and headings).
- No autoplay; the viewer presses play, identical to the recap video.
- The yellow-background logo file (`HumaneShelterLogo.png`) is not used.

## Accessibility

- Navy-on-yellow body text meets WCAG AA.
- Logo `<img>` gets descriptive `alt="Community Humane Shelter of Steuben County"`.
- Video iframe carries a `title` for screen readers.
