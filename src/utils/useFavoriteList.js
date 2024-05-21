// composables/useFavoriteList.js
import { useGamesStore } from "@/stores/games";
import { useToast } from "primevue/usetoast";
import { computed } from "vue";

export function useFavoriteList(game) {
  const gamesStore = useGamesStore();
  const toast = useToast();

  const favorites = computed(() => gamesStore.favorites);

  const isFavorite = computed(() => favorites.value.includes(game.id));

  const addToMyList = () => {
    gamesStore.addFavorite(game.id);
    toast.add({
      severity: "success",
      life: 3000,
      summary: "Succès",
      detail: `${game.name} a été ajouté à votre liste`,
    });
  };

  const removeFromMyList = () => {
    gamesStore.removeFavorite(game.id);
    toast.add({
      severity: "error",
      life: 3000,
      summary: "Retiré",
      detail: `${game.name} a été retiré de votre liste`,
    });
  };

  return {
    favorites,
    isFavorite,
    addToMyList,
    removeFromMyList,
  };
}
