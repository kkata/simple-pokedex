import { makeAutoObservable } from "mobx";

const AppStore = () => {
  return makeAutoObservable({
    searchQuery: "",
    handleSearchQueryChange(value: string) {
      this.searchQuery = value;
    },
  });
};

export default AppStore;
