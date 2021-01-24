export const LOAD = 'posts/LOAD'
export const LOADED = 'posts/LOADED'
export const ERROR = 'posts/ERROR'

const initialState = {
    isLoading: false,
    posts: [],
    error: null,
}

export const loadPosts = () => async dispatch => {
    try {
        dispatch({ type: LOAD })
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()
        dispatch({type: LOADED, posts})
    } catch (error) {
        dispatch({ type: ERROR, error })
    }
}

export const getPosts = state => state.posts.posts
export const getIsPostsLoading = state => state.posts.isLoading
export const getPostsError = state => state.posts.error

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                isLoading: true,
            }
        case LOADED:
            return {
                ...state,
                posts: action.posts,
                isLoading: false,
            }
        case ERROR:
            return {
                ...state,
                error: action.error,
            }
        default:
            return state
    }
}
