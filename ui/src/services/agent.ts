import api from './index';

export const agentApi = {
  loginIn: () =>
    api.get(`/backend_api/web/api/login`),
  getWhiteList: () => api.get(`/backend_api/web/api/getWhiteList`),
  apply: (data:string) => api.get(`/backend_api/web/api/genie/apply`, {"email": data}),
};
