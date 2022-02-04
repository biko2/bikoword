import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "~/core/infrastructure/firebase";
import { loginService } from "~/core/services/login.service";
import { userCookieService } from "~/core/services/userCookie.service";
import { userDataMapper } from "~/core/utils/userData.mapper";

export const useUser = () => {
  const [user, setUser] = useState<Object>();

  useEffect(() => {
    const cancelAuthListener = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = userDataMapper.mapData(user);
        userCookieService.setUserCookie(userData);
        return setUser(userData);
      }

      userCookieService.removeUserCookie();
      setUser(undefined);
    });

    const userFromCookie = userCookieService.getUserFromCookie();

    if (!!userFromCookie) {
      setUser(userFromCookie);
    }

    return () => {
      cancelAuthListener();
    };
  }, []);

  const logout = () => {
    loginService.singOutApp();
    setUser(undefined);
  };

  return { user, logout };
};
