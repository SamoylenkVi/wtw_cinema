export const NAVIGATION_BUTTONS = {
  OVERVIEW: 'overview',
  DETAILS: 'details',
  REVIEWS: 'reviews',
} as const;

type key = keyof typeof NAVIGATION_BUTTONS
export type NavigationButtonsType = typeof NAVIGATION_BUTTONS[key];
