import { fFetchProfile, fFetchRepos } from "./fetchFunctions";
import { fMakeFavsProfileEl } from "./createEl";

const fGetFromLocalStorage = () => {
  const allFavs = localStorage.getItem('fav-profiles');
  return allFavs ? JSON.parse(allFavs) : [];
};

export const fSaveLocalStorage = (name) => {
  const allFavs = fGetFromLocalStorage();
  if (allFavs.includes(name)) {
    alert('Usuário já está nos favoritos.');
    return false;
  }
  const newFav = [...allFavs, name];
  localStorage.setItem('fav-profiles', JSON.stringify(newFav));
};

export const fGetAndShowFavorites = () => {
  const gContainerFavEl = document.querySelector('.container-favorite');
  const allFavs = fGetFromLocalStorage();
  if (allFavs.length > 0) {
    allFavs.forEach(async (userName) => {
      const response = fFetchProfile(userName);
      const {
        avatar_url, bio, created_at,
        followers, following, login, name
      } = await response[0];
      const allRepos = await response[1];
      fMakeFavsProfileEl( avatar_url, bio, created_at, followers, following, login, name, allRepos );
    });
    return;
  };
  gContainerFavEl.innerText = 'Nenhum favorito salvo';
  return;
}