import { app } from "../infrastructure/firebase";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { User } from "./userCookie.service";

const getPersonalScore = async (user: User): Promise<number> => {
  const databaseRef = ref(getDatabase(app));

  const snapshot = await get(child(databaseRef, `ranking/${user.id}`));

  const userScore = snapshot.val();

  return userScore?.score ?? 0;
};

const setPersonalScore = async (user: User, points: number) => {
  const databaseRef = ref(getDatabase(app));

  const previousScore = await getPersonalScore(user);

  await set(child(databaseRef, `ranking/${user?.id}`), {
    id: user.googleId,
    email: user.email,
    name: user.displayName,
    photo: user.displayPhoto,
    score: previousScore + points,
  });
};

const getRanking = async () => {
  const databaseRef = ref(getDatabase(app));

  const snapshot = await get(child(databaseRef, "ranking"));

  const rankingData = snapshot.val();

  const rankingEntries = Object.keys(rankingData);

  const rankingCollection = rankingEntries.map(
    (rankingEntry) => rankingData[rankingEntry]
  );

  return rankingCollection.sort((scoreA, scoreB) =>
    scoreA.score > scoreB.score ? -1 : 1
  );
};

export const rankingService = {
  getPersonalScore,
  setPersonalScore,
  getRanking,
};
