/* eslint-disable linebreak-style */
const URL_BACKEND_SERVER = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'http://portalflix.herokuapp.com';

export default {
  URL_BACKEND_SERVER
};