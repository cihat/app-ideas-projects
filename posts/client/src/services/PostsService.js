import Api from './Api';

export default {
  fetchPosts() {
    return Api().get('posts')
  }
}