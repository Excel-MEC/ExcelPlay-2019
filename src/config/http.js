export const post = (url, data) => {
  return fetch(url, {
    method: 'POST',
    body: data
  })
    .then(res => res.json())
    .catch(err => err);
};

export const get = url =>
  fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err));
