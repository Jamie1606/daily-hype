const url = {
  HOME: "/",
  SIGNIN: "/sign-in",
  SIGNUP: "/sign-up",
  ABOUTUS: "/about",
  HELP: "/help",
  CONTACT: "/contact",
  DASHBOARD: "/dashboard",
} as const;

export default url;
export type URLType = (typeof url)[keyof typeof url];
