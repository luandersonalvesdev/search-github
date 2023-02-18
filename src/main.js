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
    const gContainerProf = document.querySelector('.container-profile');
    gContainerProf.innerHTML = 'Usuário não encontrado';
    fEnabledDisabledFavBtn();
    return;
  }
  const allRepos = await fFetchRepos(inputValue);
  fMakeMainProfileEl(avatar_url, bio, created_at, followers, following, login, name, allRepos);
  fEnabledDisabledFavBtn();
}

const fEnabledDisabledFavBtn = () => {
  const gName = document.querySelector('.container-profile .login');
  if (!gName) {
    gBtnFavorite.setAttribute('disabled', '');
  } else {
    gBtnFavorite.removeAttribute('disabled');
  }
}

document.querySelector('.search').addEventListener('click', fSearch);
gBtnFavorite.addEventListener('click', fFavorite);

window.onload = () => {
  fEnabledDisabledFavBtn();
}
