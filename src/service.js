import http from "./http-common";

class DataService {
  getPresidents = async () => {
    const presidents = await http.get("/presidents");
    return presidents;
  };
}

export default new DataService();
