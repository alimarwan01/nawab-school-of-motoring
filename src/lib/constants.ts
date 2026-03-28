/**
 * Single source of truth for all business information.
 * Update here and it changes everywhere on the site.
 */

export const business = {
  name: "Nawab School of Motoring",
  phone: {
    raw: "07977589345",
    display: "07977 589 345",
    href: "tel:07977589345",
    international: "+447977589345",
  },
  address: {
    street: "201 Sandhills Avenue, Hamilton",
    city: "Leicester",
    postcode: "LE5 1QL",
    full: "201 Sandhills Avenue, Hamilton, Leicester LE5 1QL",
  },
  geo: { lat: 52.6569, lng: -1.0728 },
  website: "https://nawabmotoring.co.uk",
  social: {
    facebook: "https://facebook.com/NawabMotoring",
    twitter: "https://twitter.com/NawabMotoring",
    google: "https://www.google.com/maps/place/Nawab+School+Of+Motoring/@52.6569,-1.0728,17z/data=!4m8!3m7!1s0x4877613682d1a7e9:0x7a2e5be5cc0c8e0!8m2!3d52.6569!4d-1.0728!9m1!1b1!16s%2Fg%2F11c5r7_9zz",
    freeindex: "https://www.freeindex.co.uk/profile(nawab-school-of-motoring)_536371.htm",
  },
  reviews: {
    google: { rating: 5.0, count: 199 },
    freeindex: { rating: 5.0, count: 457 },
  },
  credentials: ["DVSA Approved", "Pass Plus Certified"],
} as const;

/**
 * Animation constants used across the site.
 * Keeps all timing/easing values consistent and documented.
 */
export const animation = {
  /** How far elements slide in from off-screen (px) */
  slideDistance: 32,
  /** IntersectionObserver triggers when 15% of element is visible */
  intersectionThreshold: 0.15,
  /** CountUp triggers when 50% visible (needs more context to read) */
  countUpThreshold: 0.5,
  /** Smooth deceleration curve — fast start, gentle stop */
  easing: "cubic-bezier(0.16, 1, 0.3, 1)",
  /** Default duration for scroll-triggered animations (ms) */
  defaultDuration: 600,
  /** Stagger delay between sequential items (ms) */
  staggerDelay: 80,
} as const;
