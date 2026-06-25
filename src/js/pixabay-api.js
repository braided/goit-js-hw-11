import axios from 'axios';

export function getImage(name) {
  return axios
    .get(
      `https://pixabay.com/api/?key=55607491-fd459ee64175eeb9e585f94df&q=${name}&image_type=photo&orientation=horizontal&safesearch=true`
    )
    .then(response => response.data);
}