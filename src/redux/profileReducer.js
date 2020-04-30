import {
    ADD_POST,
    SET_CURRENT_PROFILE_ID,
    SET_PROFILE,
    SET_PROFILE_STATUS,
    TOGGLE_IS_LOADING,
    SET_PHOTO, SET_POSTS
} from "./actionTypes";
import {profileAPI} from "../api/api";


let initialState = {
    profile: null,
    currentProfileId: null,
    isLoading: false,
    profileStatus: null,
    posts: []
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload
            }

        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case SET_CURRENT_PROFILE_ID:
            return {
                ...state,
                currentProfileId: action.currentProfileId,
            }

        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }

        case SET_PROFILE_STATUS:
            return {
                ...state,
                profileStatus: action.profileStatus
            }

        case SET_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.payload}
            }


        default:
            return state
    }
}

export const setPostsAction = (payload) => (
    {type: SET_POSTS, payload}
)

export const setProfile = profile => (
    {type: SET_PROFILE, profile}
)

export const setPhotoAC = payload => (
    {type: SET_PHOTO, payload}
)

export const setProfileStatusAction = profileStatus => (
    {type: SET_PROFILE_STATUS, profileStatus}
)

export const setCurrentProfileId = currentProfileId => (
    {type: SET_CURRENT_PROFILE_ID, currentProfileId}
)

export const toggleIsLoading = (isLoading) => ({
    type: TOGGLE_IS_LOADING, isLoading
})

export const getProfile = (userId) => async dispatch => {
    dispatch(toggleIsLoading(true))
    const data = await profileAPI.getProfile(userId)
    const status = await profileAPI.getStatus(userId)
    const posts = await profileAPI.getPosts()
    dispatch(setProfileStatusAction(status))
    dispatch(setProfile(data))
    dispatch(setPostsAction(posts))
    dispatch(setCurrentProfileId(userId))
    dispatch(toggleIsLoading(false))
}

export const getProfileStatus = (userId) => async dispatch => {
    const data = await profileAPI.getStatus(userId)
    dispatch(setProfileStatusAction(data))
}

export const setProfileStatus = (status) => async dispatch => {
    const data = profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setProfileStatusAction(status))
    }
}

export const updateProfileInfo = (profileId, profileData) => async dispatch => {
    await profileAPI.updateProfileInfo(profileData)
}

export const setPhoto = (photo) => async dispatch => {
    const data = await profileAPI.setPhoto(photo)
    dispatch(setPhotoAC(data.data.photos))
}

export const addPost = (post) => async dispatch => {
    await profileAPI.addPost(post)
    const posts = await profileAPI.getPosts()
    dispatch(setPostsAction(posts))
}