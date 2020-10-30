import axios from "src/configs/axios/index";
export default {
  all: () => axios.get(`/courses`).then((res) => res.data),
  details: (id) => axios.get(`/courses/${id}`).then((res) => res.data),
};
