import { app } from "../infrastructure/firebase";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { User } from "./userCookie.service";

const getPersonalScore = async (user: User): Promise<number> => {
  const databaseRef = ref(getDatabase(app));

  const snapshot = await get(child(databaseRef, `ranking/${user.id}`));

  const userScore = snapshot.val();

  return userScore?.score ?? 0;
};

const getProcessedName = (name: string): string => {
  const splitedName = name.split(" ");
  const usefulSplits = splitedName.slice(0, 2);

  if (!usefulSplits[1]) {
    return usefulSplits[0];
  }

  usefulSplits[1] = usefulSplits[1].charAt(0);

  const processedName = usefulSplits.join(" ");

  return processedName;
};

const setPersonalScore = async (user: User, points: number) => {
  const databaseRef = ref(getDatabase(app));

  const previousScore = await getPersonalScore(user);

  const nameToShow = getProcessedName(user.displayName);

  await set(child(databaseRef, `ranking/${user?.id}`), {
    id: user.googleId,
    email: user.email,
    name: nameToShow,
    photo: user.displayPhoto,
    score: previousScore + points,
  });
};

const getRanking = async () => {
  const databaseRef = ref(getDatabase(app));

  const snapshot = await get(child(databaseRef, "ranking"));

  const rankingData = snapshot.val();

  if (!rankingData) return [];

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
