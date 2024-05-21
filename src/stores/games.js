// stores/games.js
import { defineStore } from "pinia";

export const useGamesStore = defineStore("games", {
  state: () => ({
    games: [],
    favorites: [],
    gameDetails: {},
    searchQuery: "",
    loading: false,
  }),
  getters: {
    favoriteGames: (state) => state.favorites,
  },
  actions: {
    async searchGames(query) {
      this.loading = true;
      try {
        const response = await fetch(`/api/games`, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
          },
          body: `search "${query}"; fields name,cover.url,first_release_date,summary;`,
        });
        const games = await response.json();
        this.loading = false;
        this.games = games;
      } catch (error) {
        console.error(error);
        this.loading = false;
      }
    },
    async fetchTopGames() {
      this.loading = true;
      try {
        const response = await fetch(`/api/games`, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
          },
          body: `fields name,cover.url,first_release_date,summary; sort total_rating_count desc;`,
        });
        const games = await response.json();
        this.games = games;
        this.loading = false;
      } catch (error) {
        console.error(error);
        this.loading = false;
      }
    },
    async fetchGameDetails(id) {
      this.loading = true;
      try {
        const response = await fetch(`/api/games`, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
          },
          body: `fields *,artworks.url, videos.video_id; where id = ${id};`,
        });
        const game = await response.json();
        this.gameDetails = game[0];
        this.loading = false;
        return game;
      } catch (error) {
        console.error("error", error);
        this.loading = false;
      }
    },
    addFavorite(gameId) {
      if (!this.favorites.includes(gameId)) {
        this.favorites.push(gameId);
      }
    },
    removeFavorite(gameId) {
      this.favorites = this.favorites.filter((id) => id !== gameId);
    },
  },
});
