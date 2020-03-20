import * as axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '6ecf6817-783d-41e9-836b-3c4ab276cf8b'
    }
})

export const usersAPI = {
    getUsers: (currentPage, pageSize) => {
        return axiosInstance.get(`/users?count=${pageSize}&page=${currentPage}`)
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
        return axiosInstance.put(`/profile/status/`, {status})
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
            rememberMe: data.rememberMe
        }).then(response => response.data)
    }
}