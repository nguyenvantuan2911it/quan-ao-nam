import axiosClient from "./axiosClient";

const productApi = {
  getAll(url, params) {
    const baseUrl = "https://json-quan-ao.herokuapp.com";
    return axiosClient.get(`${baseUrl}/${url}`, { params });
  },
  getById(url, id) {
    const baseUrl = "https://json-quan-ao.herokuapp.com";
    return axiosClient.get(`${baseUrl}/${url}/${id}`);
  },
  add(url, data) {
    const baseUrl = "https://json-quan-ao.herokuapp.com";
    return axiosClient.post(`${baseUrl}/${url}`, data);
  },
  update(url,data) {
    const baseUrl = `https://json-quan-ao.herokuapp.com/${url}/${data.id}`;
    return axiosClient.patch(baseUrl,data);
}
};

export default productApi;
