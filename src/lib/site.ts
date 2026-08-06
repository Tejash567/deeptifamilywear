/**
 * Single source of truth for all store information.
 * Update the values here and the whole website stays in sync.
 *
 * NOTE: phone/WhatsApp number below is a placeholder — replace it with the
 * real shop number (digits only, with country code) before publishing.
 */

export const PHONE_DISPLAY = "+91 90000 00000";
export const PHONE_E164 = "+919000000000"; // used by tel: links
export const WHATSAPP_NUMBER = "919000000000"; // used by wa.me links

export const site = {
  name: "Deepti Family Wears",
  tagline: "Style for Every Generation",
  addressLine: "Main Market, Jhabrera",
  addressFull: "Main Market, Jhabrera, Haridwar District, Uttarakhand, India",
  city: "Jhabrera",
  state: "Uttarakhand",
  serviceAreas: [
    "Jhabrera",
    "Roorkee",
    "Bhagwanpur",
    "Manglore",
    "Puhana",
    "Nearby villages",
  ],
  hours: [
    { days: "Monday – Saturday", time: "10:00 AM – 9:00 PM" },
    { days: "Sunday", time: "10:00 AM – 9:00 PM" },
  ],
  rating: 4.4,
  phoneDisplay: PHONE_DISPLAY,
  telHref: `tel:${PHONE_E164}`,
  whatsappHref: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Deepti Family Wears, I would like to enquire about your collection.",
  )}`,
  instagram: "https://www.instagram.com/deepti_family_wear",
  facebook: "https://www.facebook.com/profile.php?id=100024404683281",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Deepti+Family+Wears+Main+Market+Jhabrera+Uttarakhand",
  mapsPlace:
    "https://www.google.com/maps/search/?api=1&query=Main+Market+Jhabrera+Uttarakhand",
  mapsEmbed:
    "https://www.google.com/maps?q=Main%20Market%20Jhabrera%20Uttarakhand&output=embed",
  reviewsLink:
    "https://www.google.com/search?q=Deepti+Family+Wears+Jhabrera+reviews",
} as const;

/** Primary navigation used by the header and footer. */
export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Categories", to: "/categories" },
  { label: "Collection", to: "/collection" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;
