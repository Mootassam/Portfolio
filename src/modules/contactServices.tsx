import authAxios from "./shared/axios/authAxios";

export default class ContactService {
  static async create(data) {
    const body = {
      data,
    };
    const tenantId = "612e142f9fe9195647e629ba";
    const response = await authAxios.post(`/tenant/${tenantId}/contact`, body);
    return response.data;
  }
}
