const baseURL = 'https://pixabay.com/api/';
const apiKey = '33135653-4734ab6feb6e20c316e4b7aea';

export const fetchData = (searchName, page) => {
  return fetch(
    `${baseURL}?key=${apiKey}&q=${searchName}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Error'));
  });
};
