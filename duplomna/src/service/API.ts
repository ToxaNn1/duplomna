import { AxiosInstance, AxiosRequestConfig } from "axios";

export default abstract class Api {
  private getUrl(url: string) {
    return `${url}`;
  }

  private axiosInstance(instance: AxiosInstance) {
    return instance;
  }

  protected post<T>(
    instance: AxiosInstance,
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ) {
    return this.axiosInstance(instance).post<T>(this.getUrl(url), data, config);
  }

  // protected put<T>(url: string, data?: T, config?: AxiosRequestConfig<T>) {
  //   return axiosBaseInstance.put<T>(this.getUrl(url), data, config);
  // }
  //
  // protected patch<T>(url: string, data?: T, config?: AxiosRequestConfig<T>) {
  //   return axiosBaseInstance.patch<T>(this.getUrl(url), data, config);
  // }

  protected get<T>(
    instance: AxiosInstance,
    url: string,
    config?: AxiosRequestConfig
  ) {
    return this.axiosInstance(instance).get<T>(this.getUrl(url), config);
  }

  // protected delete<T>(url: string, config?: AxiosRequestConfig<T>) {
  //   return axiosBaseInstance.delete<T>(this.getUrl(url), config);
  // }
}
