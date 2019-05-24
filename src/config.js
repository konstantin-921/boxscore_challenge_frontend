const apiUrl = process.env.NODE_ENV === 'production' ? 'http://18.205.171.18/' : process.env.REACT_APP_PORT_API_URL;

const config = {
  BASE_URL: apiUrl,
}

export default config