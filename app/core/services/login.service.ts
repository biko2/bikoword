import { signInWithRedirect, signOut } from "firebase/auth";
import { auth, googleProvider } from "../infrastructure/firebase";

async function signInApp() {
  await signInWithRedirect(auth, googleProvider);
}

function singOutApp() {
  signOut(auth);
}

export const loginService = {
  signInApp,
  singOutApp,
};
