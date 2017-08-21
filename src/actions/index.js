export const FETCH_POSTS = 'fetch_posts'
import axios from 'axios'
const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=Me12333'

export function fetchPosts () {
  console.log('fetching!')
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  return {
    type: FETCH_POSTS,
    payload: request
  }
}