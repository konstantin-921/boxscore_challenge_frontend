const apiUrl = process.env.NODE_ENV === 'production' ? 'http://3.92.175.31/' : process.env.PORT_API_URL;

const config = {
  BASE_URL: apiUrl,
}

export default config