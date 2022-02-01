const mapData = (user) => {
  const { uid, email, refreshToken, providerData, displayName } = user;

  let displayPhoto;
  let googleId;

  providerData.map(({ photoURL, uid }) => {
    displayPhoto = photoURL;
    googleId = uid;
  });

  return {
    id: uid,
    email,
    token: refreshToken,
    displayPhoto,
    googleId,
    displayName,
  };
};

export const userDataMapper = {
  mapData,
};
