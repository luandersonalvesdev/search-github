import { fetchProfile, fetchRepos } from "./fetchFunctions";


export const fSearch = async (e) => {
  e.preventDefault();
  const inputValue = document.querySelector('#inputName').value;
  const {
    avatar_url, bio, created_at,
    followers, following, login, name
  } = await fetchProfile(inputValue);
  
  if(!login) {
    console.log('USER NAO ENCONTRADO');
    return;
  }
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