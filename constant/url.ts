const url = {
  HOME: "/",
  SIGNIN: "/sign-in",
  SIGNUP: "/sign-up",
  ABOUTUS: "/about",
  HELP: "/help",
  CONTACT: "/contact",
  DASHBOARD: "/dashboard",
  EXPLORE: "/explore",
  COLORFORM: "/form/colour",
  USERFORM: "/form/user",
  PRODUCTFORM: "/form/product",
} as const;

export default url;
export type URLType = (typeof url)[keyof typeof url];
