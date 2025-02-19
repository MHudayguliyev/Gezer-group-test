import { axiosInstance } from "../axiosInstance";

type ApiProps = {
    url: string
    config?: any
}
const api = {
      get: async <T>(args: ApiProps): Promise<T> => {
        const { url, config} = args;
        return axiosInstance.get(url, { ...config }).then((response) => response.data);
    },
}
export {api}