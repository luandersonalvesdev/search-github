const fGetFromLocalStorage = () => {
  const allFavs = localStorage.getItem('fav-profiles');
  return allFavs ? JSON.parse(allFavs) : [];
};

export const fSaveLocalStorage = (name) => {
  const allFavs = fGetFromLocalStorage();
  const newFav = [...allFavs, name];
  localStorage.setItem('fav-profiles', JSON.stringify(newFav));
};
