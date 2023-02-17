import { fFetchProfile, fFetchRepos } from "./fetchFunctions";
import { fMakeMainProfileEl } from "./createEl";


export const fSearch = async (e) => {
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
  fMakeMainProfileEl(avatar_url, bio, created_at, followers, following, login, name, allRepos);
}

document.querySelector('.search').addEventListener('click', fSearch);


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