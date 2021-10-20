import axios from "axios";

export default axios.create({
  baseURL: "https://histoservera.herokuapp.com",
  headers: {
    "Content-type": "application/json",
  },
});
