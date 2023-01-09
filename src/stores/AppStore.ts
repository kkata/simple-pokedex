import { makeAutoObservable } from "mobx";

const AppStore = () => {
  return makeAutoObservable({
    searchQuery: "",
    scrollPosition: 0,
    handleSearchQueryChange(value: string) {
      this.searchQuery = value;
    },
    handleScrollPositionChange(value: number) {
      this.scrollPosition = value;
    },
  });
};

export default AppStore;
