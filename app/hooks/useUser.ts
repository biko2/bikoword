import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "~/core/infrastructure/firebase";
import { loginService } from "~/core/services/login.service";
import { userCookieService } from "~/core/services/userCookie.service";
import { userDataMapper } from "~/core/utils/userData.mapper";
import { wordsService } from "~/core/services/words.service";

export const useUser = () => {
  const [user, setUser] = useState<Object>();

  useEffect(() => {
    const cancelAuthListener = onAuthStateChanged(auth, async (user) => {
      console.log("auth: ", auth);
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

  const login = async () => {
    const logedUser = await loginService.signInApp();
    setUser(logedUser);
  };

  const logout = () => {
    loginService.singOutApp();
    setUser(undefined);
  };

  return { user, login, logout };
};
