import * as axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '6ecf6817-783d-41e9-836b-3c4ab276cf8b'
    }
})

export const usersAPI = {
    getUsers: (currentPage, pageSize, searchValue) => {
        return axiosInstance.get(`/users?count=${pageSize}&page=${currentPage}&term=${searchValue || ''}`)
            .then(response => response.data)
    },

    follow: userId => {
        return axiosInstance.post(`/follow/${userId}`)
            .then(response => response.data)
    },

    unFollow: userId => {
        return axiosInstance.delete(`/follow/${userId}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile: (userId) => {
        return axiosInstance.get(`/profile/${userId}`)
            .then(response => response.data)
    },

    getStatus: (userId) => {
        return axiosInstance.get(`/profile/status/${userId}`)
            .then(response => response.data)
    },

    updateStatus: (status) => {
        return axiosInstance.put(`/profile/status/`, { status })
            .then(response => response.data)
    },

    updateProfileInfo: (profileData) => {
        return axiosInstance.put(`/profile`, { ...profileData })
            .then(response => response.data)
    },

    setPhoto: (photo) => {
        const formData = new FormData()
        formData.append('image', photo)
        return axiosInstance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    },

    getPosts: () => {
        return axiosInstance.get(`/todo-lists`)
            .then(response => response.data)
    },

    addPost: (post) => {
        return axiosInstance.post(`/todo-lists`, { title: post })
            .then(response => response.data)
    }
}

export const authAPI = {
    authMe: () => {
        return axiosInstance.get(`/auth/me`)
            .then(response => response.data)
    },

    login: (data) => {
        return axiosInstance.post(`/auth/login`, {
            email: data.login,
            password: data.password,
            rememberMe: data.rememberMe,
            captcha: data.captcha
        }).then(response => response.data)
    },

    logout: () => {
        return axiosInstance.delete(`/auth/login`)
            .then(response => response.data)
    },

    getCaptcha: () => {
        return axiosInstance.delete(`security/get-captcha-url`)
            .then(response => response.data)
    }
}

export const dialogsAPI = {
    getDialogs: () => {
        return axiosInstance.get(`/dialogs`)
            .then(response => response.data)
    },

    sendMessage: (userId, message) => {
        return axiosInstance.post(`/dialogs/${userId}/messages`, { body: message })
            .then(response => response.data)
    },

    getMessages: (userId) => {
        return axiosInstance.get(`/dialogs/${userId}/messages/`)
            .then(response => response.data)
    },

    setNewDialog: (userId) => {
        return axiosInstance.put(`/dialogs/${userId}`)
            .then(response => response.data)
    },

    deleteMessage: (messageId) => {
        return axiosInstance.delete(`dialogs/messages/${messageId}`)
            .then(response => response.data)
    },

    refreshMessages: () => {
        return axiosInstance.get(`dialogs/messages/new/count`)
            .then(response => response.data)
    }
}