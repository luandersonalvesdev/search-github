import { fFetchProfile, fFetchRepos } from "./fetchFunctions";
import { fMakeMainProfileEl } from "./createEl";
import { fSaveLocalStorage } from "./favoriteLocalStorage";

const gBtnFavorite = document.querySelector('.favorite');

const fFavorite = () => {
  const gNameValue = document.querySelector('.container-profile .login').innerText;
  fSaveLocalStorage(gNameValue);
}

const fSearch = async (e) => {
  e.preventDefault();
  const inputValue = document.querySelector('#inputName').value;
  const {
    avatar_url, bio, created_at,
    followers, following, login, name
  } = await fFetchProfile(inputValue);
  
  if(!login) {
    console.log('USER NAO ENCONTRADO');
    return;
  }
  const allRepos = await fFetchRepos(inputValue);
  fMakeMainProfileEl(avatar_url, bio, created_at, followers, following, login, name, allRepos);
  fEnabledDisabled();
}

const fEnabledDisabled = () => {
  const gName = document.querySelector('.container-profile .login');
  // console.log(gName);
  if (gName === null) {
    gBtnFavorite.setAttribute('disabled', '');
  } else {
    gBtnFavorite.removeAttribute('disabled');
  }
}

document.querySelector('.search').addEventListener('click', fSearch);
gBtnFavorite.addEventListener('click', fFavorite);

window.onload = () => {
  fEnabledDisabled();
}
// avatar_url - foto 
// bio - estudante de de... 
// created_at - data de criacao 
// followers - seguidores 
// following - seguindo 
// login - o @ 
// name - o nome 

// em repos.... 
// um array de objetos dos repositorios públicos 
// O OBJETO TEM: 
// created_at - data de criacao 
// homepage - onde o site ta hospedado 
// name - nome do projeto 
//