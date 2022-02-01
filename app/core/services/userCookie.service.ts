import cookies from "js-cookie";

const getUserFromCookie = () => {
  const cookie = cookies.get("auth");
  if (!cookie) {
    return;
  }
  return JSON.parse(cookie);
};

const setUserCookie = (user) => {
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
