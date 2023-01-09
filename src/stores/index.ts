import { createContext, useContext } from "react";
import AppStore from "./AppStore";

const store = {
  app: AppStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext) as typeof store;
};

export default store;
