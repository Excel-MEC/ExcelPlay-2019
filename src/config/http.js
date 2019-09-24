export const post = (url, data) => {
  return fetch(url, {
    method: 'POST',
    body: data,
  })
    .then(res => res.json())
    .catch(err => err);
};

export const get = url => {
  return fetch(url, {
    credentials: 'include',
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};
