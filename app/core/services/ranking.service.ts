import { app } from "../infrastructure/firebase";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { User } from "./userCookie.service";

interface PersonalScore {
  score: number;
  timestamp: number;
}
const defaultTimestamp = new Date("March 14, 2022").getTime();

const getPersonalScore = async (user: User): Promise<PersonalScore> => {
  const databaseRef = ref(getDatabase(app));

  const snapshot = await get(child(databaseRef, `ranking/${user.id}`));

  const userScore = snapshot.val();

  if (!userScore) {
    return { score: 0, timestamp: defaultTimestamp };
  }

  return { score: userScore?.score, timestamp: userScore?.timestamp };
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

const isDifferentDay = (timestamp: number): boolean => {
  const today = new Date();
  const playDate = new Date(timestamp);

  const todayDay = today.getDate();
  const todayMonth = today.getMonth();

  const playDateDay = playDate.getDate();
  const playDateMonth = playDate.getMonth();

  if (playDateMonth !== todayMonth) {
    return true;
  }

  if (playDateDay !== todayDay) {
    return true;
  }

  return false;
};

const setPersonalScore = async (user: User, points: number) => {
  const databaseRef = ref(getDatabase(app));

  const previousScore = await getPersonalScore(user);

  if (isDifferentDay(previousScore?.timestamp)) {
    const nameToShow = getProcessedName(user.displayName);

    await set(child(databaseRef, `ranking/${user?.id}`), {
      id: user.googleId,
      email: user.email,
      name: nameToShow,
      photo: user.displayPhoto,
      score: previousScore.score + points,
      timestamp: new Date().getTime(),
    });
  }

  return;
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
