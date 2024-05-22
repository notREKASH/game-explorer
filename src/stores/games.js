// stores/games.js
import { defineStore } from "pinia";

export const useGamesStore = defineStore("games", {
  state: () => ({
    games: [],
    similarGames: [],
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
          body: `fields *,artworks.url, cover.url, videos.video_id, genres.name, involved_companies.company, age_ratings.rating, similar_games; where id = ${id};`,
        });
        const game = await response.json();
        this.gameDetails = game[0];

        // Fetch company names and system requirements
        if (game[0].involved_companies) {
          const companyIds = game[0].involved_companies.map(
            (company) => company.company
          );
          const companies = await this.fetchCompanyNames(companyIds);
          game[0].companies = companies;
        }

        if (game[0].similar_games) {
          const similarGames = game[0].similar_games.map((game) => game);
          const similarGamesDetails = await this.fetchSimilarGames(
            similarGames
          );
          const fourSimilarGames = similarGamesDetails.slice(0, 4);
          this.similarGames = fourSimilarGames;
        }

        if (game[0].rating) {
          game[0].rating = game[0].rating / 20;
        }
        this.loading = false;
        return game;
      } catch (error) {
        console.error("error", error);
        this.loading = false;
      }
    },
    async fetchCompanyNames(companyIds) {
      this.loading = true;
      try {
        const response = await fetch(`/api/companies`, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
          },
          body: `fields name; where id = (${companyIds});`,
        });
        const companies = await response.json();
        this.loading = false;
        return companies;
      } catch (error) {
        this.loading = false;
      }
    },
    async fetchSimilarGames(id) {
      this.loading = true;
      try {
        const response = await fetch(`/api/games`, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
          },
          body: `fields name,cover.url; where id = (${id});`,
        });
        const games = await response.json();
        this.loading = false;
        return games;
      } catch (error) {
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
