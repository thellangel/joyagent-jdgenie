import api from './index';

export const agentApi = {
  loginIn: () =>
    api.get(`/backend_api/api/login`),
  getWhiteList: () => api.get(`/backend_api/api/getWhiteList`),
  apply: (data:string) => api.get(`/backend_api/api/genie/apply`, {"email": data}),
};
