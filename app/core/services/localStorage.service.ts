const saveSolution = (solution: string) => {
  const encodedSolution = window.btoa(window.btoa(solution));
  localStorage.setItem("solution", encodedSolution);
};

const getSolution = () => {
  const encodedSolution = localStorage.getItem("solution");
  return window.atob(window.atob(encodedSolution));
};

const setItem = (name: string, value: string[][]) => {
  const stringifiedValue = JSON.stringify(value);

  localStorage.setItem(name, stringifiedValue);
};

const getItem = (name: string) => {
  const element = localStorage.getItem(name);
  return JSON.parse(element);
};

const removeItem = (name: string) => {
  localStorage.removeItem(name);
};

export const localStorageService = {
  saveSolution,
  getSolution,
  setItem,
  getItem,
  removeItem,
};
