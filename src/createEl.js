const gContainerProfileEl = document.querySelector('.container-profile');

const fMakeEl = (toUse, tag, classToAdd) => {
  const cEl = document.createElement(tag);
  tag === 'img' ? cEl.src = toUse : cEl.innerHTML = toUse;
  cEl.classList.add(classToAdd);
  gContainerProfileEl.appendChild(cEl);
}

const fMakeObj = (...rest) => {
  const [avatar_url, bio, created_at, followers, following, login, name, allRepos] = rest;
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
  const allInfos = fMakeObj(avatar_url, bio, created_at, followers, following, login, name, allRepos);
  gContainerProfileEl.innerHTML = '';
  allInfos.forEach((info) => {
    fMakeEl(info.toUse, info.tag, info.classToAdd);
  });
  
}

// img, h4, p, p, p, h3, h2, 