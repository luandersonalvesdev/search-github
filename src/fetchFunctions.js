export const fFetchRepos = (userObj) => {
  const URL_REPOS = `https://api.github.com/users/${userObj}/repos`;
  return fetch(URL_REPOS)
    .then((response) => response.json())
    .then((data) => data);
}


export const fFetchProfile = (userName) => {
  const URL_PROFILE = `https://api.github.com/users/${userName}`;
  return fetch(URL_PROFILE)
    .then((response) => response.json())
    .then((data) => data)
    .catch((e) => e);
}

