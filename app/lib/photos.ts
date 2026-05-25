/**
 * CFTN US — Photo Manifest
 *
 * Central registry for all photography used across the site.
 * Edit src, alt, suggestedUse, and mood as photos are refined or swapped.
 *
 * Usage:
 *   import { heroPhotos, bwPhotos } from "@/app/lib/photos";
 *   const photo = heroPhotos[0];
 */

export type Photo = {
  /** Public path — relative to /public, starts with "/" */
  src: string;
  /** Accessible description of the image */
  alt: string;
  category: "hero" | "worship" | "community" | "bw";
  /** Guidance on where this photo works best on the site */
  suggestedUse: string;
  /** Emotional quality — informs art direction decisions */
  mood: string;
};

// ─────────────────────────────────────────────────
// HERO — strongest cinematic worship-room images
// ─────────────────────────────────────────────────

export const heroPhotos: Photo[] = [
  {
    src: "/images/hero/hero-01-wide_angle_worship_circle.jpg",
    alt: "Wide-angle worship circle gathered together",
    category: "hero",
    suggestedUse: "Primary hero background — strongest cinematic opener",
    mood: "cinematic, atmospheric, monumental",
  },
  {
    src: "/images/hero/hero-02-worship_circle.jpg",
    alt: "Intimate worship circle gathered together",
    category: "hero",
    suggestedUse: "Secondary hero or about section background",
    mood: "sacred, intimate, warm",
  },
  {
    src: "/images/hero/hero-03-worship_circle2.JPEG",
    alt: "Worship circle gathered in prayer and worship",
    category: "hero",
    suggestedUse: "Alternate hero or community section feature",
    mood: "sacred, communal, tender",
  },
];

// ─────────────────────────────────────────────────
// WORSHIP — worship and prayer moments
// ─────────────────────────────────────────────────

export const worshipPhotos: Photo[] = [
  {
    src: "/images/worship/worship-01-girl_singing.JPEG",
    alt: "Woman singing in worship",
    category: "worship",
    suggestedUse: "Worship moments grid — intimate featured shot",
    mood: "devoted, intimate, surrendered",
  },
  {
    src: "/images/worship/worship-02-guy_singing_holding_guitar.JPEG",
    alt: "Man singing and holding guitar during worship",
    category: "worship",
    suggestedUse: "Worship moments grid or about section",
    mood: "authentic, musical, heartfelt",
  },
  {
    src: "/images/worship/worship-03-bright_light_middle_of_worship.JPEG",
    alt: "Bright light flooding through during a worship moment",
    category: "worship",
    suggestedUse: "Primary large image in worship moments — transcendent light",
    mood: "transcendent, glowing, cinematic",
  },
  {
    src: "/images/worship/worship-04-guy_playing_electric_guitar.JPEG",
    alt: "Man playing electric guitar in worship",
    category: "worship",
    suggestedUse: "Worship moments grid — musical detail",
    mood: "powerful, electric, present",
  },
  {
    src: "/images/worship/worship-05-wide_angle_one_guy_worshiping_behind_worship_circle.JPG",
    alt: "Wide angle — solitary worshiper standing behind a worship circle",
    category: "worship",
    suggestedUse: "Media section thumbnail or presence section — cinematic wide",
    mood: "cinematic, contemplative, documentary",
  },
  {
    src: "/images/worship/worship-06-guy_playing_acoustic_guitar.JPEG",
    alt: "Man playing acoustic guitar in worship",
    category: "worship",
    suggestedUse: "Worship grid — organic musical moment",
    mood: "organic, intimate, acoustic",
  },
  {
    src: "/images/worship/worship-07-girl_playing_keyboard.JPEG",
    alt: "Woman playing keyboard during worship",
    category: "worship",
    suggestedUse: "Worship grid, about section, or media thumbnail",
    mood: "devotional, focused, musical",
  },
];

// ─────────────────────────────────────────────────
// COMMUNITY — relational and group photos
// ─────────────────────────────────────────────────

export const communityPhotos: Photo[] = [
  {
    src: "/images/community/community-01.jpg",
    alt: "Community gathering moment",
    category: "community",
    suggestedUse: "Worship moments grid — relational counterpoint",
    mood: "relational, warm, authentic",
  },
  {
    src: "/images/community/community-02.JPEG",
    alt: "People gathered in community",
    category: "community",
    suggestedUse: "Community section or worship grid",
    mood: "connected, organic, human",
  },
  {
    src: "/images/community/community-03.JPEG",
    alt: "Community moment between believers",
    category: "community",
    suggestedUse: "Community section or worship grid",
    mood: "tender, relational, present",
  },
  {
    src: "/images/community/community-03.jpg",
    alt: "Community gathering — candid moment",
    category: "community",
    suggestedUse: "Secondary community image",
    mood: "warm, communal, honest",
  },
  {
    src: "/images/community/community-04.jpg",
    alt: "Community connection at a gathering",
    category: "community",
    suggestedUse: "Community section",
    mood: "organic, real, together",
  },
  {
    src: "/images/community/community-05.jpg",
    alt: "Believers connecting after a gathering",
    category: "community",
    suggestedUse: "Community section or worship grid",
    mood: "intimate, relational, genuine",
  },
  {
    src: "/images/community/community-06.JPG",
    alt: "Community gathering, candid",
    category: "community",
    suggestedUse: "Community section",
    mood: "communal, present, together",
  },
];

// ─────────────────────────────────────────────────
// BW — black-and-white documentary photography
// ─────────────────────────────────────────────────

export const bwPhotos: Photo[] = [
  {
    src: "/images/bw/bw-01-keyboard_with_hand.JPEG",
    alt: "Hands resting on a keyboard — black and white",
    category: "bw",
    suggestedUse: "Editorial detail, worship moments grid",
    mood: "documentary, focused, musical",
  },
  {
    src: "/images/bw/bw-02-girl_singing_closed_eyes.JPEG",
    alt: "Woman singing with eyes closed — black and white",
    category: "bw",
    suggestedUse: "Presence section — most contemplative single image",
    mood: "intimate, contemplative, devotional",
  },
  {
    src: "/images/bw/bw-03-far_angle_worshiping.JPEG",
    alt: "Far-angle view of a worship gathering — black and white",
    category: "bw",
    suggestedUse: "Worship moments — cinematic full-width documentary",
    mood: "cinematic, atmospheric, collective",
  },
  {
    src: "/images/bw/bw-04-guy_playing_electric_guitar.JPEG",
    alt: "Man playing electric guitar — black and white",
    category: "bw",
    suggestedUse: "Worship grid — raw musical documentary",
    mood: "raw, powerful, documentary",
  },
  {
    src: "/images/bw/bw-05-girl_singing_closed_eyes2.JPEG",
    alt: "Woman singing with eyes closed, variant — black and white",
    category: "bw",
    suggestedUse: "Worship grid or presence section alternate",
    mood: "tender, surrendered, devotional",
  },
  {
    src: "/images/bw/bw-06-wide_angle_group_photo_leadership.jpg",
    alt: "Wide-angle group photo of worship leadership — black and white",
    category: "bw",
    suggestedUse: "Media section thumbnail or about section",
    mood: "communal, historic, documentary",
  },
];
