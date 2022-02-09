import styles from "~/styles/global.css";
import sharedStyles from "~/styles/shared.css";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import { links as playLinks } from "./routes/play";
import { Header } from "./components/Header";
import { useEffect } from "react";
import { wordsService } from "./core/services/words.service";
import { localStorageService } from "./core/services/localStorage.service";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: sharedStyles },
    ...playLinks(),
  ];
}

export const meta: MetaFunction = () => ({ title: "BikoWord" });

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

function Layout({ children }) {
  useEffect(() => {
    (async () => {
      const previousSolution = localStorageService.getSolution();
      await wordsService.setWordOfDay();
      if (previousSolution !== localStorageService.getSolution()) {
        localStorageService.removeItem("guesses");
      }
    })();
  });
  return (
    <>
      <Header />
      {children}
      <ScrollRestoration />
      <Scripts />
      {process.env.NODE_ENV === "development" && <LiveReload />}
    </>
  );
}
