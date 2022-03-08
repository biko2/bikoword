var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});
init_react();
var import_netlify = require("@remix-run/netlify");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/Enrique/Sites/Biko/bikoword/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links9,
  meta: () => meta
});
init_react();
var import_react_avatar = require("react-avatar");

// app/styles/global.css
var global_default = "/build/_assets/global-Y7SIRBCS.css";

// app/styles/shared.css
var shared_default = "/build/_assets/shared-CS4SQI3L.css";

// route:/Users/Enrique/Sites/Biko/bikoword/app/root.tsx
var import_remix3 = __toESM(require_remix());

// app/routes/play.tsx
init_react();
var import_react4 = require("react");

// app/components/Grid/index.tsx
init_react();

// app/components/Grid/styles.css
var styles_default = "/build/_assets/styles-LF6Z6ZJ4.css";

// app/components/EmptyRow/index.tsx
init_react();

// app/components/Cell/index.ts
init_react();

// app/components/Cell/Cell.tsx
init_react();

// app/components/Cell/styles.css
var styles_default2 = "/build/_assets/styles-BAFBQOHI.css";

// app/components/Cell/Cell.tsx
function links() {
  return [{ rel: "stylesheet", href: styles_default2 }];
}
var Cell = ({ children, status }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: `word-cell ${!!status && status}`
  }, children);
};

// app/components/EmptyRow/index.tsx
function links2() {
  return [...links()];
}
var EmptyRow = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "guess-word"
  }, /* @__PURE__ */ React.createElement(Cell, null), /* @__PURE__ */ React.createElement(Cell, null), /* @__PURE__ */ React.createElement(Cell, null), /* @__PURE__ */ React.createElement(Cell, null), /* @__PURE__ */ React.createElement(Cell, null));
};

// app/components/Row/index.tsx
init_react();

// app/components/Row/Row.tsx
init_react();
var import_react = require("react");

// app/constants/index.ts
init_react();
var MAX_TRIES = 6;
var WORD_LENGTH = 5;

// app/core/services/status.service.ts
init_react();

// app/core/services/localStorage.service.ts
init_react();
var saveSolution = (solution) => {
  const encodedSolution = window.btoa(solution);
  setItem("solution", encodedSolution);
};
var getSolution = () => {
  const encodedSolution = localStorage.getItem("solution");
  return encodedSolution ? window.atob(encodedSolution) : null;
};
var setItem = (name, value) => {
  const stringifiedValue = value;
  localStorage.setItem(name, stringifiedValue);
};
var getGuesses = () => {
  const element = localStorage.getItem("guesses");
  return element ? JSON.parse(element) : [];
};
var removeItem = (name) => {
  localStorage.removeItem(name);
};
var loadGameState = () => {
  const state = localStorage.getItem("gameState");
  return state ? JSON.parse(state) : null;
};
var saveGameState = (stats) => {
  setItem("gameState", JSON.stringify(stats));
};
var localStorageService = {
  saveSolution,
  getSolution,
  setItem,
  getGuesses,
  removeItem,
  loadGameState,
  saveGameState
};

// app/core/services/status.service.ts
var CHAR_STATUS = {
  absent: "absent",
  present: "present",
  correct: "correct"
};
var getWordStatus = (guess) => {
  const splitSolution = localStorageService.getSolution().split("");
  const splitGuess = [...guess];
  const solutionCharsTaken = splitSolution.map((_) => false);
  const statuses = [...Array(guess.length)];
  splitGuess.forEach((letter, index) => {
    if (letter === splitSolution[index]) {
      statuses[index] = CHAR_STATUS.correct;
      solutionCharsTaken[index] = true;
    }
  });
  splitGuess.forEach((letter, index) => {
    if (statuses[index])
      return;
    if (!splitSolution.includes(letter)) {
      return statuses[index] = CHAR_STATUS.absent;
    }
    const indexOfPresentChar = splitSolution.findIndex((letterToFind, index2) => letterToFind === letter && !solutionCharsTaken[index2]);
    if (indexOfPresentChar > -1) {
      statuses[index] = CHAR_STATUS.present;
      return solutionCharsTaken[indexOfPresentChar] = true;
    }
    return statuses[index] = CHAR_STATUS.absent;
  });
  return statuses;
};
var buildFinalGraph = (guesses) => {
  const guessesWithStatus = guesses.map((guess) => getWordStatus(guess));
  return guessesWithStatus.map((guessWithStatus) => {
    return guessWithStatus.map((letterStatus) => {
      switch (letterStatus) {
        case "correct":
          return "\u{1F7E9}";
        case "present":
          return "\u{1F7E8}";
        default:
          return "\u2B1C";
      }
    });
  });
};
var getGuessCharsStatus = () => {
  const guesses = localStorageService.getGuesses();
  const guessesStatus = guesses.map((guessWord) => getWordStatus(guessWord));
  const flattenGuessCharsStatus = guesses.map((guess, guessIndex) => {
    return guess.map((guessChar, guessCharIndex) => {
      return {
        key: guessChar,
        status: guessesStatus[guessIndex][guessCharIndex]
      };
    });
  }).flat();
  const unificatedGuessCharStatus = flattenGuessCharsStatus.map((guessCharStatus) => {
    const charUses = flattenGuessCharsStatus.filter((char) => char.key === guessCharStatus.key);
    const returnKey = { key: charUses[0].key, status: CHAR_STATUS.absent };
    if (charUses.find((char) => char.status === CHAR_STATUS.correct))
      return __spreadProps(__spreadValues({}, returnKey), { status: CHAR_STATUS.correct });
    if (charUses.find((char) => char.status === CHAR_STATUS.present))
      return __spreadProps(__spreadValues({}, returnKey), { status: CHAR_STATUS.present });
    return returnKey;
  });
  return unificatedGuessCharStatus;
};
var statusService = {
  getWordStatus,
  buildFinalGraph,
  getGuessCharsStatus
};

// app/components/Row/Row.tsx
function links3() {
  return [...links()];
}
var Row = ({ guess, completed }) => {
  const [guessStatus] = (0, import_react.useState)(() => !!completed && statusService.getWordStatus(guess));
  const guessLength = (guess == null ? void 0 : guess.length) ?? 0;
  const emptyCells = Array.from(Array(WORD_LENGTH - guessLength));
  return /* @__PURE__ */ React.createElement("div", {
    className: "guess-word"
  }, guess == null ? void 0 : guess.map((guessLetter, index) => /* @__PURE__ */ React.createElement(Cell, __spreadValues({
    key: index
  }, !!completed && {
    status: guessStatus[index]
  }), guessLetter)), emptyCells == null ? void 0 : emptyCells.map((_, index) => /* @__PURE__ */ React.createElement(Cell, {
    key: index
  })));
};

// app/components/Grid/index.tsx
function links4() {
  return [
    { rel: "stylesheet", href: styles_default },
    ...links2(),
    ...links3()
  ];
}
var Grid = ({ guesses = [], currentGuess }) => {
  const emptyRows = guesses.length < MAX_TRIES - 1 ? Array.from(Array(MAX_TRIES - 1 - guesses.length)) : [];
  return /* @__PURE__ */ React.createElement("div", {
    className: "word-grid"
  }, guesses.map((word, index) => /* @__PURE__ */ React.createElement(Row, {
    key: index,
    guess: word,
    completed: true
  })), guesses.length < MAX_TRIES && /* @__PURE__ */ React.createElement(Row, {
    guess: currentGuess
  }), emptyRows.map((_, index) => /* @__PURE__ */ React.createElement(EmptyRow, {
    key: index
  })));
};

// app/components/Keyboard/Keyboard.tsx
init_react();
var import_react2 = require("react");

// app/components/Keyboard/Keyboard.css
var Keyboard_default = "/build/_assets/Keyboard-PA54ORWZ.css";

// app/components/Key/Key.tsx
init_react();

// app/components/Key/Key.css
var Key_default = "/build/_assets/Key-KYD5O46M.css";

// app/components/Key/Key.tsx
var links5 = () => {
  return [{ rel: "stylesheet", href: Key_default }];
};
var capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
var Key = ({ status, keyContent, onKeyPress }) => {
  return /* @__PURE__ */ React.createElement("button", {
    className: `Key ${!!status ? status : ""}`,
    onClick: () => onKeyPress(keyContent.key)
  }, /* @__PURE__ */ React.createElement("p", null, capitalize(keyContent.text)));
};

// app/components/Keyboard/Keys.tsx
init_react();
var KEYS = [
  {
    text: "q",
    key: "q"
  },
  {
    text: "w",
    key: "w"
  },
  {
    text: "e",
    key: "e"
  },
  {
    text: "r",
    key: "r"
  },
  {
    text: "t",
    key: "t"
  },
  {
    text: "y",
    key: "y"
  },
  {
    text: "u",
    key: "u"
  },
  {
    text: "i",
    key: "i"
  },
  {
    text: "o",
    key: "o"
  },
  {
    text: "p",
    key: "p"
  },
  {
    text: "a",
    key: "a"
  },
  {
    text: "s",
    key: "s"
  },
  {
    text: "d",
    key: "d"
  },
  {
    text: "f",
    key: "f"
  },
  {
    text: "g",
    key: "g"
  },
  {
    text: "h",
    key: "h"
  },
  {
    text: "j",
    key: "j"
  },
  {
    text: "k",
    key: "k"
  },
  {
    text: "l",
    key: "l"
  },
  {
    text: "\xF1",
    key: "\xF1"
  },
  {
    text: "Go!",
    key: "Enter"
  },
  {
    text: "z",
    key: "z"
  },
  {
    text: "x",
    key: "x"
  },
  {
    text: "c",
    key: "c"
  },
  {
    text: "v",
    key: "v"
  },
  {
    text: "b",
    key: "b"
  },
  {
    text: "n",
    key: "n"
  },
  {
    text: "m",
    key: "m"
  },
  {
    text: "del",
    key: "Backspace"
  }
];

// app/components/Keyboard/Keyboard.tsx
var links6 = () => {
  return [...links5(), { rel: "stylesheet", href: Keyboard_default }];
};
function Keyboard({
  guesses,
  onKeyPress,
  onEnterPress,
  onDeletePress
}) {
  const [usedChars, setUsedChars] = (0, import_react2.useState)([]);
  const onKeyPressAction = {
    enter: onEnterPress,
    backspace: onDeletePress
  };
  const handleKeyPressed = (value) => {
    const regex = /^[a-z\u00f1\u00d1]$/gi;
    if (regex.test(value)) {
      return onKeyPress(value.toUpperCase());
    }
    if (onKeyPressAction[value.toLowerCase()]) {
      return onKeyPressAction[value.toLowerCase()]();
    }
  };
  (0, import_react2.useEffect)(() => {
    setUsedChars(statusService.getGuessCharsStatus());
  }, [guesses]);
  (0, import_react2.useEffect)(() => {
    const listener = (event) => {
      handleKeyPressed(event.key);
    };
    window.addEventListener("keyup", listener);
    return () => {
      window.removeEventListener("keyup", listener);
    };
  }, [onEnterPress, onDeletePress, onKeyPress]);
  const getKeyStatus = (key) => {
    const usedChar = usedChars.find((char) => {
      return char.key == key.text.toUpperCase();
    });
    if (!usedChar)
      return "";
    return usedChar.status;
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "Keyboard"
  }, KEYS.map((singleKey, index) => /* @__PURE__ */ React.createElement(Key, {
    key: index,
    keyContent: singleKey,
    status: getKeyStatus(singleKey),
    onKeyPress: handleKeyPressed
  })));
}

// app/components/StatsModal/index.ts
init_react();

// app/components/StatsModal/StatsModal.tsx
init_react();
var import_react3 = require("react");

// app/components/StatsModal/styles.css
var styles_default3 = "/build/_assets/styles-M667HO43.css";

// app/images/close.svg
var close_default = "/build/_assets/close-5NYYAAAZ.svg";

// app/components/StatsModal/StatsModal.tsx
var links7 = () => {
  return [{ rel: "stylesheet", href: styles_default3 }];
};
var StatsModal = ({
  isOpen,
  finalGraph,
  gameWon,
  stats,
  onClose
}) => {
  const [copied, setCopied] = (0, import_react3.useState)(false);
  if (!isOpen)
    return null;
  const { totalGames, successRate, winsTree, gamesFailed } = stats;
  const failedPercentage = gamesFailed * 100 / totalGames;
  const failedBlocksToShow = Math.floor(failedPercentage / 10);
  const handleCopyClick = () => {
    const tries = finalGraph.length != 6 ? finalGraph.length : gameWon ? 6 : "X";
    const stringifiedGraph = finalGraph.map((lineGraph) => lineGraph.join("")).join("\n");
    const message = `BikoWordle ${tries}/6

${stringifiedGraph}

${window.location.origin}`;
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 3e3);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: `copiedText ${copied ? "show" : ""}`
  }, "\xA1Copiado al portapapeles!"), /* @__PURE__ */ React.createElement("div", {
    className: "modal-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "modal-content stats"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "modal-close",
    src: close_default,
    onClick: onClose
  }), /* @__PURE__ */ React.createElement("h2", {
    className: "title"
  }, gameWon ? "\xA1As\xED se hace!" : "\xBFEn serio? \u{1F9A8}"), /* @__PURE__ */ React.createElement("div", {
    className: "statsModal__graph"
  }, finalGraph.map((guessGraph) => guessGraph.map((letterStatus, index) => /* @__PURE__ */ React.createElement("div", {
    key: `letterStatus-${index}`
  }, letterStatus)))), /* @__PURE__ */ React.createElement("div", {
    className: "statsModal__statistic"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "statsModal__stat"
  }, totalGames), /* @__PURE__ */ React.createElement("p", {
    className: "statsModal__statTitle"
  }, "partidas")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "statsModal__stat"
  }, successRate, " %"), /* @__PURE__ */ React.createElement("p", {
    className: "statsModal__statTitle"
  }, "victorias"))), /* @__PURE__ */ React.createElement("div", {
    className: "statsModal__winDistribution"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "title-2"
  }, "Distribuci\xF3n"), winsTree.map((victories, winsIndex) => {
    const percentage = victories * 100 / totalGames;
    const blocksToShow = Math.floor(percentage / 10);
    return /* @__PURE__ */ React.createElement("div", {
      key: winsIndex,
      className: "statsModal__winBar"
    }, /* @__PURE__ */ React.createElement("strong", null, winsIndex + 1, " -"), [...new Array(blocksToShow)].map((_, index) => /* @__PURE__ */ React.createElement("div", {
      key: index,
      className: "statsModal__winSquare"
    })), " ", percentage.toFixed(0), " %");
  }), /* @__PURE__ */ React.createElement("div", {
    className: "statsModal__winBar"
  }, /* @__PURE__ */ React.createElement("strong", null, "X -"), [...new Array(failedBlocksToShow)].map((_, index) => /* @__PURE__ */ React.createElement("div", {
    key: `failed-${index}`,
    className: "statsModal__winSquare"
  })), " ", failedPercentage.toFixed(0), " %")), /* @__PURE__ */ React.createElement("div", {
    className: "center"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button secondary",
    onClick: handleCopyClick
  }, "Copiar")))));
};

// app/core/services/game.service.ts
init_react();

// app/core/services/ranking.service.ts
init_react();

// app/core/infrastructure/firebase.ts
init_react();
var import_app = require("firebase/app");
var import_auth = require("firebase/auth");
var firebaseConfig = {
  apiKey: "AIzaSyAa5Dkx0bh1ncIxr4fFrL3qhCLkMYXPZHY",
  authDomain: "bikoword.firebaseapp.com",
  databaseURL: "https://bikoword-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bikoword",
  storageBucket: "bikoword.appspot.com",
  messagingSenderId: "969298549978",
  appId: "1:969298549978:web:51472eeb554b43071699e3"
};
var app = (0, import_app.initializeApp)(firebaseConfig);
var auth = (0, import_auth.getAuth)(app);
var googleProvider = new import_auth.GoogleAuthProvider();

// app/core/services/ranking.service.ts
var import_database = require("firebase/database");
var getPersonalScore = async (user) => {
  const databaseRef = (0, import_database.ref)((0, import_database.getDatabase)(app));
  const snapshot = await (0, import_database.get)((0, import_database.child)(databaseRef, `ranking/${user.id}`));
  const userScore = snapshot.val();
  return (userScore == null ? void 0 : userScore.score) ?? 0;
};
var getProcessedName = (name) => {
  const splitedName = name.split(" ");
  const usefulSplits = splitedName.slice(0, 2);
  if (!usefulSplits[1]) {
    return usefulSplits[0];
  }
  usefulSplits[1] = usefulSplits[1].charAt(0);
  const processedName = usefulSplits.join(" ");
  return processedName;
};
var setPersonalScore = async (user, points) => {
  const databaseRef = (0, import_database.ref)((0, import_database.getDatabase)(app));
  const previousScore = await getPersonalScore(user);
  const nameToShow = getProcessedName(user.displayName);
  await (0, import_database.set)((0, import_database.child)(databaseRef, `ranking/${user == null ? void 0 : user.id}`), {
    id: user.googleId,
    email: user.email,
    name: nameToShow,
    photo: user.displayPhoto,
    score: previousScore + points
  });
};
var getRanking = async () => {
  const databaseRef = (0, import_database.ref)((0, import_database.getDatabase)(app));
  const snapshot = await (0, import_database.get)((0, import_database.child)(databaseRef, "ranking"));
  const rankingData = snapshot.val();
  if (!rankingData)
    return [];
  const rankingEntries = Object.keys(rankingData);
  const rankingCollection = rankingEntries.map((rankingEntry) => rankingData[rankingEntry]);
  return rankingCollection.sort((scoreA, scoreB) => scoreA.score > scoreB.score ? -1 : 1);
};
var rankingService = {
  getPersonalScore,
  setPersonalScore,
  getRanking
};

// app/core/services/scoring.service.ts
init_react();

// app/core/domain/scoring.config.ts
init_react();
var scoring = {
  timing: [200, 100, 50, 25],
  tries: [300, 250, 100, 50, 25, 1]
};

// app/core/services/scoring.service.ts
var getTimingPoints = (timeInSeconds) => {
  if (!timeInSeconds)
    return 0;
  const minutesGuessing = timeInSeconds / 60;
  const hasRemainingSeconds = minutesGuessing % 2 !== 0;
  const timePoints = scoring.timing;
  if (minutesGuessing < 2 || minutesGuessing === 2 && !hasRemainingSeconds) {
    return timePoints[0];
  }
  if (minutesGuessing < 4 || minutesGuessing === 4 && !hasRemainingSeconds) {
    return timePoints[1];
  }
  if (minutesGuessing < 6 || minutesGuessing === 6 && !hasRemainingSeconds) {
    return timePoints[2];
  }
  if (minutesGuessing < 8 || minutesGuessing === 8 && !hasRemainingSeconds) {
    return timePoints[3];
  }
  return 0;
};
var getTriesPoints = (tries) => {
  const tryPoints = scoring.tries;
  return tryPoints[tries - 1];
};
var getTotalPoints = (tries, timeInSeconds, timesLettersRepeated = 0) => {
  const triesPoints = getTriesPoints(tries);
  const timingPoints = getTimingPoints(timeInSeconds);
  const repeatedLettersPoints = timesLettersRepeated * 5;
  return timingPoints + triesPoints - repeatedLettersPoints;
};
var scoringService = {
  getTotalPoints
};

// app/core/services/userCookie.service.ts
init_react();
var import_js_cookie = __toESM(require("js-cookie"));
var getUserFromCookie = () => {
  const cookie = import_js_cookie.default.get("auth");
  if (!cookie) {
    return;
  }
  return JSON.parse(cookie);
};
var setUserCookie = (user) => {
  import_js_cookie.default.set("auth", JSON.stringify(user), {
    expires: 1 / 24
  });
};
var removeUserCookie = () => import_js_cookie.default.remove("auth");
var userCookieService = {
  getUserFromCookie,
  setUserCookie,
  removeUserCookie
};

// app/core/services/game.service.ts
var defaultStats = {
  winsTree: Array.from(new Array(MAX_TRIES), () => 0),
  gamesFailed: 0,
  totalGames: 0,
  successRate: 0
};
var loadStats = () => {
  return localStorageService.loadGameState() ?? defaultStats;
};
var getSuccessRate = (gameStats) => {
  const { totalGames, gamesFailed } = gameStats;
  return Math.round(100 * (totalGames - gamesFailed) / Math.max(totalGames, 1));
};
var saveStats = (gameStats, incorrectGuessesBeforeEnd) => {
  const stats = __spreadValues({}, gameStats);
  stats.totalGames += 1;
  if (incorrectGuessesBeforeEnd >= MAX_TRIES) {
    stats.gamesFailed += 1;
  } else {
    stats.winsTree[incorrectGuessesBeforeEnd] += 1;
  }
  stats.successRate = getSuccessRate(stats);
  localStorageService.saveGameState(stats);
  const user = userCookieService.getUserFromCookie();
  const playScore = scoringService.getTotalPoints(incorrectGuessesBeforeEnd + 1);
  !!user && rankingService.setPersonalScore(user, playScore);
  return stats;
};
var gameService = {
  loadStats,
  saveStats
};

// app/core/utils/gameStatus.utils.ts
init_react();
var checkGameIsWon = () => {
  const winningWord = localStorageService.getSolution();
  const guesses = localStorageService.getGuesses();
  if (!guesses)
    return false;
  return guesses.find((guessLetters) => winningWord === guessLetters.join("")) !== void 0;
};
var checkGameIsLost = () => {
  const guesses = localStorageService.getGuesses();
  if (!guesses)
    return false;
  return guesses.length === MAX_TRIES && !checkGameIsWon();
};
var gameUtils = {
  checkGameIsWon,
  checkGameIsLost
};

// app/routes/play.tsx
function links8() {
  return [...links4(), ...links6(), ...links7()];
}

// app/components/Header/index.tsx
init_react();

// app/components/Header/Header.tsx
init_react();
var import_remix2 = __toESM(require_remix());

// app/hooks/useUser.ts
init_react();
var import_react5 = require("react");
var import_auth3 = require("firebase/auth");

// app/core/services/login.service.ts
init_react();
var import_auth2 = require("firebase/auth");
async function signInApp() {
  await (0, import_auth2.signInWithPopup)(auth, googleProvider);
}
function singOutApp() {
  (0, import_auth2.signOut)(auth);
}
var loginService = {
  signInApp,
  singOutApp
};

// app/core/utils/userData.mapper.ts
init_react();
var mapData = (user) => {
  const { uid, email, refreshToken, providerData, displayName } = user;
  let displayPhoto;
  let googleId;
  providerData.map(({ photoURL, uid: uid2 }) => {
    displayPhoto = photoURL;
    googleId = uid2;
  });
  return {
    id: uid,
    email,
    token: refreshToken,
    displayPhoto,
    googleId,
    displayName
  };
};
var userDataMapper = {
  mapData
};

// app/hooks/useUser.ts
var useUser = () => {
  const [user, setUser] = (0, import_react5.useState)();
  (0, import_react5.useEffect)(() => {
    const cancelAuthListener = (0, import_auth3.onAuthStateChanged)(auth, (user2) => {
      if (user2) {
        const userData = userDataMapper.mapData(user2);
        userCookieService.setUserCookie(userData);
        return setUser(userData);
      }
      userCookieService.removeUserCookie();
      setUser(void 0);
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
    setUser(void 0);
  };
  return { user, logout };
};

// app/images/Logo.svg
var Logo_default = "/build/_assets/Logo-6TT6KOLK.svg";

// app/components/Header/Header.tsx
var import_react6 = require("react");
var Header = () => {
  const [isInverted, setInverted] = (0, import_react6.useState)(false);
  const { user } = useUser();
  (0, import_react6.useEffect)(() => {
    var _a;
    const path = (_a = window == null ? void 0 : window.location) == null ? void 0 : _a.pathname;
    if (path === "/ranking") {
      setInverted(true);
    }
  }, []);
  return /* @__PURE__ */ React.createElement("header", {
    className: isInverted ? "header inverted" : "header"
  }, /* @__PURE__ */ React.createElement(import_remix2.NavLink, {
    to: "/",
    className: "header-item"
  }, /* @__PURE__ */ React.createElement("img", {
    src: Logo_default,
    alt: "logo",
    className: "site-logo"
  })), user && /* @__PURE__ */ React.createElement("ul", {
    className: "navigation"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.NavLink, {
    to: "/",
    className: "header-item"
  }, "Inicio")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.NavLink, {
    to: "/play",
    className: "header-item"
  }, "Palabra del d\xEDa")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.NavLink, {
    to: "/ranking",
    className: "header-item"
  }, "Ranking"))));
};

// route:/Users/Enrique/Sites/Biko/bikoword/app/root.tsx
var import_react7 = require("react");

// app/core/services/words.service.ts
init_react();
var import_database2 = require("firebase/database");
var getWords = async () => {
  const databaseRef = (0, import_database2.ref)((0, import_database2.getDatabase)(app));
  const snapshot = await (0, import_database2.get)((0, import_database2.child)(databaseRef, "words"));
  return snapshot.val();
};
var setWordOfDay = async () => {
  const words = await getWords();
  const startDate = new Date("January 1, 2022 00:00:00").valueOf();
  const now = Date.now();
  const msInDay = 864e5;
  const index = Math.floor((now - startDate) / msInDay);
  localStorageService.saveSolution(words[index % words.length].toUpperCase());
};
var wordsService = {
  setWordOfDay
};

// route:/Users/Enrique/Sites/Biko/bikoword/app/root.tsx
function links9() {
  return [
    { rel: "stylesheet", href: global_default },
    { rel: "stylesheet", href: shared_default },
    ...links8()
  ];
}
var meta = () => ({ title: "BikoWordle" });
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null));
}
function Document({ children }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "es"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react_avatar.ConfigProvider, {
    avatarRedirectUrl: "https://avatar-redirect.appspot.com"
  }, /* @__PURE__ */ React.createElement(Layout, null, children))));
}
function Layout({ children }) {
  (0, import_react7.useEffect)(() => {
    (async () => {
      const previousSolution = localStorageService.getSolution();
      await wordsService.setWordOfDay();
      if (previousSolution !== localStorageService.getSolution()) {
        localStorageService.removeItem("guesses");
      }
    })();
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, null), children, /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null));
}

// route:/Users/Enrique/Sites/Biko/bikoword/app/routes/ranking.tsx
var ranking_exports = {};
__export(ranking_exports, {
  default: () => ranking_default,
  links: () => links12
});
init_react();
var import_react8 = require("react");

// app/components/Podium/index.tsx
init_react();

// app/components/Podium/Podium.tsx
init_react();
var import_react_avatar2 = __toESM(require("react-avatar"));

// app/components/Podium/Podium.css
var Podium_default = "/build/_assets/Podium-B4EJC4ZT.css";

// app/components/Podium/Podium.tsx
var links10 = () => {
  return [{ rel: "stylesheet", href: Podium_default }];
};
var Podium = ({ podiumData }) => {
  return /* @__PURE__ */ React.createElement("article", {
    className: "podium"
  }, podiumData.map((data, index) => /* @__PURE__ */ React.createElement("div", {
    key: index,
    className: `top-${index + 1}`
  }, /* @__PURE__ */ React.createElement(import_react_avatar2.default, {
    src: data.photo,
    email: data.email,
    googleId: data.id,
    name: data.name,
    round: true,
    className: "avatar",
    size: "90"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "userData"
  }, /* @__PURE__ */ React.createElement("span", {
    className: `position`
  }, "#", index + 1), " ", data.name, /* @__PURE__ */ React.createElement("p", {
    className: "score"
  }, data.score, " pts")))));
};

// app/components/Ranking/index.tsx
init_react();

// app/components/Ranking/Ranking.tsx
init_react();

// app/components/Ranking/Ranking.css
var Ranking_default = "/build/_assets/Ranking-ACY3V52L.css";

// app/components/Ranking/Ranking.tsx
var links11 = () => {
  return [{ rel: "stylesheet", href: Ranking_default }];
};
var Ranking = ({ rankData }) => {
  return /* @__PURE__ */ React.createElement("ul", null, rankData.map((data, index) => /* @__PURE__ */ React.createElement("li", {
    key: index,
    className: "rankingRow"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", {
    className: "position"
  }, "#", index + 4), /* @__PURE__ */ React.createElement("span", {
    className: "name"
  }, data.name)), /* @__PURE__ */ React.createElement("p", {
    className: "score"
  }, data.score, " pts"))));
};

// route:/Users/Enrique/Sites/Biko/bikoword/app/routes/ranking.tsx
function links12() {
  return [...links10(), ...links11()];
}
var Ranking2 = () => {
  const [rankingData, setRankingData] = (0, import_react8.useState)();
  (0, import_react8.useEffect)(() => {
    (async () => {
      const data = await rankingService.getRanking();
      setRankingData(data ?? []);
    })();
  }, []);
  if (!rankingData)
    return null;
  const podiumData = rankingData.slice(0, 3);
  const restData = rankingData.slice(3);
  if (rankingData.length === 0) {
    return /* @__PURE__ */ React.createElement("section", {
      className: "router"
    }, /* @__PURE__ */ React.createElement("p", {
      className: "disabled-text center"
    }, "Parece que ", /* @__PURE__ */ React.createElement("strong", null, "nadie"), " ha conseguido descifrar la palabra todav\xEDa!"));
  }
  return /* @__PURE__ */ React.createElement("section", {
    className: "rankingWrapper"
  }, !!podiumData && /* @__PURE__ */ React.createElement(Podium, {
    podiumData: podiumData.slice(0, 3)
  }), !!restData && /* @__PURE__ */ React.createElement("article", {
    className: "ranking"
  }, /* @__PURE__ */ React.createElement(Ranking, {
    rankData: restData
  })));
};
var ranking_default = Ranking2;

// route:/Users/Enrique/Sites/Biko/bikoword/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links14
});
init_react();
var import_react9 = require("react");

// app/components/RulesModal/index.ts
init_react();

// app/components/RulesModal/RulesModal.tsx
init_react();

// app/components/SampleRow/index.ts
init_react();

// app/components/SampleRow/SampleRow.tsx
init_react();
var SampleRow = ({ guess }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "guess-word"
  }, guess == null ? void 0 : guess.map((guessLetter, index) => /* @__PURE__ */ React.createElement(Cell, {
    key: index,
    status: guessLetter.status
  }, guessLetter.key)));
};

// app/components/RulesModal/RulesModal.css
var RulesModal_default = "/build/_assets/RulesModal-5LX5SJ3H.css";

// app/components/RulesModal/RulesModal.tsx
var links13 = () => {
  return [{ rel: "stylesheet", href: RulesModal_default }];
};
var RulesModal = ({ isOpen = true, onClose }) => {
  if (!isOpen)
    return null;
  return /* @__PURE__ */ React.createElement("div", {
    className: "modal-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "modal-content"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "modal-close",
    src: close_default,
    onClick: onClose
  }), /* @__PURE__ */ React.createElement("h2", {
    className: "title"
  }, "\xBFC\xF3mo jugar?"), /* @__PURE__ */ React.createElement("p", null, "Adivina la ", /* @__PURE__ */ React.createElement("strong", null, "palabra oculta"), " en seis intentos."), /* @__PURE__ */ React.createElement("p", null, "Cada intento debe ser una ", /* @__PURE__ */ React.createElement("strong", null, "palabra v\xE1lida"), " de 5 letras."), /* @__PURE__ */ React.createElement("p", null, "Despu\xE9s de cada intento ", /* @__PURE__ */ React.createElement("strong", null, "el color de las letras cambia"), " ", "para mostrar qu\xE9 tan cerca est\xE1s de acertar la palabra."), /* @__PURE__ */ React.createElement("h3", {
    className: "title-2"
  }, "Ejemplos"), /* @__PURE__ */ React.createElement(SampleRow, {
    guess: [
      { key: "G", status: "correct" },
      { key: "A", status: "" },
      { key: "T", status: "" },
      { key: "O", status: "" },
      { key: "S", status: "" }
    ]
  }), /* @__PURE__ */ React.createElement("p", null, "La letra ", /* @__PURE__ */ React.createElement("strong", null, "G"), " est\xE1 en la palabra y en la", " ", /* @__PURE__ */ React.createElement("strong", null, "posici\xF3n correcta.")), /* @__PURE__ */ React.createElement(SampleRow, {
    guess: [
      { key: "V", status: "" },
      { key: "O", status: "" },
      { key: "C", status: "present" },
      { key: "A", status: "" },
      { key: "L", status: "" }
    ]
  }), /* @__PURE__ */ React.createElement("p", null, "La letra ", /* @__PURE__ */ React.createElement("strong", null, "C"), " est\xE1 en la palabra pero en la", " ", /* @__PURE__ */ React.createElement("strong", null, "posici\xF3n incorrecta.")), /* @__PURE__ */ React.createElement(SampleRow, {
    guess: [
      { key: "C", status: "" },
      { key: "A", status: "" },
      { key: "N", status: "" },
      { key: "T", status: "" },
      { key: "O", status: "absent" }
    ]
  }), /* @__PURE__ */ React.createElement("p", null, "La letra ", /* @__PURE__ */ React.createElement("strong", null, "O no est\xE1"), " en la palabra."), /* @__PURE__ */ React.createElement("p", null, "Puede haber letras repetidas. Las pistas son independientes para cada letra.")));
};

// route:/Users/Enrique/Sites/Biko/bikoword/app/routes/index.tsx
var import_remix4 = __toESM(require_remix());
function links14() {
  return [...links13()];
}
function Index() {
  const { user, logout } = useUser();
  const [isRulesModalOpen, setRulesModalOpen] = (0, import_react9.useState)(false);
  const logOut = () => {
    logout();
  };
  return /* @__PURE__ */ React.createElement("nav", {
    className: "router"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "welcome"
  }, /* @__PURE__ */ React.createElement("p", null, "Bienvenido a ", /* @__PURE__ */ React.createElement("strong", null, "BikoWordle"), ",", /* @__PURE__ */ React.createElement("br", null), "\xA1La nueva app de Biko ", /* @__PURE__ */ React.createElement("strong", null, "customizada"), " para jugar al Wordle!"), /* @__PURE__ */ React.createElement("p", null, "\xBFUn Wordle para Biko? \xA1No! El Wordle ", /* @__PURE__ */ React.createElement("strong", null, "de"), " Biko."), /* @__PURE__ */ React.createElement("p", null, "Si no ", /* @__PURE__ */ React.createElement("span", {
    className: "crossed"
  }, "conoces"), " sabes c\xF3mo funciona el juego, aqu\xED tienes", /* @__PURE__ */ React.createElement("strong", {
    className: "inner-link custom-link",
    onClick: () => setRulesModalOpen(true)
  }, "aiuda"), "."), /* @__PURE__ */ React.createElement("p", null, "Pero si lo tienes claro..."), /* @__PURE__ */ React.createElement("div", {
    className: "ctas-wrapper"
  }, user && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_remix4.NavLink, {
    to: "/play",
    className: "header-item"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button primary"
  }, "\xA1A JUGAR!")), /* @__PURE__ */ React.createElement("button", {
    className: "button secondary",
    onClick: logOut
  }, "Cerrar sesi\xF3n")), !user && /* @__PURE__ */ React.createElement("button", {
    className: "button primary",
    onClick: loginService.signInApp
  }, "Inicia sesi\xF3n")), /* @__PURE__ */ React.createElement(RulesModal, {
    isOpen: isRulesModalOpen,
    onClose: () => setRulesModalOpen(false)
  })));
}

// route:/Users/Enrique/Sites/Biko/bikoword/app/routes/play.tsx
var play_exports = {};
__export(play_exports, {
  default: () => play_default,
  links: () => links15
});
init_react();
var import_react10 = require("react");
function links15() {
  return [...links4(), ...links6(), ...links7()];
}
var Play = () => {
  const [isGameWon, setIsGameWon] = (0, import_react10.useState)();
  const [isGameLost, setIsGameLost] = (0, import_react10.useState)(false);
  const [wordCharacters, setWordCharacters] = (0, import_react10.useState)([]);
  const [guesses, setGuesses] = (0, import_react10.useState)([]);
  const [stats, setStats] = (0, import_react10.useState)();
  const [statsModalOpened, setStatsModalOpened] = (0, import_react10.useState)(false);
  const [finalGraph, setFinalGraph] = (0, import_react10.useState)([]);
  const isGameEnded = isGameLost || isGameWon;
  (0, import_react10.useEffect)(() => {
    const loadedGuesses = localStorageService.getGuesses();
    setGuesses(loadedGuesses);
    const gameStats = gameService.loadStats();
    setStats(gameStats);
    setIsGameWon(gameUtils.checkGameIsWon());
    setIsGameLost(gameUtils.checkGameIsLost());
  }, []);
  (0, import_react10.useEffect)(() => {
    if (isGameEnded) {
      setStatsModalOpened(true);
      const buildedFinalGraph = statusService.buildFinalGraph(guesses);
      setFinalGraph(buildedFinalGraph);
    }
  }, [isGameEnded]);
  const handleKeyPress = (pressedKey) => {
    if (isGameEnded || wordCharacters.length >= WORD_LENGTH)
      return;
    return setWordCharacters((previous) => [...previous, pressedKey]);
  };
  const handleEnterPress = () => {
    if (isGameEnded || wordCharacters.length !== WORD_LENGTH) {
      return;
    }
    setGuesses([...guesses, wordCharacters]);
    localStorageService.setItem("guesses", JSON.stringify([...guesses, wordCharacters]));
    setWordCharacters([]);
    const winningWord = localStorageService.getSolution();
    if (wordCharacters.join("") === winningWord) {
      console.log("omg you won!!");
      setStats(gameService.saveStats(stats, guesses.length));
      setIsGameWon(true);
    }
    if (guesses.length === MAX_TRIES - 1) {
      console.log("youre a fucking mofet");
      setStats(gameService.saveStats(stats, guesses.length + 1));
      setIsGameLost(true);
    }
  };
  const handleDeletePress = () => {
    if (isGameEnded) {
      return;
    }
    if (wordCharacters.length > 0) {
      return setWordCharacters((previous) => previous.slice(0, -1));
    }
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Grid, {
    guesses,
    currentGuess: wordCharacters
  }), /* @__PURE__ */ React.createElement(Keyboard, {
    guesses,
    onKeyPress: handleKeyPress,
    onEnterPress: handleEnterPress,
    onDeletePress: handleDeletePress
  }), /* @__PURE__ */ React.createElement(StatsModal, {
    isOpen: statsModalOpened,
    finalGraph,
    gameWon: isGameWon,
    stats,
    onClose: () => setStatsModalOpened(false)
  }));
};
var play_default = Play;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "b8b8beb0", "entry": { "module": "/build/entry.client-7BN7XZRD.js", "imports": ["/build/_shared/chunk-BHOKBNRK.js", "/build/_shared/chunk-WLGEBU3D.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-PHWVF54J.js", "imports": ["/build/_shared/chunk-3N7MIZHP.js", "/build/_shared/chunk-Q2MY5JGV.js", "/build/_shared/chunk-JMBRC7X7.js", "/build/_shared/chunk-B7367XAC.js", "/build/_shared/chunk-B45MKRRL.js", "/build/_shared/chunk-WA2S6IZS.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-ZYIGOAVM.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/play": { "id": "routes/play", "parentId": "root", "path": "play", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/play-YSNYPUXD.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/ranking": { "id": "routes/ranking", "parentId": "root", "path": "ranking", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/ranking-PJ25K4EF.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-B8B8BEB0.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/ranking": {
    id: "routes/ranking",
    parentId: "root",
    path: "ranking",
    index: void 0,
    caseSensitive: void 0,
    module: ranking_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/play": {
    id: "routes/play",
    parentId: "root",
    path: "play",
    index: void 0,
    caseSensitive: void 0,
    module: play_exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString;
  let netlifyGraphToken;
  if (event.authlifyToken != null) {
    netlifyGraphToken = event.authlifyToken;
  }
  const authHeader = event.headers["authorization"];
  const graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  if (authHeader != null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }
  const loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  Object.keys(loadContext).forEach((key) => {
    if (loadContext[key] == null) {
      delete loadContext[key];
    }
  });
  return loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "development"
});
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi8uLi8uLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL0VucmlxdWUvU2l0ZXMvQmlrby9iaWtvd29yZC9hcHAvcm9vdC50c3giLCAiLi4vLi4vLi4vYXBwL3JvdXRlcy9wbGF5LnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9HcmlkL2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9FbXB0eVJvdy9pbmRleC50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQ2VsbC9pbmRleC50cyIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9DZWxsL0NlbGwudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL1Jvdy9pbmRleC50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvUm93L1Jvdy50c3giLCAiLi4vLi4vLi4vYXBwL2NvbnN0YW50cy9pbmRleC50cyIsICIuLi8uLi8uLi9hcHAvY29yZS9zZXJ2aWNlcy9zdGF0dXMuc2VydmljZS50cyIsICIuLi8uLi8uLi9hcHAvY29yZS9zZXJ2aWNlcy9sb2NhbFN0b3JhZ2Uuc2VydmljZS50cyIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9LZXlib2FyZC9LZXlib2FyZC50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvS2V5L0tleS50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvS2V5Ym9hcmQvS2V5cy50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvU3RhdHNNb2RhbC9pbmRleC50cyIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9TdGF0c01vZGFsL1N0YXRzTW9kYWwudHN4IiwgIi4uLy4uLy4uL2FwcC9jb3JlL3NlcnZpY2VzL2dhbWUuc2VydmljZS50cyIsICIuLi8uLi8uLi9hcHAvY29yZS9zZXJ2aWNlcy9yYW5raW5nLnNlcnZpY2UudHMiLCAiLi4vLi4vLi4vYXBwL2NvcmUvaW5mcmFzdHJ1Y3R1cmUvZmlyZWJhc2UudHMiLCAiLi4vLi4vLi4vYXBwL2NvcmUvc2VydmljZXMvc2NvcmluZy5zZXJ2aWNlLnRzIiwgIi4uLy4uLy4uL2FwcC9jb3JlL2RvbWFpbi9zY29yaW5nLmNvbmZpZy50cyIsICIuLi8uLi8uLi9hcHAvY29yZS9zZXJ2aWNlcy91c2VyQ29va2llLnNlcnZpY2UudHMiLCAiLi4vLi4vLi4vYXBwL2NvcmUvdXRpbHMvZ2FtZVN0YXR1cy51dGlscy50cyIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIudHN4IiwgIi4uLy4uLy4uL2FwcC9ob29rcy91c2VVc2VyLnRzIiwgIi4uLy4uLy4uL2FwcC9jb3JlL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2UudHMiLCAiLi4vLi4vLi4vYXBwL2NvcmUvdXRpbHMvdXNlckRhdGEubWFwcGVyLnRzIiwgIi4uLy4uLy4uL2FwcC9jb3JlL3NlcnZpY2VzL3dvcmRzLnNlcnZpY2UudHMiLCAicm91dGU6L1VzZXJzL0VucmlxdWUvU2l0ZXMvQmlrby9iaWtvd29yZC9hcHAvcm91dGVzL3JhbmtpbmcudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL1BvZGl1bS9pbmRleC50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvUG9kaXVtL1BvZGl1bS50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvUmFua2luZy9pbmRleC50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvUmFua2luZy9SYW5raW5nLnRzeCIsICJyb3V0ZTovVXNlcnMvRW5yaXF1ZS9TaXRlcy9CaWtvL2Jpa293b3JkL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL1J1bGVzTW9kYWwvaW5kZXgudHMiLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvUnVsZXNNb2RhbC9SdWxlc01vZGFsLnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9TYW1wbGVSb3cvaW5kZXgudHMiLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvU2FtcGxlUm93L1NhbXBsZVJvdy50c3giLCAicm91dGU6L1VzZXJzL0VucmlxdWUvU2l0ZXMvQmlrby9iaWtvd29yZC9hcHAvcm91dGVzL3BsYXkudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImltcG9ydCB7IGNyZWF0ZVJlcXVlc3RIYW5kbGVyIH0gZnJvbSBcIkByZW1peC1ydW4vbmV0bGlmeVwiO1xuaW1wb3J0ICogYXMgYnVpbGQgZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiO1xuXG4vKlxuICogUmV0dXJucyBhIGNvbnRleHQgb2JqZWN0IHdpdGggYXQgbW9zdCAzIGtleXM6XG4gKiAgLSBgbmV0bGlmeUdyYXBoVG9rZW5gOiByYXcgYXV0aGVudGljYXRpb24gdG9rZW4gdG8gdXNlIHdpdGggTmV0bGlmeSBHcmFwaFxuICogIC0gYGNsaWVudE5ldGxpZnlHcmFwaEFjY2Vzc1Rva2VuYDogRm9yIHVzZSB3aXRoIEpXVHMgZ2VuZXJhdGVkIGJ5XG4gKiAgICBgbmV0bGlmeS1ncmFwaC1hdXRoYC5cbiAqICAtIGBuZXRsaWZ5R3JhcGhTaWduYXR1cmVgOiBhIHNpZ25hdHVyZSBmb3Igc3Vic2NyaXB0aW9uIGV2ZW50cy4gV2lsbCBiZVxuICogICAgcHJlc2VudCBpZiBhIHNlY3JldCBpcyBzZXQuXG4gKi9cbmZ1bmN0aW9uIGdldExvYWRDb250ZXh0KGV2ZW50LCBjb250ZXh0KSB7XG4gIGxldCByYXdBdXRob3JpemF0aW9uU3RyaW5nO1xuICBsZXQgbmV0bGlmeUdyYXBoVG9rZW47XG5cbiAgaWYgKGV2ZW50LmF1dGhsaWZ5VG9rZW4gIT0gbnVsbCkge1xuICAgIG5ldGxpZnlHcmFwaFRva2VuID0gZXZlbnQuYXV0aGxpZnlUb2tlbjtcbiAgfVxuXG4gIGNvbnN0IGF1dGhIZWFkZXIgPSBldmVudC5oZWFkZXJzW1wiYXV0aG9yaXphdGlvblwiXTtcbiAgY29uc3QgZ3JhcGhTaWduYXR1cmVIZWFkZXIgPSBldmVudC5oZWFkZXJzW1wieC1uZXRsaWZ5LWdyYXBoLXNpZ25hdHVyZVwiXTtcblxuICBpZiAoYXV0aEhlYWRlciAhPSBudWxsICYmIC9CZWFyZXIgL2dpLnRlc3QoYXV0aEhlYWRlcikpIHtcbiAgICByYXdBdXRob3JpemF0aW9uU3RyaW5nID0gYXV0aEhlYWRlci5zcGxpdChcIiBcIilbMV07XG4gIH1cblxuICBjb25zdCBsb2FkQ29udGV4dCA9IHtcbiAgICBjbGllbnROZXRsaWZ5R3JhcGhBY2Nlc3NUb2tlbjogcmF3QXV0aG9yaXphdGlvblN0cmluZyxcbiAgICBuZXRsaWZ5R3JhcGhUb2tlbjogbmV0bGlmeUdyYXBoVG9rZW4sXG4gICAgbmV0bGlmeUdyYXBoU2lnbmF0dXJlOiBncmFwaFNpZ25hdHVyZUhlYWRlcixcbiAgfTtcblxuICAvLyBSZW1vdmUga2V5cyB3aXRoIHVuZGVmaW5lZCB2YWx1ZXNcbiAgT2JqZWN0LmtleXMobG9hZENvbnRleHQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmIChsb2FkQ29udGV4dFtrZXldID09IG51bGwpIHtcbiAgICAgIGRlbGV0ZSBsb2FkQ29udGV4dFtrZXldO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGxvYWRDb250ZXh0O1xufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcbiAgYnVpbGQsXG4gIGdldExvYWRDb250ZXh0LFxuICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9FbnJpcXVlL1NpdGVzL0Jpa28vYmlrb3dvcmQvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL0VucmlxdWUvU2l0ZXMvQmlrby9iaWtvd29yZC9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL0VucmlxdWUvU2l0ZXMvQmlrby9iaWtvd29yZC9hcHAvcm91dGVzL3JhbmtpbmcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9FbnJpcXVlL1NpdGVzL0Jpa28vYmlrb3dvcmQvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL0VucmlxdWUvU2l0ZXMvQmlrby9iaWtvd29yZC9hcHAvcm91dGVzL3BsYXkudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9yYW5raW5nXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9yYW5raW5nXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInJhbmtpbmdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3BsYXlcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3BsYXlcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicGxheVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IENvbmZpZ1Byb3ZpZGVyIH0gZnJvbSBcInJlYWN0LWF2YXRhclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwifi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IHNoYXJlZFN0eWxlcyBmcm9tIFwifi9zdHlsZXMvc2hhcmVkLmNzc1wiO1xuXG5pbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgbGlua3MgYXMgcGxheUxpbmtzIH0gZnJvbSBcIi4vcm91dGVzL3BsYXlcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHdvcmRzU2VydmljZSB9IGZyb20gXCIuL2NvcmUvc2VydmljZXMvd29yZHMuc2VydmljZVwiO1xuaW1wb3J0IHsgbG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gXCIuL2NvcmUvc2VydmljZXMvbG9jYWxTdG9yYWdlLnNlcnZpY2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH0sXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzaGFyZWRTdHlsZXMgfSxcbiAgICAuLi5wbGF5TGlua3MoKSxcbiAgXTtcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+ICh7IHRpdGxlOiBcIkJpa29Xb3JkbGVcIiB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudD5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG5mdW5jdGlvbiBEb2N1bWVudCh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZXNcIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxDb25maWdQcm92aWRlciBhdmF0YXJSZWRpcmVjdFVybD1cImh0dHBzOi8vYXZhdGFyLXJlZGlyZWN0LmFwcHNwb3QuY29tXCI+XG4gICAgICAgICAgPExheW91dD57Y2hpbGRyZW59PC9MYXlvdXQ+XG4gICAgICAgIDwvQ29uZmlnUHJvdmlkZXI+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHByZXZpb3VzU29sdXRpb24gPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldFNvbHV0aW9uKCk7XG4gICAgICBhd2FpdCB3b3Jkc1NlcnZpY2Uuc2V0V29yZE9mRGF5KCk7XG4gICAgICBpZiAocHJldmlvdXNTb2x1dGlvbiAhPT0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXRTb2x1dGlvbigpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2UucmVtb3ZlSXRlbShcImd1ZXNzZXNcIik7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgPFNjcmlwdHMgLz5cbiAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdyaWQsIGxpbmtzIGFzIEdyaWRMaW5rcyB9IGZyb20gXCJ+L2NvbXBvbmVudHMvR3JpZFwiO1xuaW1wb3J0IHsgS2V5Ym9hcmQsIGxpbmtzIGFzIEtleWJvYXJkTGlua3MgfSBmcm9tIFwifi9jb21wb25lbnRzL0tleWJvYXJkXCI7XG5pbXBvcnQgeyBTdGF0c01vZGFsLCBsaW5rcyBhcyBTdGF0c01vZGFsTGlua3MgfSBmcm9tIFwifi9jb21wb25lbnRzL1N0YXRzTW9kYWxcIjtcbmltcG9ydCB7IE1BWF9UUklFUywgV09SRF9MRU5HVEggfSBmcm9tIFwifi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGdhbWVTZXJ2aWNlLCBHYW1lU3RhdHMgfSBmcm9tIFwifi9jb3JlL3NlcnZpY2VzL2dhbWUuc2VydmljZVwiO1xuaW1wb3J0IHsgbG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gXCJ+L2NvcmUvc2VydmljZXMvbG9jYWxTdG9yYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7IHN0YXR1c1NlcnZpY2UgfSBmcm9tIFwifi9jb3JlL3NlcnZpY2VzL3N0YXR1cy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBnYW1lVXRpbHMgfSBmcm9tIFwifi9jb3JlL3V0aWxzL2dhbWVTdGF0dXMudXRpbHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gWy4uLkdyaWRMaW5rcygpLCAuLi5LZXlib2FyZExpbmtzKCksIC4uLlN0YXRzTW9kYWxMaW5rcygpXTtcbn1cblxuY29uc3QgUGxheSA9ICgpID0+IHtcbiAgY29uc3QgW2lzR2FtZVdvbiwgc2V0SXNHYW1lV29uXSA9IHVzZVN0YXRlPGJvb2xlYW4+KCk7XG4gIGNvbnN0IFtpc0dhbWVMb3N0LCBzZXRJc0dhbWVMb3N0XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3dvcmRDaGFyYWN0ZXJzLCBzZXRXb3JkQ2hhcmFjdGVyc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbZ3Vlc3Nlcywgc2V0R3Vlc3Nlc10gPSB1c2VTdGF0ZTxzdHJpbmdbXVtdPihbXSk7XG4gIGNvbnN0IFtzdGF0cywgc2V0U3RhdHNdID0gdXNlU3RhdGU8R2FtZVN0YXRzPigpO1xuICBjb25zdCBbc3RhdHNNb2RhbE9wZW5lZCwgc2V0U3RhdHNNb2RhbE9wZW5lZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtmaW5hbEdyYXBoLCBzZXRGaW5hbEdyYXBoXSA9IHVzZVN0YXRlPHN0cmluZ1tdW10+KFtdKTtcblxuICBjb25zdCBpc0dhbWVFbmRlZCA9IGlzR2FtZUxvc3QgfHwgaXNHYW1lV29uO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZGVkR3Vlc3NlcyA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0R3Vlc3NlcygpO1xuICAgIHNldEd1ZXNzZXMobG9hZGVkR3Vlc3Nlcyk7XG4gICAgY29uc3QgZ2FtZVN0YXRzID0gZ2FtZVNlcnZpY2UubG9hZFN0YXRzKCk7XG5cbiAgICBzZXRTdGF0cyhnYW1lU3RhdHMpO1xuXG4gICAgc2V0SXNHYW1lV29uKGdhbWVVdGlscy5jaGVja0dhbWVJc1dvbigpKTtcbiAgICBzZXRJc0dhbWVMb3N0KGdhbWVVdGlscy5jaGVja0dhbWVJc0xvc3QoKSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0dhbWVFbmRlZCkge1xuICAgICAgc2V0U3RhdHNNb2RhbE9wZW5lZCh0cnVlKTtcbiAgICAgIGNvbnN0IGJ1aWxkZWRGaW5hbEdyYXBoID0gc3RhdHVzU2VydmljZS5idWlsZEZpbmFsR3JhcGgoZ3Vlc3Nlcyk7XG4gICAgICBzZXRGaW5hbEdyYXBoKGJ1aWxkZWRGaW5hbEdyYXBoKTtcbiAgICB9XG4gIH0sIFtpc0dhbWVFbmRlZF0pO1xuXG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gKHByZXNzZWRLZXk6IHN0cmluZykgPT4ge1xuICAgIGlmIChpc0dhbWVFbmRlZCB8fCB3b3JkQ2hhcmFjdGVycy5sZW5ndGggPj0gV09SRF9MRU5HVEgpIHJldHVybjtcblxuICAgIHJldHVybiBzZXRXb3JkQ2hhcmFjdGVycygocHJldmlvdXM6IHN0cmluZ1tdKSA9PiBbLi4ucHJldmlvdXMsIHByZXNzZWRLZXldKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVFbnRlclByZXNzID0gKCkgPT4ge1xuICAgIGlmIChpc0dhbWVFbmRlZCB8fCB3b3JkQ2hhcmFjdGVycy5sZW5ndGggIT09IFdPUkRfTEVOR1RIKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0R3Vlc3NlcyhbLi4uZ3Vlc3Nlcywgd29yZENoYXJhY3RlcnNdKTtcbiAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEl0ZW0oXG4gICAgICBcImd1ZXNzZXNcIixcbiAgICAgIEpTT04uc3RyaW5naWZ5KFsuLi5ndWVzc2VzLCB3b3JkQ2hhcmFjdGVyc10pXG4gICAgKTtcbiAgICBzZXRXb3JkQ2hhcmFjdGVycyhbXSk7XG5cbiAgICBjb25zdCB3aW5uaW5nV29yZCA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0U29sdXRpb24oKTtcblxuICAgIGlmICh3b3JkQ2hhcmFjdGVycy5qb2luKFwiXCIpID09PSB3aW5uaW5nV29yZCkge1xuICAgICAgY29uc29sZS5sb2coXCJvbWcgeW91IHdvbiEhXCIpO1xuICAgICAgc2V0U3RhdHMoZ2FtZVNlcnZpY2Uuc2F2ZVN0YXRzKHN0YXRzLCBndWVzc2VzLmxlbmd0aCkpO1xuICAgICAgc2V0SXNHYW1lV29uKHRydWUpO1xuICAgIH1cblxuICAgIGlmIChndWVzc2VzLmxlbmd0aCA9PT0gTUFYX1RSSUVTIC0gMSkge1xuICAgICAgY29uc29sZS5sb2coXCJ5b3VyZSBhIGZ1Y2tpbmcgbW9mZXRcIik7XG4gICAgICBzZXRTdGF0cyhnYW1lU2VydmljZS5zYXZlU3RhdHMoc3RhdHMsIGd1ZXNzZXMubGVuZ3RoICsgMSkpO1xuICAgICAgc2V0SXNHYW1lTG9zdCh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlUHJlc3MgPSAoKSA9PiB7XG4gICAgaWYgKGlzR2FtZUVuZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHdvcmRDaGFyYWN0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBzZXRXb3JkQ2hhcmFjdGVycygocHJldmlvdXM6IHN0cmluZ1tdKSA9PiBwcmV2aW91cy5zbGljZSgwLCAtMSkpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R3JpZCBndWVzc2VzPXtndWVzc2VzfSBjdXJyZW50R3Vlc3M9e3dvcmRDaGFyYWN0ZXJzfSAvPlxuICAgICAgPEtleWJvYXJkXG4gICAgICAgIGd1ZXNzZXM9e2d1ZXNzZXN9XG4gICAgICAgIG9uS2V5UHJlc3M9e2hhbmRsZUtleVByZXNzfVxuICAgICAgICBvbkVudGVyUHJlc3M9e2hhbmRsZUVudGVyUHJlc3N9XG4gICAgICAgIG9uRGVsZXRlUHJlc3M9e2hhbmRsZURlbGV0ZVByZXNzfVxuICAgICAgLz5cbiAgICAgIDxTdGF0c01vZGFsXG4gICAgICAgIGlzT3Blbj17c3RhdHNNb2RhbE9wZW5lZH1cbiAgICAgICAgZmluYWxHcmFwaD17ZmluYWxHcmFwaH1cbiAgICAgICAgZ2FtZVdvbj17aXNHYW1lV29ufVxuICAgICAgICBzdGF0cz17c3RhdHN9XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFN0YXRzTW9kYWxPcGVuZWQoZmFsc2UpfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXk7XG4iLCAiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBFbXB0eVJvdywgbGlua3MgYXMgRW1wdHlSb3dMaW5rcyB9IGZyb20gXCIuLi9FbXB0eVJvd1wiO1xuaW1wb3J0IHsgUm93LCBsaW5rcyBhcyBSb3dMaW5rcyB9IGZyb20gXCIuLi9Sb3dcIjtcbmltcG9ydCB7IE1BWF9UUklFUyB9IGZyb20gXCJ+L2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfSxcbiAgICAuLi5FbXB0eVJvd0xpbmtzKCksXG4gICAgLi4uUm93TGlua3MoKSxcbiAgXTtcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZ3Vlc3Nlcz86IHN0cmluZ1tdW107XG4gIGN1cnJlbnRHdWVzcz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY29uc3QgR3JpZCA9ICh7IGd1ZXNzZXMgPSBbXSwgY3VycmVudEd1ZXNzIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IGVtcHR5Um93cyA9XG4gICAgZ3Vlc3Nlcy5sZW5ndGggPCBNQVhfVFJJRVMgLSAxXG4gICAgICA/IEFycmF5LmZyb20oQXJyYXkoTUFYX1RSSUVTIC0gMSAtIGd1ZXNzZXMubGVuZ3RoKSlcbiAgICAgIDogW107XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmQtZ3JpZFwiPlxuICAgICAge2d1ZXNzZXMubWFwKCh3b3JkLCBpbmRleCkgPT4gKFxuICAgICAgICA8Um93IGtleT17aW5kZXh9IGd1ZXNzPXt3b3JkfSBjb21wbGV0ZWQgLz5cbiAgICAgICkpfVxuICAgICAge2d1ZXNzZXMubGVuZ3RoIDwgTUFYX1RSSUVTICYmIDxSb3cgZ3Vlc3M9e2N1cnJlbnRHdWVzc30gLz59XG4gICAgICB7ZW1wdHlSb3dzLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgICAgPEVtcHR5Um93IGtleT17aW5kZXh9IC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHsgQ2VsbCwgbGlua3MgYXMgQ2VsbExpbmtzIH0gZnJvbSBcIi4uL0NlbGxcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gWy4uLkNlbGxMaW5rcygpXTtcbn1cblxuZXhwb3J0IGNvbnN0IEVtcHR5Um93ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3Vlc3Mtd29yZFwiPlxuICAgICAgPENlbGwgLz5cbiAgICAgIDxDZWxsIC8+XG4gICAgICA8Q2VsbCAvPlxuICAgICAgPENlbGwgLz5cbiAgICAgIDxDZWxsIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwgImV4cG9ydCB7IENlbGwsIGxpbmtzIH0gZnJvbSBcIi4vQ2VsbFwiO1xuIiwgImltcG9ydCB7IENoYXJTdGF0dXMgfSBmcm9tIFwifi9jb3JlL3NlcnZpY2VzL3N0YXR1cy5zZXJ2aWNlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZHJlbj86IGFueTtcbiAgc3RhdHVzPzogQ2hhclN0YXR1cztcbn1cblxuZXhwb3J0IGNvbnN0IENlbGwgPSAoeyBjaGlsZHJlbiwgc3RhdHVzIH06IFByb3BzKSA9PiB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YHdvcmQtY2VsbCAkeyEhc3RhdHVzICYmIHN0YXR1c31gfT57Y2hpbGRyZW59PC9kaXY+O1xufTtcbiIsICJleHBvcnQgeyBSb3csIGxpbmtzIH0gZnJvbSBcIi4vUm93XCI7XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFdPUkRfTEVOR1RIIH0gZnJvbSBcIn4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBDaGFyU3RhdHVzLCBzdGF0dXNTZXJ2aWNlIH0gZnJvbSBcIn4vY29yZS9zZXJ2aWNlcy9zdGF0dXMuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2VsbCwgbGlua3MgYXMgQ2VsbExpbmtzIH0gZnJvbSBcIi4uL0NlbGxcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZ3Vlc3M6IHN0cmluZ1tdO1xuICBjb21wbGV0ZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbLi4uQ2VsbExpbmtzKCldO1xufVxuXG5leHBvcnQgY29uc3QgUm93ID0gKHsgZ3Vlc3MsIGNvbXBsZXRlZCB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBbZ3Vlc3NTdGF0dXNdID0gdXNlU3RhdGU8Q2hhclN0YXR1c1tdPihcbiAgICAoKSA9PiAhIWNvbXBsZXRlZCAmJiBzdGF0dXNTZXJ2aWNlLmdldFdvcmRTdGF0dXMoZ3Vlc3MpXG4gICk7XG4gIGNvbnN0IGd1ZXNzTGVuZ3RoID0gZ3Vlc3M/Lmxlbmd0aCA/PyAwO1xuICBjb25zdCBlbXB0eUNlbGxzID0gQXJyYXkuZnJvbShBcnJheShXT1JEX0xFTkdUSCAtIGd1ZXNzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImd1ZXNzLXdvcmRcIj5cbiAgICAgIHtndWVzcz8ubWFwKChndWVzc0xldHRlcjogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgIDxDZWxsXG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICB7Li4uKCEhY29tcGxldGVkICYmIHtcbiAgICAgICAgICAgIHN0YXR1czogZ3Vlc3NTdGF0dXNbaW5kZXhdLFxuICAgICAgICAgIH0pfVxuICAgICAgICA+XG4gICAgICAgICAge2d1ZXNzTGV0dGVyfVxuICAgICAgICA8L0NlbGw+XG4gICAgICApKX1cbiAgICAgIHtlbXB0eUNlbGxzPy5tYXAoKF8sIGluZGV4KSA9PiAoXG4gICAgICAgIDxDZWxsIGtleT17aW5kZXh9IC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCAiZXhwb3J0IGNvbnN0IE1BWF9UUklFUyA9IDY7XG5leHBvcnQgY29uc3QgV09SRF9MRU5HVEggPSA1O1xuIiwgImltcG9ydCB7IGxvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2Uuc2VydmljZVwiO1xuXG5leHBvcnQgdHlwZSBDaGFyU3RhdHVzID0gXCJhYnNlbnRcIiB8IFwicHJlc2VudFwiIHwgXCJjb3JyZWN0XCIgfCBzdHJpbmc7XG5cbmNvbnN0IENIQVJfU1RBVFVTID0ge1xuICBhYnNlbnQ6IFwiYWJzZW50XCIsXG4gIHByZXNlbnQ6IFwicHJlc2VudFwiLFxuICBjb3JyZWN0OiBcImNvcnJlY3RcIixcbn07XG5cbmNvbnN0IGdldFdvcmRTdGF0dXMgPSAoZ3Vlc3M6IHN0cmluZ1tdKTogQ2hhclN0YXR1c1tdID0+IHtcbiAgY29uc3Qgc3BsaXRTb2x1dGlvbiA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0U29sdXRpb24oKS5zcGxpdChcIlwiKTtcbiAgY29uc3Qgc3BsaXRHdWVzcyA9IFsuLi5ndWVzc107XG5cbiAgY29uc3Qgc29sdXRpb25DaGFyc1Rha2VuID0gc3BsaXRTb2x1dGlvbi5tYXAoKF8pID0+IGZhbHNlKTtcblxuICBjb25zdCBzdGF0dXNlczogQ2hhclN0YXR1c1tdID0gWy4uLkFycmF5KGd1ZXNzLmxlbmd0aCldO1xuXG4gIHNwbGl0R3Vlc3MuZm9yRWFjaCgobGV0dGVyLCBpbmRleCkgPT4ge1xuICAgIGlmIChsZXR0ZXIgPT09IHNwbGl0U29sdXRpb25baW5kZXhdKSB7XG4gICAgICBzdGF0dXNlc1tpbmRleF0gPSBDSEFSX1NUQVRVUy5jb3JyZWN0O1xuICAgICAgc29sdXRpb25DaGFyc1Rha2VuW2luZGV4XSA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICBzcGxpdEd1ZXNzLmZvckVhY2goKGxldHRlciwgaW5kZXgpID0+IHtcbiAgICBpZiAoc3RhdHVzZXNbaW5kZXhdKSByZXR1cm47XG5cbiAgICBpZiAoIXNwbGl0U29sdXRpb24uaW5jbHVkZXMobGV0dGVyKSkge1xuICAgICAgcmV0dXJuIChzdGF0dXNlc1tpbmRleF0gPSBDSEFSX1NUQVRVUy5hYnNlbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IGluZGV4T2ZQcmVzZW50Q2hhciA9IHNwbGl0U29sdXRpb24uZmluZEluZGV4KFxuICAgICAgKGxldHRlclRvRmluZCwgaW5kZXgpID0+XG4gICAgICAgIGxldHRlclRvRmluZCA9PT0gbGV0dGVyICYmICFzb2x1dGlvbkNoYXJzVGFrZW5baW5kZXhdXG4gICAgKTtcblxuICAgIGlmIChpbmRleE9mUHJlc2VudENoYXIgPiAtMSkge1xuICAgICAgc3RhdHVzZXNbaW5kZXhdID0gQ0hBUl9TVEFUVVMucHJlc2VudDtcbiAgICAgIHJldHVybiAoc29sdXRpb25DaGFyc1Rha2VuW2luZGV4T2ZQcmVzZW50Q2hhcl0gPSB0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKHN0YXR1c2VzW2luZGV4XSA9IENIQVJfU1RBVFVTLmFic2VudCk7XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0dXNlcztcbn07XG5cbmNvbnN0IGJ1aWxkRmluYWxHcmFwaCA9IChndWVzc2VzOiBzdHJpbmdbXVtdKTogc3RyaW5nW11bXSA9PiB7XG4gIGNvbnN0IGd1ZXNzZXNXaXRoU3RhdHVzID0gZ3Vlc3Nlcy5tYXAoKGd1ZXNzKSA9PiBnZXRXb3JkU3RhdHVzKGd1ZXNzKSk7XG5cbiAgcmV0dXJuIGd1ZXNzZXNXaXRoU3RhdHVzLm1hcCgoZ3Vlc3NXaXRoU3RhdHVzKSA9PiB7XG4gICAgcmV0dXJuIGd1ZXNzV2l0aFN0YXR1cy5tYXAoKGxldHRlclN0YXR1cykgPT4ge1xuICAgICAgc3dpdGNoIChsZXR0ZXJTdGF0dXMpIHtcbiAgICAgICAgY2FzZSBcImNvcnJlY3RcIjpcbiAgICAgICAgICByZXR1cm4gXCJcdUQ4M0RcdURGRTlcIjtcbiAgICAgICAgY2FzZSBcInByZXNlbnRcIjpcbiAgICAgICAgICByZXR1cm4gXCJcdUQ4M0RcdURGRThcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gXCJcdTJCMUNcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRHdWVzc0NoYXJzU3RhdHVzID0gKCkgPT4ge1xuICBjb25zdCBndWVzc2VzID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXRHdWVzc2VzKCk7XG4gIGNvbnN0IGd1ZXNzZXNTdGF0dXMgPSBndWVzc2VzLm1hcCgoZ3Vlc3NXb3JkKSA9PiBnZXRXb3JkU3RhdHVzKGd1ZXNzV29yZCkpO1xuXG4gIGNvbnN0IGZsYXR0ZW5HdWVzc0NoYXJzU3RhdHVzID0gZ3Vlc3Nlc1xuICAgIC5tYXAoKGd1ZXNzLCBndWVzc0luZGV4KSA9PiB7XG4gICAgICByZXR1cm4gZ3Vlc3MubWFwKChndWVzc0NoYXIsIGd1ZXNzQ2hhckluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2V5OiBndWVzc0NoYXIsXG4gICAgICAgICAgc3RhdHVzOiBndWVzc2VzU3RhdHVzW2d1ZXNzSW5kZXhdW2d1ZXNzQ2hhckluZGV4XSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmZsYXQoKTtcblxuICBjb25zdCB1bmlmaWNhdGVkR3Vlc3NDaGFyU3RhdHVzID0gZmxhdHRlbkd1ZXNzQ2hhcnNTdGF0dXMubWFwKFxuICAgIChndWVzc0NoYXJTdGF0dXMpID0+IHtcbiAgICAgIGNvbnN0IGNoYXJVc2VzID0gZmxhdHRlbkd1ZXNzQ2hhcnNTdGF0dXMuZmlsdGVyKFxuICAgICAgICAoY2hhcikgPT4gY2hhci5rZXkgPT09IGd1ZXNzQ2hhclN0YXR1cy5rZXlcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHJldHVybktleSA9IHsga2V5OiBjaGFyVXNlc1swXS5rZXksIHN0YXR1czogQ0hBUl9TVEFUVVMuYWJzZW50IH07XG5cbiAgICAgIGlmIChjaGFyVXNlcy5maW5kKChjaGFyKSA9PiBjaGFyLnN0YXR1cyA9PT0gQ0hBUl9TVEFUVVMuY29ycmVjdCkpXG4gICAgICAgIHJldHVybiB7IC4uLnJldHVybktleSwgc3RhdHVzOiBDSEFSX1NUQVRVUy5jb3JyZWN0IH07XG4gICAgICBpZiAoY2hhclVzZXMuZmluZCgoY2hhcikgPT4gY2hhci5zdGF0dXMgPT09IENIQVJfU1RBVFVTLnByZXNlbnQpKVxuICAgICAgICByZXR1cm4geyAuLi5yZXR1cm5LZXksIHN0YXR1czogQ0hBUl9TVEFUVVMucHJlc2VudCB9O1xuICAgICAgcmV0dXJuIHJldHVybktleTtcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIHVuaWZpY2F0ZWRHdWVzc0NoYXJTdGF0dXM7XG59O1xuXG5leHBvcnQgY29uc3Qgc3RhdHVzU2VydmljZSA9IHtcbiAgZ2V0V29yZFN0YXR1cyxcbiAgYnVpbGRGaW5hbEdyYXBoLFxuICBnZXRHdWVzc0NoYXJzU3RhdHVzLFxufTtcbiIsICJpbXBvcnQgeyBHYW1lU3RhdHMgfSBmcm9tIFwiLi9nYW1lLnNlcnZpY2VcIjtcblxuY29uc3Qgc2F2ZVNvbHV0aW9uID0gKHNvbHV0aW9uOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZW5jb2RlZFNvbHV0aW9uID0gd2luZG93LmJ0b2Eoc29sdXRpb24pO1xuICBzZXRJdGVtKFwic29sdXRpb25cIiwgZW5jb2RlZFNvbHV0aW9uKTtcbn07XG5cbmNvbnN0IGdldFNvbHV0aW9uID0gKCkgPT4ge1xuICBjb25zdCBlbmNvZGVkU29sdXRpb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNvbHV0aW9uXCIpO1xuXG4gIHJldHVybiBlbmNvZGVkU29sdXRpb24gPyB3aW5kb3cuYXRvYihlbmNvZGVkU29sdXRpb24pIDogbnVsbDtcbn07XG5cbmNvbnN0IHNldEl0ZW0gPSAobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSA9PiB7XG4gIGNvbnN0IHN0cmluZ2lmaWVkVmFsdWUgPSB2YWx1ZTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBzdHJpbmdpZmllZFZhbHVlKTtcbn07XG5cbmNvbnN0IGdldEd1ZXNzZXMgPSAoKTogc3RyaW5nW11bXSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImd1ZXNzZXNcIik7XG4gIHJldHVybiBlbGVtZW50ID8gSlNPTi5wYXJzZShlbGVtZW50KSA6IFtdO1xufTtcblxuY29uc3QgcmVtb3ZlSXRlbSA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obmFtZSk7XG59O1xuXG5jb25zdCBsb2FkR2FtZVN0YXRlID0gKCkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ2FtZVN0YXRlXCIpO1xuICByZXR1cm4gc3RhdGUgPyBKU09OLnBhcnNlKHN0YXRlKSA6IG51bGw7XG59O1xuXG5jb25zdCBzYXZlR2FtZVN0YXRlID0gKHN0YXRzOiBHYW1lU3RhdHMpID0+IHtcbiAgc2V0SXRlbShcImdhbWVTdGF0ZVwiLCBKU09OLnN0cmluZ2lmeShzdGF0cykpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsU3RvcmFnZVNlcnZpY2UgPSB7XG4gIHNhdmVTb2x1dGlvbixcbiAgZ2V0U29sdXRpb24sXG4gIHNldEl0ZW0sXG4gIGdldEd1ZXNzZXMsXG4gIHJlbW92ZUl0ZW0sXG4gIGxvYWRHYW1lU3RhdGUsXG4gIHNhdmVHYW1lU3RhdGUsXG59O1xuIiwgImltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9LZXlib2FyZC5jc3NcIjtcbmltcG9ydCB7IEtleSwgbGlua3MgYXMga2V5U3R5bGVzIH0gZnJvbSBcIn4vY29tcG9uZW50cy9LZXlcIjtcbmltcG9ydCB7IEtFWVMgfSBmcm9tIFwiLi9LZXlzXCI7XG5pbXBvcnQgeyBzdGF0dXNTZXJ2aWNlIH0gZnJvbSBcIn4vY29yZS9zZXJ2aWNlcy9zdGF0dXMuc2VydmljZVwiO1xuXG5leHBvcnQgdHlwZSBLZXkgPSB7XG4gIHRleHQ6IHN0cmluZztcbiAga2V5OiBzdHJpbmc7XG59O1xuXG50eXBlIEtleWJvYXJkVHlwZSA9IHtcbiAgZ3Vlc3Nlczogc3RyaW5nW11bXTtcbiAgb25LZXlQcmVzczogRnVuY3Rpb247XG4gIG9uRW50ZXJQcmVzczogRnVuY3Rpb247XG4gIG9uRGVsZXRlUHJlc3M6IEZ1bmN0aW9uO1xufTtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gWy4uLmtleVN0eWxlcygpLCB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBLZXlib2FyZCh7XG4gIGd1ZXNzZXMsXG4gIG9uS2V5UHJlc3MsXG4gIG9uRW50ZXJQcmVzcyxcbiAgb25EZWxldGVQcmVzcyxcbn06IEtleWJvYXJkVHlwZSkge1xuICBjb25zdCBbdXNlZENoYXJzLCBzZXRVc2VkQ2hhcnNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblxuICBjb25zdCBvbktleVByZXNzQWN0aW9uOiBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbj4gPSB7XG4gICAgZW50ZXI6IG9uRW50ZXJQcmVzcyxcbiAgICBiYWNrc3BhY2U6IG9uRGVsZXRlUHJlc3MsXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlS2V5UHJlc3NlZCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVnZXggPSAvXlthLXpcXHUwMGYxXFx1MDBkMV0kL2dpO1xuICAgIGlmIChyZWdleC50ZXN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG9uS2V5UHJlc3ModmFsdWUudG9VcHBlckNhc2UoKSk7XG4gICAgfVxuICAgIGlmIChvbktleVByZXNzQWN0aW9uW3ZhbHVlLnRvTG93ZXJDYXNlKCldKSB7XG4gICAgICByZXR1cm4gb25LZXlQcmVzc0FjdGlvblt2YWx1ZS50b0xvd2VyQ2FzZSgpXSgpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFVzZWRDaGFycyhzdGF0dXNTZXJ2aWNlLmdldEd1ZXNzQ2hhcnNTdGF0dXMoKSk7XG4gIH0sIFtndWVzc2VzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaGFuZGxlS2V5UHJlc3NlZChldmVudC5rZXkpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGxpc3RlbmVyKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBsaXN0ZW5lcik7XG4gICAgfTtcbiAgfSwgW29uRW50ZXJQcmVzcywgb25EZWxldGVQcmVzcywgb25LZXlQcmVzc10pO1xuXG4gIGNvbnN0IGdldEtleVN0YXR1cyA9IChrZXk6IEtleSk6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgdXNlZENoYXIgPSB1c2VkQ2hhcnMuZmluZCgoY2hhcikgPT4ge1xuICAgICAgcmV0dXJuIGNoYXIua2V5ID09IGtleS50ZXh0LnRvVXBwZXJDYXNlKCk7XG4gICAgfSk7XG5cbiAgICBpZiAoIXVzZWRDaGFyKSByZXR1cm4gXCJcIjtcbiAgICByZXR1cm4gdXNlZENoYXIuc3RhdHVzO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJLZXlib2FyZFwiPlxuICAgICAge0tFWVMubWFwKChzaW5nbGVLZXk6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICA8S2V5XG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICBrZXlDb250ZW50PXtzaW5nbGVLZXl9XG4gICAgICAgICAgc3RhdHVzPXtnZXRLZXlTdGF0dXMoc2luZ2xlS2V5KX1cbiAgICAgICAgICBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc2VkfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEtleSBhcyBLZXlDb250ZW50VHlwZSB9IGZyb20gXCJ+L2NvbXBvbmVudHMvS2V5Ym9hcmRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vS2V5LmNzc1wiO1xuXG50eXBlIEtleVR5cGUgPSB7XG4gIHN0YXR1czogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBrZXlDb250ZW50OiBLZXlDb250ZW50VHlwZTtcbiAgb25LZXlQcmVzczogRnVuY3Rpb247XG59O1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfV07XG59O1xuXG5jb25zdCBjYXBpdGFsaXplID0gKHRleHQ6IHN0cmluZykgPT4ge1xuICByZXR1cm4gdGV4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRleHQuc2xpY2UoMSk7XG59O1xuXG5leHBvcnQgY29uc3QgS2V5ID0gKHsgc3RhdHVzLCBrZXlDb250ZW50LCBvbktleVByZXNzIH06IEtleVR5cGUpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e2BLZXkgJHshIXN0YXR1cyA/IHN0YXR1cyA6IFwiXCJ9YH1cbiAgICAgIG9uQ2xpY2s9eygpID0+IG9uS2V5UHJlc3Moa2V5Q29udGVudC5rZXkpfVxuICAgID5cbiAgICAgIDxwPntjYXBpdGFsaXplKGtleUNvbnRlbnQudGV4dCl9PC9wPlxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcbiIsICJleHBvcnQgY29uc3QgS0VZUyA9IFtcbiAge1xuICAgIHRleHQ6IFwicVwiLFxuICAgIGtleTogXCJxXCIsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIndcIixcbiAgICBrZXk6IFwid1wiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJlXCIsXG4gICAga2V5OiBcImVcIixcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiclwiLFxuICAgIGtleTogXCJyXCIsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcInRcIixcbiAgICBrZXk6IFwidFwiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJ5XCIsXG4gICAga2V5OiBcInlcIixcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwidVwiLFxuICAgIGtleTogXCJ1XCIsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcImlcIixcbiAgICBrZXk6IFwiaVwiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJvXCIsXG4gICAga2V5OiBcIm9cIixcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwicFwiLFxuICAgIGtleTogXCJwXCIsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcImFcIixcbiAgICBrZXk6IFwiYVwiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJzXCIsXG4gICAga2V5OiBcInNcIixcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiZFwiLFxuICAgIGtleTogXCJkXCIsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcImZcIixcbiAgICBrZXk6IFwiZlwiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJnXCIsXG4gICAga2V5OiBcImdcIixcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiaFwiLFxuICAgIGtleTogXCJoXCIsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcImpcIixcbiAgICBrZXk6IFwialwiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJrXCIsXG4gICAga2V5OiBcImtcIixcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwibFwiLFxuICAgIGtleTogXCJsXCIsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlx1MDBGMVwiLFxuICAgIGtleTogXCJcdTAwRjFcIixcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiR28hXCIsXG4gICAga2V5OiBcIkVudGVyXCIsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcInpcIixcbiAgICBrZXk6IFwielwiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJ4XCIsXG4gICAga2V5OiBcInhcIixcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiY1wiLFxuICAgIGtleTogXCJjXCIsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcInZcIixcbiAgICBrZXk6IFwidlwiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJiXCIsXG4gICAga2V5OiBcImJcIixcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiblwiLFxuICAgIGtleTogXCJuXCIsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIm1cIixcbiAgICBrZXk6IFwibVwiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJkZWxcIixcbiAgICBrZXk6IFwiQmFja3NwYWNlXCIsXG4gIH0sXG5dO1xuIiwgImV4cG9ydCB7IFN0YXRzTW9kYWwsIGxpbmtzIH0gZnJvbSBcIi4vU3RhdHNNb2RhbFwiO1xuIiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBHYW1lU3RhdHMgfSBmcm9tIFwifi9jb3JlL3NlcnZpY2VzL2dhbWUuc2VydmljZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgY2xvc2UgZnJvbSBcIn4vaW1hZ2VzL2Nsb3NlLnN2Z1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpc09wZW46IGJvb2xlYW47XG4gIGZpbmFsR3JhcGg6IHN0cmluZ1tdW107XG4gIGdhbWVXb246IGJvb2xlYW47XG4gIHN0YXRzOiBHYW1lU3RhdHM7XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbn07XG5cbmV4cG9ydCBjb25zdCBTdGF0c01vZGFsID0gKHtcbiAgaXNPcGVuLFxuICBmaW5hbEdyYXBoLFxuICBnYW1lV29uLFxuICBzdGF0cyxcbiAgb25DbG9zZSxcbn06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtjb3BpZWQsIHNldENvcGllZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGlmICghaXNPcGVuKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCB7IHRvdGFsR2FtZXMsIHN1Y2Nlc3NSYXRlLCB3aW5zVHJlZSwgZ2FtZXNGYWlsZWQgfSA9IHN0YXRzO1xuXG4gIGNvbnN0IGZhaWxlZFBlcmNlbnRhZ2UgPSAoZ2FtZXNGYWlsZWQgKiAxMDApIC8gdG90YWxHYW1lcztcbiAgY29uc3QgZmFpbGVkQmxvY2tzVG9TaG93ID0gTWF0aC5mbG9vcihmYWlsZWRQZXJjZW50YWdlIC8gMTApO1xuXG4gIGNvbnN0IGhhbmRsZUNvcHlDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCB0cmllcyA9XG4gICAgICBmaW5hbEdyYXBoLmxlbmd0aCAhPSA2ID8gZmluYWxHcmFwaC5sZW5ndGggOiBnYW1lV29uID8gNiA6IFwiWFwiO1xuICAgIGNvbnN0IHN0cmluZ2lmaWVkR3JhcGggPSBmaW5hbEdyYXBoXG4gICAgICAubWFwKChsaW5lR3JhcGgpID0+IGxpbmVHcmFwaC5qb2luKFwiXCIpKVxuICAgICAgLmpvaW4oXCJcXG5cIik7XG5cbiAgICBjb25zdCBtZXNzYWdlID0gYEJpa29Xb3JkbGUgJHt0cmllc30vNlxcblxcbiR7c3RyaW5naWZpZWRHcmFwaH1cXG5cXG4ke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59YDtcblxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KG1lc3NhZ2UpO1xuICAgIHNldENvcGllZCh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldENvcGllZChmYWxzZSksIDMwMDApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29waWVkVGV4dCAke2NvcGllZCA/IFwic2hvd1wiIDogXCJcIn1gfT5cbiAgICAgICAgXHUwMEExQ29waWFkbyBhbCBwb3J0YXBhcGVsZXMhXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudCBzdGF0c1wiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibW9kYWwtY2xvc2VcIiBzcmM9e2Nsb3NlfSBvbkNsaWNrPXtvbkNsb3NlfSAvPlxuXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICB7Z2FtZVdvbiA/IFwiXHUwMEExQXNcdTAwRUQgc2UgaGFjZSFcIiA6IFwiXHUwMEJGRW4gc2VyaW8/IFx1RDgzRVx1RERBOFwifVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0c01vZGFsX19ncmFwaFwiPlxuICAgICAgICAgICAge2ZpbmFsR3JhcGgubWFwKChndWVzc0dyYXBoKSA9PlxuICAgICAgICAgICAgICBndWVzc0dyYXBoLm1hcCgobGV0dGVyU3RhdHVzLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgbGV0dGVyU3RhdHVzLSR7aW5kZXh9YH0+e2xldHRlclN0YXR1c308L2Rpdj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0c01vZGFsX19zdGF0aXN0aWNcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0YXRzTW9kYWxfX3N0YXRcIj57dG90YWxHYW1lc308L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0YXRzTW9kYWxfX3N0YXRUaXRsZVwiPnBhcnRpZGFzPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGF0c01vZGFsX19zdGF0XCI+e3N1Y2Nlc3NSYXRlfSAlPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGF0c01vZGFsX19zdGF0VGl0bGVcIj52aWN0b3JpYXM8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRzTW9kYWxfX3dpbkRpc3RyaWJ1dGlvblwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlLTJcIj5EaXN0cmlidWNpXHUwMEYzbjwvaDM+XG4gICAgICAgICAgICB7d2luc1RyZWUubWFwKCh2aWN0b3JpZXMsIHdpbnNJbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gKHZpY3RvcmllcyAqIDEwMCkgLyB0b3RhbEdhbWVzO1xuICAgICAgICAgICAgICBjb25zdCBibG9ja3NUb1Nob3cgPSBNYXRoLmZsb29yKHBlcmNlbnRhZ2UgLyAxMCk7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3dpbnNJbmRleH0gY2xhc3NOYW1lPVwic3RhdHNNb2RhbF9fd2luQmFyXCI+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPnt3aW5zSW5kZXggKyAxfSAtPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICB7Wy4uLm5ldyBBcnJheShibG9ja3NUb1Nob3cpXS5tYXAoKF8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwic3RhdHNNb2RhbF9fd2luU3F1YXJlXCIgLz5cbiAgICAgICAgICAgICAgICAgICkpfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgIHtwZXJjZW50YWdlLnRvRml4ZWQoMCl9ICVcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0c01vZGFsX193aW5CYXJcIj5cbiAgICAgICAgICAgICAgPHN0cm9uZz5YIC08L3N0cm9uZz5cbiAgICAgICAgICAgICAge1suLi5uZXcgQXJyYXkoZmFpbGVkQmxvY2tzVG9TaG93KV0ubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17YGZhaWxlZC0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdGF0c01vZGFsX193aW5TcXVhcmVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfXtcIiBcIn1cbiAgICAgICAgICAgICAge2ZhaWxlZFBlcmNlbnRhZ2UudG9GaXhlZCgwKX0gJVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIHNlY29uZGFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNvcHlDbGlja30+XG4gICAgICAgICAgICAgIENvcGlhclxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuIiwgImltcG9ydCB7IE1BWF9UUklFUyB9IGZyb20gXCJ+L2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyByYW5raW5nU2VydmljZSB9IGZyb20gXCIuL3Jhbmtpbmcuc2VydmljZVwiO1xuaW1wb3J0IHsgc2NvcmluZ1NlcnZpY2UgfSBmcm9tIFwiLi9zY29yaW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7IHVzZXJDb29raWVTZXJ2aWNlIH0gZnJvbSBcIi4vdXNlckNvb2tpZS5zZXJ2aWNlXCI7XG5cbmV4cG9ydCB0eXBlIEdhbWVTdGF0cyA9IHtcbiAgd2luc1RyZWU6IG51bWJlcltdO1xuICBnYW1lc0ZhaWxlZDogbnVtYmVyO1xuICB0b3RhbEdhbWVzOiBudW1iZXI7XG4gIHN1Y2Nlc3NSYXRlOiBudW1iZXI7XG59O1xuXG5jb25zdCBkZWZhdWx0U3RhdHM6IEdhbWVTdGF0cyA9IHtcbiAgd2luc1RyZWU6IEFycmF5LmZyb20obmV3IEFycmF5KE1BWF9UUklFUyksICgpID0+IDApLFxuICBnYW1lc0ZhaWxlZDogMCxcbiAgdG90YWxHYW1lczogMCxcbiAgc3VjY2Vzc1JhdGU6IDAsXG59O1xuXG5jb25zdCBsb2FkU3RhdHMgPSAoKSA9PiB7XG4gIHJldHVybiBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmxvYWRHYW1lU3RhdGUoKSA/PyBkZWZhdWx0U3RhdHM7XG59O1xuXG5jb25zdCBnZXRTdWNjZXNzUmF0ZSA9IChnYW1lU3RhdHM6IEdhbWVTdGF0cykgPT4ge1xuICBjb25zdCB7IHRvdGFsR2FtZXMsIGdhbWVzRmFpbGVkIH0gPSBnYW1lU3RhdHM7XG5cbiAgcmV0dXJuIE1hdGgucm91bmQoXG4gICAgKDEwMCAqICh0b3RhbEdhbWVzIC0gZ2FtZXNGYWlsZWQpKSAvIE1hdGgubWF4KHRvdGFsR2FtZXMsIDEpXG4gICk7XG59O1xuXG5jb25zdCBzYXZlU3RhdHMgPSAoZ2FtZVN0YXRzOiBHYW1lU3RhdHMsIGluY29ycmVjdEd1ZXNzZXNCZWZvcmVFbmQ6IG51bWJlcikgPT4ge1xuICBjb25zdCBzdGF0cyA9IHsgLi4uZ2FtZVN0YXRzIH07XG5cbiAgc3RhdHMudG90YWxHYW1lcyArPSAxO1xuXG4gIGlmIChpbmNvcnJlY3RHdWVzc2VzQmVmb3JlRW5kID49IE1BWF9UUklFUykge1xuICAgIHN0YXRzLmdhbWVzRmFpbGVkICs9IDE7XG4gIH0gZWxzZSB7XG4gICAgc3RhdHMud2luc1RyZWVbaW5jb3JyZWN0R3Vlc3Nlc0JlZm9yZUVuZF0gKz0gMTtcbiAgfVxuXG4gIHN0YXRzLnN1Y2Nlc3NSYXRlID0gZ2V0U3VjY2Vzc1JhdGUoc3RhdHMpO1xuXG4gIGxvY2FsU3RvcmFnZVNlcnZpY2Uuc2F2ZUdhbWVTdGF0ZShzdGF0cyk7XG5cbiAgY29uc3QgdXNlciA9IHVzZXJDb29raWVTZXJ2aWNlLmdldFVzZXJGcm9tQ29va2llKCk7XG4gIGNvbnN0IHBsYXlTY29yZSA9IHNjb3JpbmdTZXJ2aWNlLmdldFRvdGFsUG9pbnRzKFxuICAgIGluY29ycmVjdEd1ZXNzZXNCZWZvcmVFbmQgKyAxXG4gICk7XG5cbiAgISF1c2VyICYmIHJhbmtpbmdTZXJ2aWNlLnNldFBlcnNvbmFsU2NvcmUodXNlciwgcGxheVNjb3JlKTtcblxuICByZXR1cm4gc3RhdHM7XG59O1xuXG5leHBvcnQgY29uc3QgZ2FtZVNlcnZpY2UgPSB7XG4gIGxvYWRTdGF0cyxcbiAgc2F2ZVN0YXRzLFxufTtcbiIsICJpbXBvcnQgeyBhcHAgfSBmcm9tIFwiLi4vaW5mcmFzdHJ1Y3R1cmUvZmlyZWJhc2VcIjtcbmltcG9ydCB7IGNoaWxkLCBnZXQsIGdldERhdGFiYXNlLCByZWYsIHNldCB9IGZyb20gXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXJDb29raWUuc2VydmljZVwiO1xuXG5jb25zdCBnZXRQZXJzb25hbFNjb3JlID0gYXN5bmMgKHVzZXI6IFVzZXIpOiBQcm9taXNlPG51bWJlcj4gPT4ge1xuICBjb25zdCBkYXRhYmFzZVJlZiA9IHJlZihnZXREYXRhYmFzZShhcHApKTtcblxuICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGdldChjaGlsZChkYXRhYmFzZVJlZiwgYHJhbmtpbmcvJHt1c2VyLmlkfWApKTtcblxuICBjb25zdCB1c2VyU2NvcmUgPSBzbmFwc2hvdC52YWwoKTtcblxuICByZXR1cm4gdXNlclNjb3JlPy5zY29yZSA/PyAwO1xufTtcblxuY29uc3QgZ2V0UHJvY2Vzc2VkTmFtZSA9IChuYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBzcGxpdGVkTmFtZSA9IG5hbWUuc3BsaXQoXCIgXCIpO1xuICBjb25zdCB1c2VmdWxTcGxpdHMgPSBzcGxpdGVkTmFtZS5zbGljZSgwLCAyKTtcblxuICBpZiAoIXVzZWZ1bFNwbGl0c1sxXSkge1xuICAgIHJldHVybiB1c2VmdWxTcGxpdHNbMF07XG4gIH1cblxuICB1c2VmdWxTcGxpdHNbMV0gPSB1c2VmdWxTcGxpdHNbMV0uY2hhckF0KDApO1xuXG4gIGNvbnN0IHByb2Nlc3NlZE5hbWUgPSB1c2VmdWxTcGxpdHMuam9pbihcIiBcIik7XG5cbiAgcmV0dXJuIHByb2Nlc3NlZE5hbWU7XG59O1xuXG5jb25zdCBzZXRQZXJzb25hbFNjb3JlID0gYXN5bmMgKHVzZXI6IFVzZXIsIHBvaW50czogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IGRhdGFiYXNlUmVmID0gcmVmKGdldERhdGFiYXNlKGFwcCkpO1xuXG4gIGNvbnN0IHByZXZpb3VzU2NvcmUgPSBhd2FpdCBnZXRQZXJzb25hbFNjb3JlKHVzZXIpO1xuXG4gIGNvbnN0IG5hbWVUb1Nob3cgPSBnZXRQcm9jZXNzZWROYW1lKHVzZXIuZGlzcGxheU5hbWUpO1xuXG4gIGF3YWl0IHNldChjaGlsZChkYXRhYmFzZVJlZiwgYHJhbmtpbmcvJHt1c2VyPy5pZH1gKSwge1xuICAgIGlkOiB1c2VyLmdvb2dsZUlkLFxuICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgIG5hbWU6IG5hbWVUb1Nob3csXG4gICAgcGhvdG86IHVzZXIuZGlzcGxheVBob3RvLFxuICAgIHNjb3JlOiBwcmV2aW91c1Njb3JlICsgcG9pbnRzLFxuICB9KTtcbn07XG5cbmNvbnN0IGdldFJhbmtpbmcgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRhdGFiYXNlUmVmID0gcmVmKGdldERhdGFiYXNlKGFwcCkpO1xuXG4gIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgZ2V0KGNoaWxkKGRhdGFiYXNlUmVmLCBcInJhbmtpbmdcIikpO1xuXG4gIGNvbnN0IHJhbmtpbmdEYXRhID0gc25hcHNob3QudmFsKCk7XG5cbiAgaWYgKCFyYW5raW5nRGF0YSkgcmV0dXJuIFtdO1xuXG4gIGNvbnN0IHJhbmtpbmdFbnRyaWVzID0gT2JqZWN0LmtleXMocmFua2luZ0RhdGEpO1xuXG4gIGNvbnN0IHJhbmtpbmdDb2xsZWN0aW9uID0gcmFua2luZ0VudHJpZXMubWFwKFxuICAgIChyYW5raW5nRW50cnkpID0+IHJhbmtpbmdEYXRhW3JhbmtpbmdFbnRyeV1cbiAgKTtcblxuICByZXR1cm4gcmFua2luZ0NvbGxlY3Rpb24uc29ydCgoc2NvcmVBLCBzY29yZUIpID0+XG4gICAgc2NvcmVBLnNjb3JlID4gc2NvcmVCLnNjb3JlID8gLTEgOiAxXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgcmFua2luZ1NlcnZpY2UgPSB7XG4gIGdldFBlcnNvbmFsU2NvcmUsXG4gIHNldFBlcnNvbmFsU2NvcmUsXG4gIGdldFJhbmtpbmcsXG59O1xuIiwgImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXRBdXRoLCBHb29nbGVBdXRoUHJvdmlkZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUFhNURreDBiaDFuY0l4cjRmRnJMM3FoQ0xrTVlYUFpIWVwiLFxuICBhdXRoRG9tYWluOiBcImJpa293b3JkLmZpcmViYXNlYXBwLmNvbVwiLFxuICBkYXRhYmFzZVVSTDpcbiAgICBcImh0dHBzOi8vYmlrb3dvcmQtZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcFwiLFxuICBwcm9qZWN0SWQ6IFwiYmlrb3dvcmRcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJiaWtvd29yZC5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI5NjkyOTg1NDk5NzhcIixcbiAgYXBwSWQ6IFwiMTo5NjkyOTg1NDk5Nzg6d2ViOjUxNDcyZWViNTU0YjQzMDcxNjk5ZTNcIixcbn07XG5cbmV4cG9ydCBjb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbmV4cG9ydCBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xuZXhwb3J0IGNvbnN0IGdvb2dsZVByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xuIiwgImltcG9ydCB7IHNjb3JpbmcgfSBmcm9tIFwiLi4vZG9tYWluL3Njb3JpbmcuY29uZmlnXCI7XG5cbmNvbnN0IGdldFRpbWluZ1BvaW50cyA9ICh0aW1lSW5TZWNvbmRzPzogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgaWYgKCF0aW1lSW5TZWNvbmRzKSByZXR1cm4gMDtcblxuICBjb25zdCBtaW51dGVzR3Vlc3NpbmcgPSB0aW1lSW5TZWNvbmRzIC8gNjA7XG4gIGNvbnN0IGhhc1JlbWFpbmluZ1NlY29uZHMgPSBtaW51dGVzR3Vlc3NpbmcgJSAyICE9PSAwO1xuICBjb25zdCB0aW1lUG9pbnRzID0gc2NvcmluZy50aW1pbmc7XG5cbiAgaWYgKG1pbnV0ZXNHdWVzc2luZyA8IDIgfHwgKG1pbnV0ZXNHdWVzc2luZyA9PT0gMiAmJiAhaGFzUmVtYWluaW5nU2Vjb25kcykpIHtcbiAgICByZXR1cm4gdGltZVBvaW50c1swXTtcbiAgfVxuXG4gIGlmIChtaW51dGVzR3Vlc3NpbmcgPCA0IHx8IChtaW51dGVzR3Vlc3NpbmcgPT09IDQgJiYgIWhhc1JlbWFpbmluZ1NlY29uZHMpKSB7XG4gICAgcmV0dXJuIHRpbWVQb2ludHNbMV07XG4gIH1cblxuICBpZiAobWludXRlc0d1ZXNzaW5nIDwgNiB8fCAobWludXRlc0d1ZXNzaW5nID09PSA2ICYmICFoYXNSZW1haW5pbmdTZWNvbmRzKSkge1xuICAgIHJldHVybiB0aW1lUG9pbnRzWzJdO1xuICB9XG5cbiAgaWYgKG1pbnV0ZXNHdWVzc2luZyA8IDggfHwgKG1pbnV0ZXNHdWVzc2luZyA9PT0gOCAmJiAhaGFzUmVtYWluaW5nU2Vjb25kcykpIHtcbiAgICByZXR1cm4gdGltZVBvaW50c1szXTtcbiAgfVxuXG4gIHJldHVybiAwO1xufTtcblxuY29uc3QgZ2V0VHJpZXNQb2ludHMgPSAodHJpZXM6IG51bWJlcik6IG51bWJlciA9PiB7XG4gIGNvbnN0IHRyeVBvaW50cyA9IHNjb3JpbmcudHJpZXM7XG4gIHJldHVybiB0cnlQb2ludHNbdHJpZXMgLSAxXTtcbn07XG5cbmNvbnN0IGdldFRvdGFsUG9pbnRzID0gKFxuICB0cmllczogbnVtYmVyLFxuICB0aW1lSW5TZWNvbmRzPzogbnVtYmVyLFxuICB0aW1lc0xldHRlcnNSZXBlYXRlZDogbnVtYmVyID0gMFxuKTogbnVtYmVyID0+IHtcbiAgY29uc3QgdHJpZXNQb2ludHMgPSBnZXRUcmllc1BvaW50cyh0cmllcyk7XG4gIGNvbnN0IHRpbWluZ1BvaW50cyA9IGdldFRpbWluZ1BvaW50cyh0aW1lSW5TZWNvbmRzKTtcbiAgY29uc3QgcmVwZWF0ZWRMZXR0ZXJzUG9pbnRzID0gdGltZXNMZXR0ZXJzUmVwZWF0ZWQgKiA1O1xuXG4gIHJldHVybiB0aW1pbmdQb2ludHMgKyB0cmllc1BvaW50cyAtIHJlcGVhdGVkTGV0dGVyc1BvaW50cztcbn07XG5cbmV4cG9ydCBjb25zdCBzY29yaW5nU2VydmljZSA9IHtcbiAgZ2V0VG90YWxQb2ludHMsXG59O1xuIiwgImV4cG9ydCBjb25zdCBzY29yaW5nID0ge1xuICB0aW1pbmc6IFsyMDAsIDEwMCwgNTAsIDI1XSxcbiAgdHJpZXM6IFszMDAsIDI1MCwgMTAwLCA1MCwgMjUsIDFdLFxufTtcbiIsICJpbXBvcnQgY29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XG4gIGlkOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gIGRpc3BsYXlQaG90bzogc3RyaW5nO1xuICBnb29nbGVJZDogc3RyaW5nO1xuICB0b2tlbjogc3RyaW5nO1xufVxuXG5jb25zdCBnZXRVc2VyRnJvbUNvb2tpZSA9ICgpOiBVc2VyIHwgdW5kZWZpbmVkID0+IHtcbiAgY29uc3QgY29va2llID0gY29va2llcy5nZXQoXCJhdXRoXCIpO1xuICBpZiAoIWNvb2tpZSkge1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gSlNPTi5wYXJzZShjb29raWUpO1xufTtcblxuY29uc3Qgc2V0VXNlckNvb2tpZSA9ICh1c2VyOiBVc2VyKSA9PiB7XG4gIGNvb2tpZXMuc2V0KFwiYXV0aFwiLCBKU09OLnN0cmluZ2lmeSh1c2VyKSwge1xuICAgIC8vIGZpcmViYXNlIGlkIHRva2VucyBleHBpcmUgaW4gb25lIGhvdXJcbiAgICAvLyBzZXQgY29va2llIGV4cGlyeSB0byBtYXRjaFxuICAgIGV4cGlyZXM6IDEgLyAyNCxcbiAgfSk7XG59O1xuXG5jb25zdCByZW1vdmVVc2VyQ29va2llID0gKCkgPT4gY29va2llcy5yZW1vdmUoXCJhdXRoXCIpO1xuXG5leHBvcnQgY29uc3QgdXNlckNvb2tpZVNlcnZpY2UgPSB7XG4gIGdldFVzZXJGcm9tQ29va2llLFxuICBzZXRVc2VyQ29va2llLFxuICByZW1vdmVVc2VyQ29va2llLFxufTtcbiIsICJpbXBvcnQgeyBNQVhfVFJJRVMgfSBmcm9tIFwifi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGxvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvbG9jYWxTdG9yYWdlLnNlcnZpY2VcIjtcblxuY29uc3QgY2hlY2tHYW1lSXNXb24gPSAoKSA9PiB7XG4gIGNvbnN0IHdpbm5pbmdXb3JkID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXRTb2x1dGlvbigpO1xuICBjb25zdCBndWVzc2VzID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXRHdWVzc2VzKCk7XG5cbiAgaWYgKCFndWVzc2VzKSByZXR1cm4gZmFsc2U7XG5cbiAgcmV0dXJuIChcbiAgICBndWVzc2VzLmZpbmQoKGd1ZXNzTGV0dGVycykgPT4gd2lubmluZ1dvcmQgPT09IGd1ZXNzTGV0dGVycy5qb2luKFwiXCIpKSAhPT1cbiAgICB1bmRlZmluZWRcbiAgKTtcbn07XG5cbmNvbnN0IGNoZWNrR2FtZUlzTG9zdCA9ICgpID0+IHtcbiAgY29uc3QgZ3Vlc3NlcyA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0R3Vlc3NlcygpO1xuXG4gIGlmICghZ3Vlc3NlcykgcmV0dXJuIGZhbHNlO1xuXG4gIHJldHVybiBndWVzc2VzLmxlbmd0aCA9PT0gTUFYX1RSSUVTICYmICFjaGVja0dhbWVJc1dvbigpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdhbWVVdGlscyA9IHtcbiAgY2hlY2tHYW1lSXNXb24sXG4gIGNoZWNrR2FtZUlzTG9zdCxcbn07XG4iLCAiZXhwb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4vSGVhZGVyXCI7XG4iLCAiaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gXCJ+L2hvb2tzL3VzZVVzZXJcIjtcbmltcG9ydCBsb2dvIGZyb20gXCJ+L2ltYWdlcy9Mb2dvLnN2Z1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBbaXNJbnZlcnRlZCwgc2V0SW52ZXJ0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IHVzZXIgfSA9IHVzZVVzZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSB3aW5kb3c/LmxvY2F0aW9uPy5wYXRobmFtZTtcblxuICAgIGlmIChwYXRoID09PSBcIi9yYW5raW5nXCIpIHtcbiAgICAgIHNldEludmVydGVkKHRydWUpO1xuICAgIH1cbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtpc0ludmVydGVkID8gXCJoZWFkZXIgaW52ZXJ0ZWRcIiA6IFwiaGVhZGVyXCJ9PlxuICAgICAgPE5hdkxpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiaGVhZGVyLWl0ZW1cIj5cbiAgICAgICAgPGltZyBzcmM9e2xvZ299IGFsdD1cImxvZ29cIiBjbGFzc05hbWU9XCJzaXRlLWxvZ29cIiAvPlxuICAgICAgPC9OYXZMaW5rPlxuICAgICAge3VzZXIgJiYgKFxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImhlYWRlci1pdGVtXCI+XG4gICAgICAgICAgICAgIEluaWNpb1xuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvcGxheVwiIGNsYXNzTmFtZT1cImhlYWRlci1pdGVtXCI+XG4gICAgICAgICAgICAgIFBhbGFicmEgZGVsIGRcdTAwRURhXG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TmF2TGluayB0bz1cIi9yYW5raW5nXCIgY2xhc3NOYW1lPVwiaGVhZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgUmFua2luZ1xuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICApfVxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJ+L2NvcmUvaW5mcmFzdHJ1Y3R1cmUvZmlyZWJhc2VcIjtcbmltcG9ydCB7IGxvZ2luU2VydmljZSB9IGZyb20gXCJ+L2NvcmUvc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHsgdXNlckNvb2tpZVNlcnZpY2UgfSBmcm9tIFwifi9jb3JlL3NlcnZpY2VzL3VzZXJDb29raWUuc2VydmljZVwiO1xuaW1wb3J0IHsgdXNlckRhdGFNYXBwZXIgfSBmcm9tIFwifi9jb3JlL3V0aWxzL3VzZXJEYXRhLm1hcHBlclwiO1xuXG5leHBvcnQgY29uc3QgdXNlVXNlciA9ICgpID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8T2JqZWN0PigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2FuY2VsQXV0aExpc3RlbmVyID0gb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsICh1c2VyKSA9PiB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IHVzZXJEYXRhTWFwcGVyLm1hcERhdGEodXNlcik7XG4gICAgICAgIHVzZXJDb29raWVTZXJ2aWNlLnNldFVzZXJDb29raWUodXNlckRhdGEpO1xuICAgICAgICByZXR1cm4gc2V0VXNlcih1c2VyRGF0YSk7XG4gICAgICB9XG5cbiAgICAgIHVzZXJDb29raWVTZXJ2aWNlLnJlbW92ZVVzZXJDb29raWUoKTtcbiAgICAgIHNldFVzZXIodW5kZWZpbmVkKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHVzZXJGcm9tQ29va2llID0gdXNlckNvb2tpZVNlcnZpY2UuZ2V0VXNlckZyb21Db29raWUoKTtcblxuICAgIGlmICghIXVzZXJGcm9tQ29va2llKSB7XG4gICAgICBzZXRVc2VyKHVzZXJGcm9tQ29va2llKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2FuY2VsQXV0aExpc3RlbmVyKCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICBsb2dpblNlcnZpY2Uuc2luZ091dEFwcCgpO1xuICAgIHNldFVzZXIodW5kZWZpbmVkKTtcbiAgfTtcblxuICByZXR1cm4geyB1c2VyLCBsb2dvdXQgfTtcbn07XG4iLCAiaW1wb3J0IHsgc2lnbkluV2l0aFBvcHVwLCBzaWduT3V0IH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGF1dGgsIGdvb2dsZVByb3ZpZGVyIH0gZnJvbSBcIi4uL2luZnJhc3RydWN0dXJlL2ZpcmViYXNlXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIHNpZ25JbkFwcCgpIHtcbiAgYXdhaXQgc2lnbkluV2l0aFBvcHVwKGF1dGgsIGdvb2dsZVByb3ZpZGVyKTtcbn1cblxuZnVuY3Rpb24gc2luZ091dEFwcCgpIHtcbiAgc2lnbk91dChhdXRoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGxvZ2luU2VydmljZSA9IHtcbiAgc2lnbkluQXBwLFxuICBzaW5nT3V0QXBwLFxufTtcbiIsICJjb25zdCBtYXBEYXRhID0gKHVzZXIpID0+IHtcbiAgY29uc3QgeyB1aWQsIGVtYWlsLCByZWZyZXNoVG9rZW4sIHByb3ZpZGVyRGF0YSwgZGlzcGxheU5hbWUgfSA9IHVzZXI7XG5cbiAgbGV0IGRpc3BsYXlQaG90bztcbiAgbGV0IGdvb2dsZUlkO1xuXG4gIHByb3ZpZGVyRGF0YS5tYXAoKHsgcGhvdG9VUkwsIHVpZCB9KSA9PiB7XG4gICAgZGlzcGxheVBob3RvID0gcGhvdG9VUkw7XG4gICAgZ29vZ2xlSWQgPSB1aWQ7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgaWQ6IHVpZCxcbiAgICBlbWFpbCxcbiAgICB0b2tlbjogcmVmcmVzaFRva2VuLFxuICAgIGRpc3BsYXlQaG90byxcbiAgICBnb29nbGVJZCxcbiAgICBkaXNwbGF5TmFtZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VyRGF0YU1hcHBlciA9IHtcbiAgbWFwRGF0YSxcbn07XG4iLCAiaW1wb3J0IHsgYXBwIH0gZnJvbSBcIi4uL2luZnJhc3RydWN0dXJlL2ZpcmViYXNlXCI7XG5pbXBvcnQgeyBjaGlsZCwgZ2V0LCBnZXREYXRhYmFzZSwgcmVmIH0gZnJvbSBcImZpcmViYXNlL2RhdGFiYXNlXCI7XG5pbXBvcnQgeyBsb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlLnNlcnZpY2VcIjtcblxuY29uc3QgZ2V0V29yZHMgPSBhc3luYyAoKTogc3RyaW5nW10gPT4ge1xuICBjb25zdCBkYXRhYmFzZVJlZiA9IHJlZihnZXREYXRhYmFzZShhcHApKTtcblxuICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGdldChjaGlsZChkYXRhYmFzZVJlZiwgXCJ3b3Jkc1wiKSk7XG5cbiAgcmV0dXJuIHNuYXBzaG90LnZhbCgpO1xufTtcblxuY29uc3Qgc2V0V29yZE9mRGF5ID0gYXN5bmMgKCk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHdvcmRzID0gYXdhaXQgZ2V0V29yZHMoKTtcbiAgLy8gSmFudWFyeSAxLCAyMDIyIEdhbWUgRXBvY2hcbiAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUoXCJKYW51YXJ5IDEsIDIwMjIgMDA6MDA6MDBcIikudmFsdWVPZigpO1xuICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICBjb25zdCBtc0luRGF5ID0gODY0MDAwMDA7XG4gIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcigobm93IC0gc3RhcnREYXRlKSAvIG1zSW5EYXkpO1xuXG4gIGxvY2FsU3RvcmFnZVNlcnZpY2Uuc2F2ZVNvbHV0aW9uKHdvcmRzW2luZGV4ICUgd29yZHMubGVuZ3RoXS50b1VwcGVyQ2FzZSgpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB3b3Jkc1NlcnZpY2UgPSB7XG4gIHNldFdvcmRPZkRheSxcbn07XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUG9kaXVtLCBsaW5rcyBhcyBQb2RpdW1MaW5rcyB9IGZyb20gXCJ+L2NvbXBvbmVudHMvUG9kaXVtXCI7XG5pbXBvcnQge1xuICBSYW5raW5nIGFzIFJhbmtpbmdMaXN0LFxuICBsaW5rcyBhcyBSYW5raW5nTGlua3MsXG59IGZyb20gXCJ+L2NvbXBvbmVudHMvUmFua2luZ1wiO1xuaW1wb3J0IHsgcmFua2luZ1NlcnZpY2UgfSBmcm9tIFwifi9jb3JlL3NlcnZpY2VzL3Jhbmtpbmcuc2VydmljZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbLi4uUG9kaXVtTGlua3MoKSwgLi4uUmFua2luZ0xpbmtzKCldO1xufVxuXG5jb25zdCBSYW5raW5nID0gKCkgPT4ge1xuICBjb25zdCBbcmFua2luZ0RhdGEsIHNldFJhbmtpbmdEYXRhXSA9IHVzZVN0YXRlPGFueVtdPigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByYW5raW5nU2VydmljZS5nZXRSYW5raW5nKCk7XG4gICAgICBzZXRSYW5raW5nRGF0YShkYXRhID8/IFtdKTtcbiAgICB9KSgpO1xuICB9LCBbXSk7XG5cbiAgaWYgKCFyYW5raW5nRGF0YSkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgcG9kaXVtRGF0YSA9IHJhbmtpbmdEYXRhLnNsaWNlKDAsIDMpO1xuICBjb25zdCByZXN0RGF0YSA9IHJhbmtpbmdEYXRhLnNsaWNlKDMpO1xuXG4gIGlmIChyYW5raW5nRGF0YS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm91dGVyXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc2FibGVkLXRleHQgY2VudGVyXCI+XG4gICAgICAgICAgUGFyZWNlIHF1ZSA8c3Ryb25nPm5hZGllPC9zdHJvbmc+IGhhIGNvbnNlZ3VpZG8gZGVzY2lmcmFyIGxhIHBhbGFicmFcbiAgICAgICAgICB0b2Rhdlx1MDBFRGEhXG4gICAgICAgIDwvcD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyYW5raW5nV3JhcHBlclwiPlxuICAgICAgeyEhcG9kaXVtRGF0YSAmJiA8UG9kaXVtIHBvZGl1bURhdGE9e3BvZGl1bURhdGEuc2xpY2UoMCwgMyl9IC8+fVxuXG4gICAgICB7ISFyZXN0RGF0YSAmJiAoXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInJhbmtpbmdcIj5cbiAgICAgICAgICA8UmFua2luZ0xpc3QgcmFua0RhdGE9e3Jlc3REYXRhfSAvPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICApfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmtpbmc7XG4iLCAiZXhwb3J0IHsgUG9kaXVtLCBsaW5rcyB9IGZyb20gXCIuL1BvZGl1bVwiO1xuIiwgImltcG9ydCBBdmF0YXIgZnJvbSBcInJlYWN0LWF2YXRhclwiO1xuaW1wb3J0IHsgTGlua3NGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Qb2RpdW0uY3NzXCI7XG5cbnR5cGUgUG9kaXVtID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBob3RvOiBzdHJpbmc7XG4gIHNjb3JlOiBudW1iZXI7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG59O1xuXG50eXBlIFByb3BzID0ge1xuICBwb2RpdW1EYXRhOiBQb2RpdW1bXTtcbn07XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbn07XG5cbmV4cG9ydCBjb25zdCBQb2RpdW0gPSAoeyBwb2RpdW1EYXRhIH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwicG9kaXVtXCI+XG4gICAgICB7cG9kaXVtRGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtgdG9wLSR7aW5kZXggKyAxfWB9PlxuICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgIHNyYz17ZGF0YS5waG90b31cbiAgICAgICAgICAgIGVtYWlsPXtkYXRhLmVtYWlsfVxuICAgICAgICAgICAgZ29vZ2xlSWQ9e2RhdGEuaWR9XG4gICAgICAgICAgICBuYW1lPXtkYXRhLm5hbWV9XG4gICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXZhdGFyXCJcbiAgICAgICAgICAgIHNpemU9XCI5MFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJEYXRhXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Bwb3NpdGlvbmB9PiN7aW5kZXggKyAxfTwvc3Bhbj4ge2RhdGEubmFtZX1cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNjb3JlXCI+e2RhdGEuc2NvcmV9IHB0czwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2FydGljbGU+XG4gICk7XG59O1xuIiwgImV4cG9ydCB7IFJhbmtpbmcsIGxpbmtzIH0gZnJvbSBcIi4vUmFua2luZ1wiO1xuIiwgImltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9SYW5raW5nLmNzc1wiO1xuXG50eXBlIFJhbmtlciA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBzY29yZTogbnVtYmVyO1xufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgcmFua0RhdGE6IFJhbmtlcltdO1xufTtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH1dO1xufTtcblxuZXhwb3J0IGNvbnN0IFJhbmtpbmcgPSAoeyByYW5rRGF0YSB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIHtyYW5rRGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJyYW5raW5nUm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc2l0aW9uXCI+I3tpbmRleCArIDR9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPntkYXRhLm5hbWV9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNjb3JlXCI+e2RhdGEuc2NvcmV9IHB0czwvcD5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICk7XG59O1xuIiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSBcIn4vaG9va3MvdXNlVXNlclwiO1xuaW1wb3J0IHsgUnVsZXNNb2RhbCwgbGlua3MgYXMgUnVsZXNNb2RhbExpbmtzIH0gZnJvbSBcIn4vY29tcG9uZW50cy9SdWxlc01vZGFsXCI7XG5pbXBvcnQgeyBsb2dpblNlcnZpY2UgfSBmcm9tIFwifi9jb3JlL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gWy4uLlJ1bGVzTW9kYWxMaW5rcygpXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgdXNlciwgbG9nb3V0IH0gPSB1c2VVc2VyKCk7XG4gIGNvbnN0IFtpc1J1bGVzTW9kYWxPcGVuLCBzZXRSdWxlc01vZGFsT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgbG9nT3V0ID0gKCkgPT4ge1xuICAgIGxvZ291dCgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJyb3V0ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZVwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICBCaWVudmVuaWRvIGEgPHN0cm9uZz5CaWtvV29yZGxlPC9zdHJvbmc+LDxiciAvPlxuICAgICAgICAgIFx1MDBBMUxhIG51ZXZhIGFwcCBkZSBCaWtvIDxzdHJvbmc+Y3VzdG9taXphZGE8L3N0cm9uZz4gcGFyYSBqdWdhciBhbFxuICAgICAgICAgIFdvcmRsZSFcbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBcdTAwQkZVbiBXb3JkbGUgcGFyYSBCaWtvPyBcdTAwQTFObyEgRWwgV29yZGxlIDxzdHJvbmc+ZGU8L3N0cm9uZz4gQmlrby5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBTaSBubyA8c3BhbiBjbGFzc05hbWU9XCJjcm9zc2VkXCI+Y29ub2Nlczwvc3Bhbj4gc2FiZXMgY1x1MDBGM21vIGZ1bmNpb25hIGVsXG4gICAgICAgICAganVlZ28sIGFxdVx1MDBFRCB0aWVuZXNcbiAgICAgICAgICA8c3Ryb25nXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbm5lci1saW5rIGN1c3RvbS1saW5rXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFJ1bGVzTW9kYWxPcGVuKHRydWUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIGFpdWRhXG4gICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlBlcm8gc2kgbG8gdGllbmVzIGNsYXJvLi4uPC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Rhcy13cmFwcGVyXCI+XG4gICAgICAgICAge3VzZXIgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvcGxheVwiIGNsYXNzTmFtZT1cImhlYWRlci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gcHJpbWFyeVwiPlx1MDBBMUEgSlVHQVIhPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gc2Vjb25kYXJ5XCIgb25DbGljaz17bG9nT3V0fT5cbiAgICAgICAgICAgICAgICBDZXJyYXIgc2VzaVx1MDBGM25cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHshdXNlciAmJiAoXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBwcmltYXJ5XCIgb25DbGljaz17bG9naW5TZXJ2aWNlLnNpZ25JbkFwcH0+XG4gICAgICAgICAgICAgIEluaWNpYSBzZXNpXHUwMEYzblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFJ1bGVzTW9kYWxcbiAgICAgICAgICBpc09wZW49e2lzUnVsZXNNb2RhbE9wZW59XG4gICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0UnVsZXNNb2RhbE9wZW4oZmFsc2UpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgUnVsZXNNb2RhbCwgbGlua3MgfSBmcm9tIFwiLi9SdWxlc01vZGFsXCI7XG4iLCAiaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgY2xvc2UgZnJvbSBcIn4vaW1hZ2VzL2Nsb3NlLnN2Z1wiO1xuaW1wb3J0IHsgU2FtcGxlUm93IH0gZnJvbSBcIi4uL1NhbXBsZVJvd1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9SdWxlc01vZGFsLmNzc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpc09wZW46IGJvb2xlYW47XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbn07XG5cbmV4cG9ydCBjb25zdCBSdWxlc01vZGFsID0gKHsgaXNPcGVuID0gdHJ1ZSwgb25DbG9zZSB9OiBQcm9wcykgPT4ge1xuICBpZiAoIWlzT3BlbikgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibW9kYWwtY2xvc2VcIiBzcmM9e2Nsb3NlfSBvbkNsaWNrPXtvbkNsb3NlfSAvPlxuXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPlx1MDBCRkNcdTAwRjNtbyBqdWdhcj88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBBZGl2aW5hIGxhIDxzdHJvbmc+cGFsYWJyYSBvY3VsdGE8L3N0cm9uZz4gZW4gc2VpcyBpbnRlbnRvcy5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBDYWRhIGludGVudG8gZGViZSBzZXIgdW5hIDxzdHJvbmc+cGFsYWJyYSB2XHUwMEUxbGlkYTwvc3Ryb25nPiBkZSA1IGxldHJhcy5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBEZXNwdVx1MDBFOXMgZGUgY2FkYSBpbnRlbnRvIDxzdHJvbmc+ZWwgY29sb3IgZGUgbGFzIGxldHJhcyBjYW1iaWE8L3N0cm9uZz57XCIgXCJ9XG4gICAgICAgICAgcGFyYSBtb3N0cmFyIHF1XHUwMEU5IHRhbiBjZXJjYSBlc3RcdTAwRTFzIGRlIGFjZXJ0YXIgbGEgcGFsYWJyYS5cbiAgICAgICAgPC9wPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUtMlwiPkVqZW1wbG9zPC9oMz5cbiAgICAgICAgPFNhbXBsZVJvd1xuICAgICAgICAgIGd1ZXNzPXtbXG4gICAgICAgICAgICB7IGtleTogXCJHXCIsIHN0YXR1czogXCJjb3JyZWN0XCIgfSxcbiAgICAgICAgICAgIHsga2V5OiBcIkFcIiwgc3RhdHVzOiBcIlwiIH0sXG4gICAgICAgICAgICB7IGtleTogXCJUXCIsIHN0YXR1czogXCJcIiB9LFxuICAgICAgICAgICAgeyBrZXk6IFwiT1wiLCBzdGF0dXM6IFwiXCIgfSxcbiAgICAgICAgICAgIHsga2V5OiBcIlNcIiwgc3RhdHVzOiBcIlwiIH0sXG4gICAgICAgICAgXX1cbiAgICAgICAgLz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgTGEgbGV0cmEgPHN0cm9uZz5HPC9zdHJvbmc+IGVzdFx1MDBFMSBlbiBsYSBwYWxhYnJhIHkgZW4gbGF7XCIgXCJ9XG4gICAgICAgICAgPHN0cm9uZz5wb3NpY2lcdTAwRjNuIGNvcnJlY3RhLjwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxTYW1wbGVSb3dcbiAgICAgICAgICBndWVzcz17W1xuICAgICAgICAgICAgeyBrZXk6IFwiVlwiLCBzdGF0dXM6IFwiXCIgfSxcbiAgICAgICAgICAgIHsga2V5OiBcIk9cIiwgc3RhdHVzOiBcIlwiIH0sXG4gICAgICAgICAgICB7IGtleTogXCJDXCIsIHN0YXR1czogXCJwcmVzZW50XCIgfSxcbiAgICAgICAgICAgIHsga2V5OiBcIkFcIiwgc3RhdHVzOiBcIlwiIH0sXG4gICAgICAgICAgICB7IGtleTogXCJMXCIsIHN0YXR1czogXCJcIiB9LFxuICAgICAgICAgIF19XG4gICAgICAgIC8+XG4gICAgICAgIDxwPlxuICAgICAgICAgIExhIGxldHJhIDxzdHJvbmc+Qzwvc3Ryb25nPiBlc3RcdTAwRTEgZW4gbGEgcGFsYWJyYSBwZXJvIGVuIGxhe1wiIFwifVxuICAgICAgICAgIDxzdHJvbmc+cG9zaWNpXHUwMEYzbiBpbmNvcnJlY3RhLjwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxTYW1wbGVSb3dcbiAgICAgICAgICBndWVzcz17W1xuICAgICAgICAgICAgeyBrZXk6IFwiQ1wiLCBzdGF0dXM6IFwiXCIgfSxcbiAgICAgICAgICAgIHsga2V5OiBcIkFcIiwgc3RhdHVzOiBcIlwiIH0sXG4gICAgICAgICAgICB7IGtleTogXCJOXCIsIHN0YXR1czogXCJcIiB9LFxuICAgICAgICAgICAgeyBrZXk6IFwiVFwiLCBzdGF0dXM6IFwiXCIgfSxcbiAgICAgICAgICAgIHsga2V5OiBcIk9cIiwgc3RhdHVzOiBcImFic2VudFwiIH0sXG4gICAgICAgICAgXX1cbiAgICAgICAgLz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgTGEgbGV0cmEgPHN0cm9uZz5PIG5vIGVzdFx1MDBFMTwvc3Ryb25nPiBlbiBsYSBwYWxhYnJhLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFB1ZWRlIGhhYmVyIGxldHJhcyByZXBldGlkYXMuIExhcyBwaXN0YXMgc29uIGluZGVwZW5kaWVudGVzIHBhcmEgY2FkYVxuICAgICAgICAgIGxldHJhLlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCAiZXhwb3J0IHsgU2FtcGxlUm93IH0gZnJvbSBcIi4vU2FtcGxlUm93XCI7XG4iLCAiaW1wb3J0IHsgQ2VsbCwgbGlua3MgYXMgQ2VsbExpbmtzIH0gZnJvbSBcIi4uL0NlbGxcIjtcblxudHlwZSBHdWVzc0xldHRlciA9IHtcbiAga2V5OiBzdHJpbmc7XG4gIHN0YXR1czogXCJhYnNlbnRcIiB8IFwicHJlc2VudFwiIHwgXCJjb3JyZWN0XCIgfCBzdHJpbmc7XG59O1xuaW50ZXJmYWNlIFByb3BzIHtcbiAgZ3Vlc3M6IEd1ZXNzTGV0dGVyW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFsuLi5DZWxsTGlua3MoKV07XG59XG5cbmV4cG9ydCBjb25zdCBTYW1wbGVSb3cgPSAoeyBndWVzcyB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3Vlc3Mtd29yZFwiPlxuICAgICAge2d1ZXNzPy5tYXAoKGd1ZXNzTGV0dGVyOiBHdWVzc0xldHRlciwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICA8Q2VsbCBrZXk9e2luZGV4fSBzdGF0dXM9e2d1ZXNzTGV0dGVyLnN0YXR1c30+XG4gICAgICAgICAge2d1ZXNzTGV0dGVyLmtleX1cbiAgICAgICAgPC9DZWxsPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdyaWQsIGxpbmtzIGFzIEdyaWRMaW5rcyB9IGZyb20gXCJ+L2NvbXBvbmVudHMvR3JpZFwiO1xuaW1wb3J0IHsgS2V5Ym9hcmQsIGxpbmtzIGFzIEtleWJvYXJkTGlua3MgfSBmcm9tIFwifi9jb21wb25lbnRzL0tleWJvYXJkXCI7XG5pbXBvcnQgeyBTdGF0c01vZGFsLCBsaW5rcyBhcyBTdGF0c01vZGFsTGlua3MgfSBmcm9tIFwifi9jb21wb25lbnRzL1N0YXRzTW9kYWxcIjtcbmltcG9ydCB7IE1BWF9UUklFUywgV09SRF9MRU5HVEggfSBmcm9tIFwifi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGdhbWVTZXJ2aWNlLCBHYW1lU3RhdHMgfSBmcm9tIFwifi9jb3JlL3NlcnZpY2VzL2dhbWUuc2VydmljZVwiO1xuaW1wb3J0IHsgbG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gXCJ+L2NvcmUvc2VydmljZXMvbG9jYWxTdG9yYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7IHN0YXR1c1NlcnZpY2UgfSBmcm9tIFwifi9jb3JlL3NlcnZpY2VzL3N0YXR1cy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBnYW1lVXRpbHMgfSBmcm9tIFwifi9jb3JlL3V0aWxzL2dhbWVTdGF0dXMudXRpbHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gWy4uLkdyaWRMaW5rcygpLCAuLi5LZXlib2FyZExpbmtzKCksIC4uLlN0YXRzTW9kYWxMaW5rcygpXTtcbn1cblxuY29uc3QgUGxheSA9ICgpID0+IHtcbiAgY29uc3QgW2lzR2FtZVdvbiwgc2V0SXNHYW1lV29uXSA9IHVzZVN0YXRlPGJvb2xlYW4+KCk7XG4gIGNvbnN0IFtpc0dhbWVMb3N0LCBzZXRJc0dhbWVMb3N0XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3dvcmRDaGFyYWN0ZXJzLCBzZXRXb3JkQ2hhcmFjdGVyc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbZ3Vlc3Nlcywgc2V0R3Vlc3Nlc10gPSB1c2VTdGF0ZTxzdHJpbmdbXVtdPihbXSk7XG4gIGNvbnN0IFtzdGF0cywgc2V0U3RhdHNdID0gdXNlU3RhdGU8R2FtZVN0YXRzPigpO1xuICBjb25zdCBbc3RhdHNNb2RhbE9wZW5lZCwgc2V0U3RhdHNNb2RhbE9wZW5lZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtmaW5hbEdyYXBoLCBzZXRGaW5hbEdyYXBoXSA9IHVzZVN0YXRlPHN0cmluZ1tdW10+KFtdKTtcblxuICBjb25zdCBpc0dhbWVFbmRlZCA9IGlzR2FtZUxvc3QgfHwgaXNHYW1lV29uO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZGVkR3Vlc3NlcyA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0R3Vlc3NlcygpO1xuICAgIHNldEd1ZXNzZXMobG9hZGVkR3Vlc3Nlcyk7XG4gICAgY29uc3QgZ2FtZVN0YXRzID0gZ2FtZVNlcnZpY2UubG9hZFN0YXRzKCk7XG5cbiAgICBzZXRTdGF0cyhnYW1lU3RhdHMpO1xuXG4gICAgc2V0SXNHYW1lV29uKGdhbWVVdGlscy5jaGVja0dhbWVJc1dvbigpKTtcbiAgICBzZXRJc0dhbWVMb3N0KGdhbWVVdGlscy5jaGVja0dhbWVJc0xvc3QoKSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0dhbWVFbmRlZCkge1xuICAgICAgc2V0U3RhdHNNb2RhbE9wZW5lZCh0cnVlKTtcbiAgICAgIGNvbnN0IGJ1aWxkZWRGaW5hbEdyYXBoID0gc3RhdHVzU2VydmljZS5idWlsZEZpbmFsR3JhcGgoZ3Vlc3Nlcyk7XG4gICAgICBzZXRGaW5hbEdyYXBoKGJ1aWxkZWRGaW5hbEdyYXBoKTtcbiAgICB9XG4gIH0sIFtpc0dhbWVFbmRlZF0pO1xuXG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gKHByZXNzZWRLZXk6IHN0cmluZykgPT4ge1xuICAgIGlmIChpc0dhbWVFbmRlZCB8fCB3b3JkQ2hhcmFjdGVycy5sZW5ndGggPj0gV09SRF9MRU5HVEgpIHJldHVybjtcblxuICAgIHJldHVybiBzZXRXb3JkQ2hhcmFjdGVycygocHJldmlvdXM6IHN0cmluZ1tdKSA9PiBbLi4ucHJldmlvdXMsIHByZXNzZWRLZXldKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVFbnRlclByZXNzID0gKCkgPT4ge1xuICAgIGlmIChpc0dhbWVFbmRlZCB8fCB3b3JkQ2hhcmFjdGVycy5sZW5ndGggIT09IFdPUkRfTEVOR1RIKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0R3Vlc3NlcyhbLi4uZ3Vlc3Nlcywgd29yZENoYXJhY3RlcnNdKTtcbiAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEl0ZW0oXG4gICAgICBcImd1ZXNzZXNcIixcbiAgICAgIEpTT04uc3RyaW5naWZ5KFsuLi5ndWVzc2VzLCB3b3JkQ2hhcmFjdGVyc10pXG4gICAgKTtcbiAgICBzZXRXb3JkQ2hhcmFjdGVycyhbXSk7XG5cbiAgICBjb25zdCB3aW5uaW5nV29yZCA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0U29sdXRpb24oKTtcblxuICAgIGlmICh3b3JkQ2hhcmFjdGVycy5qb2luKFwiXCIpID09PSB3aW5uaW5nV29yZCkge1xuICAgICAgY29uc29sZS5sb2coXCJvbWcgeW91IHdvbiEhXCIpO1xuICAgICAgc2V0U3RhdHMoZ2FtZVNlcnZpY2Uuc2F2ZVN0YXRzKHN0YXRzLCBndWVzc2VzLmxlbmd0aCkpO1xuICAgICAgc2V0SXNHYW1lV29uKHRydWUpO1xuICAgIH1cblxuICAgIGlmIChndWVzc2VzLmxlbmd0aCA9PT0gTUFYX1RSSUVTIC0gMSkge1xuICAgICAgY29uc29sZS5sb2coXCJ5b3VyZSBhIGZ1Y2tpbmcgbW9mZXRcIik7XG4gICAgICBzZXRTdGF0cyhnYW1lU2VydmljZS5zYXZlU3RhdHMoc3RhdHMsIGd1ZXNzZXMubGVuZ3RoICsgMSkpO1xuICAgICAgc2V0SXNHYW1lTG9zdCh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlUHJlc3MgPSAoKSA9PiB7XG4gICAgaWYgKGlzR2FtZUVuZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHdvcmRDaGFyYWN0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBzZXRXb3JkQ2hhcmFjdGVycygocHJldmlvdXM6IHN0cmluZ1tdKSA9PiBwcmV2aW91cy5zbGljZSgwLCAtMSkpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R3JpZCBndWVzc2VzPXtndWVzc2VzfSBjdXJyZW50R3Vlc3M9e3dvcmRDaGFyYWN0ZXJzfSAvPlxuICAgICAgPEtleWJvYXJkXG4gICAgICAgIGd1ZXNzZXM9e2d1ZXNzZXN9XG4gICAgICAgIG9uS2V5UHJlc3M9e2hhbmRsZUtleVByZXNzfVxuICAgICAgICBvbkVudGVyUHJlc3M9e2hhbmRsZUVudGVyUHJlc3N9XG4gICAgICAgIG9uRGVsZXRlUHJlc3M9e2hhbmRsZURlbGV0ZVByZXNzfVxuICAgICAgLz5cbiAgICAgIDxTdGF0c01vZGFsXG4gICAgICAgIGlzT3Blbj17c3RhdHNNb2RhbE9wZW5lZH1cbiAgICAgICAgZmluYWxHcmFwaD17ZmluYWxHcmFwaH1cbiAgICAgICAgZ2FtZVdvbj17aXNHYW1lV29ufVxuICAgICAgICBzdGF0cz17c3RhdHN9XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFN0YXRzTW9kYWxPcGVuZWQoZmFsc2UpfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXk7XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonYjhiOGJlYjAnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LTdCTjdYWlJELmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1CSE9LQk5SSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdMR0VCVTNELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUDJGVEdQT1guanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LVBIV1ZGNTRKLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zTjdNSVpIUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVEyTVk1SkdWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSk1CUkM3WDcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1CNzM2N1hBQy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUI0NU1LUlJMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV0EyUzZJWlMuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVpZSUdPQVZNLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcGxheSc6eydpZCc6J3JvdXRlcy9wbGF5JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3BsYXknLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcGxheS1ZU05ZUFVYRC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3JhbmtpbmcnOnsnaWQnOidyb3V0ZXMvcmFua2luZycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidyYW5raW5nJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3JhbmtpbmctUEoyNUs0RUYuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtQjhCOEJFQjAuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FB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QyxVQUFEO0FBQUEsSUFDRSxXQUFXLE9BQU8sQ0FBQyxDQUFDLFNBQVMsU0FBUztBQUFBLElBQ3RDLFNBQVMsTUFBTSxXQUFXLFdBQVc7QUFBQSxLQUVyQyxvQ0FBQyxLQUFELE1BQUksV0FBVyxXQUFXO0FBQUE7OztBQ3hCaEM7QUFBTyxJQUFNLE9BQU87QUFBQSxFQUNsQjtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBO0FBQUEsRUFFUDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBO0FBQUEsRUFFUDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBO0FBQUEsRUFFUDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBO0FBQUEsRUFFUDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBO0FBQUEsRUFFUDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBO0FBQUEsRUFFUDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBO0FBQUEsRUFFUDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBO0FBQUEsRUFFUDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBO0FBQUEsRUFFUDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBO0FBQUEsRUFFUDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBO0FBQUEsRUFFUDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBO0FBQUEsRUFFUDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBO0FBQUEsRUFFUDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBO0FBQUEsRUFFUDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBO0FBQUEsRUFFUDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBO0FBQUEsRUFFUDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04s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
