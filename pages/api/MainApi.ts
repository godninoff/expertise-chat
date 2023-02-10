import axios from "axios";

export class MainApi {
  url;

  constructor(url: string) {
    this.url = url;
  }

  async getStatements() {
    const res = await axios.get(`${this.url}/statements?_embed=sections`);
    return res.data;
  }
  async getMessages(id: string) {
    const res = await axios.get(`${this.url}/sections/${id}?_embed=messages`);
    return res.data;
  }
}
