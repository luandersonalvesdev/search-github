const fGetFromLocalStorage = () => {
  const allFavs = localStorage.getItem('fav-profiles');
  return allFavs ? JSON.parse(allFavs) : [];
};

export const fSaveLocalStorage = (name) => {
  const allFavs = fGetFromLocalStorage();
  if (allFavs.includes(name)) {
    alert('Usuário já está nos favoritos.');
    return;
  }
  const newFav = [...allFavs, name];
  localStorage.setItem('fav-profiles', JSON.stringify(newFav));
};
