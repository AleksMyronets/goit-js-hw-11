import axios from 'axios';

export class MakeAPI {

  BASE_URL = 'https://pixabay.com/api/';
  API_KEY  = 'key=34880746-04cbac759a7a46edf3541baa4';

  photo = null;
  page = 1;
  perPage = 40;

  async fetchPhoto() {
    try {
      return await axios.get(
        `${this.BASE_URL}?${this.API_KEY}&q=${this.photo}&per_page=${this.perPage}&page=${this.page}&image_type=photo&orientation=horizontal&safesearch=true`
      );
    } catch (error) {
      throw new Error(error.message);
      };
    };
}