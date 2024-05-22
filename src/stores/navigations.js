import { defineStore } from "pinia";

export const useNavigationsStore = defineStore("navigations", {
  state: () => ({
    redirectedFromGame: false,
  }),
  actions: {
    setRedirectedFromGame(value) {
      this.redirectedFromGame = value;
    },
  },
});
