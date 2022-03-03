import axiosClient from "./axiosClient";

const cartApi = {
  getAll(endpoint) {
    const url = `https://json-quan-ao.herokuapp.com/${endpoint}`;
    
    return axiosClient.get(url);
  },
  add(data) {
    const url = "https://json-quan-ao.herokuapp.com/cart";
    return axiosClient.post(url, data);
  },
  remove(id) {
    const url = `https://json-quan-ao.herokuapp.com/cart/${id}`;
    return axiosClient.delete(url);
  },
  update(data) {
    const url = `https://json-quan-ao.herokuapp.com/cart/${data.id}`;
    return axiosClient.patch(url, data);
  },
};

export default cartApi;
