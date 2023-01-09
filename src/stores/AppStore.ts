import { makeAutoObservable } from "mobx";

const AppStore = () => {
  makeAutoObservable({
    searchQuery: "",
    handleSearchQueryChange(query: string) {
      this.searchQuery = query;
    },
  });
};

export default AppStore;
