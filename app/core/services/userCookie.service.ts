import cookies from "js-cookie";

export interface User {
  id: string;
  email: string;
  displayName: string;
  displayPhoto: string;
  googleId: string;
  token: string;
}

const getUserFromCookie = (): User | undefined => {
  const cookie = cookies.get("auth");
  if (!cookie) {
    return;
  }
  return JSON.parse(cookie);
};

const setUserCookie = (user: User) => {
  cookies.set("auth", JSON.stringify(user), {
    // firebase id tokens expire in one hour
    // set cookie expiry to match
    expires: 1 / 24,
  });
};

const removeUserCookie = () => cookies.remove("auth");

export const userCookieService = {
  getUserFromCookie,
  setUserCookie,
  removeUserCookie,
};
