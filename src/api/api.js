import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "0ba26521-854a-40b0-9b10-6424ea27f807"
    }
});

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 1) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userId) {
        // return instance.get(`profile/` + userId)
        return profileAPI.getProfile(userId)
    },

};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {
            status: status
        })
    }

};



export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
};


export default usersAPI