const gContainerProfileEl = document.querySelector('.container-profile');

const fMakeContainerRepos = (repos) => {
  const sortRepos = repos.sort((repoA, repoB) => {
    if (repoA.created_at > repoB.created_at) {
      return 1;
    }
    if (repoA.created_at < repoB.created_at) {
      return -1;
    }
    return 0;
  });
  
  const gContainerRepos = document.querySelector('.container-repos');
  sortRepos.forEach((repo) => {
    const cNameEl = document.createElement('a');
    cNameEl.classList.add('repo');
    cNameEl.innerHTML = repo.name;
    cNameEl.href = `${repo.owner.html_url}/${repo.name}`;
    cNameEl.target = '_blank';
    gContainerRepos.appendChild(cNameEl);
  });
}

const fMakeEl = (toUse, tag, classToAdd) => {
  const cEl = document.createElement(tag);
  tag === 'img' ? cEl.src = toUse : cEl.innerHTML = toUse;
  cEl.classList.add(classToAdd);
  gContainerProfileEl.appendChild(cEl);
}

const fMakeObj = (...rest) => {
  const [avatar_url, bio, created_at, followers, following, login, name] = rest;
  return [
    {
      toUse: avatar_url,
      tag: 'img',
      classToAdd: 'photo-profile',
    },
    {
      toUse: bio,
      tag: 'h4',
      classToAdd: 'bio',
    },
    {
      toUse: created_at,
      tag: 'p',
      classToAdd: 'created',
    },
    {
      toUse: followers,
      tag: 'span',
      classToAdd: 'photo-followers',
    },
    {
      toUse: following,
      tag: 'span',
      classToAdd: 'following',
    },
    {
      toUse: login,
      tag: 'h3',
      classToAdd: 'login',
    },
    {
      toUse: name,
      tag: 'h2',
      classToAdd: 'fullName',
    },
  ]
}

export const fMakeMainProfileEl = (...rest) => {
  const [avatar_url, bio, created_at, followers, following, login, name, allRepos] = rest;
  const convertCreatedAt = Array.from((created_at.slice(0, 10)).split('-')).reverse().join('/');
  const allInfos = fMakeObj(avatar_url, bio, convertCreatedAt, followers, following, login, name);
  gContainerProfileEl.innerHTML = '';
  allInfos.forEach((info) => {
    fMakeEl(info.toUse, info.tag, info.classToAdd);
  });
  const cSectionRepos = document.createElement('section');
  cSectionRepos.classList.add('container-repos');
  gContainerProfileEl.appendChild(cSectionRepos);
  fMakeContainerRepos(allRepos);
}

// img, h4, p, p, p, h3, h2, 