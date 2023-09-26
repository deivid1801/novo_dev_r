import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGQwMDhjYjY0YTU3MjAzNDA3MThiNTk1NWU3M2I2YSIsInN1YiI6IjY1MDlhYTMyOGE4OGIyMDBlMzlmNDZiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hCVSiz2EtUz9YlTrqr4hRzk0ybQ1lt98E0qHm9VnAh8`
  }
})

export default api