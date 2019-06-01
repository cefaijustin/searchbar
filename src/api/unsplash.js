import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID a832b0eb78101855f35c1d82f675ed3a9043330ccb0f43938e6806f094a23a83"
  }
});
