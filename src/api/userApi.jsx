import axiosClient from "./axiosClient";

const userApi = {
    getAll(params) {
        const url = "https://json-quan-ao.herokuapp.com/users";
        return axiosClient.get(url,params);
    },
    getById(id) {
        const url = `https://json-quan-ao.herokuapp.com/users/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = "https://json-quan-ao.herokuapp.com/users";
        return axiosClient.post(url,data);
    },
    update(data) {
        const url = `https://json-quan-ao.herokuapp.com/users/${data.id}`;
        return axiosClient.patch(url,data);
    }
}

export default userApi;