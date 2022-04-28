import * as Auth from "./authTypes"

import { AxiosRequestConfig, AxiosResponse } from "axios"
import axios from "axios"
export const baseApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_URL
})
export class authService {
  isAlreadyFetchingAccessToken = false

  // ** For Refreshing Token
  subscribers: Function[] = []
  baseApi

  constructor() {
    this.baseApi = baseApi
    // ** Request Interceptor
    baseApi.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        console.log("axios")
        // ** Get token from localStorage
        const accessToken = this.getAccessToken()

        // ** If token is present add it to request's Authorization Header
        if (accessToken) {
          // ** eslint-disable-next-line no-param-reassign
          config.headers = { ...config.headers }
          config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    // ** Add request/response interceptor
    baseApi.interceptors.response.use(
      (response) => response,
      (error) => {
        // ** const { config, response: { status } } = error
        const { config, response } = error
        const originalRequest = config

        // ** if (status === 401) {
        if (response && response.status === 401) {
          if (!this.isAlreadyFetchingAccessToken) {
            this.isAlreadyFetchingAccessToken = true
            this.refreshToken()
              .then((r) => {
                this.isAlreadyFetchingAccessToken = false

                // ** Update accessToken in localStorage
                this.setAccessToken(r.data.accessToken)
                this.setRefreshToken(r.data.refreshToken)

                this.onAccessTokenFetched(r.data.accessToken)
              })
              .catch((error) => {
                localStorage.removeItem("access")
                localStorage.removeItem("refresh")
                window.location.href = "/"
              })
          }
          const retryOriginalRequest = new Promise((resolve) => {
            this.addSubscriber((accessToken: string) => {
              // ** Make sure to assign accessToken according to your response.
              // ** Check: https://pixinvent.ticksy.com/ticket/2413870
              // ** Change Authorization header
              originalRequest.headers.Authorization = `Bearer ${accessToken}`
              resolve(this.baseApi(originalRequest))
            })
          })
          return retryOriginalRequest
        }
        return Promise.reject(error)
      }
    )
  }

  onAccessTokenFetched(accessToken: string) {
    this.subscribers = this.subscribers.filter((callback) =>
      callback(accessToken)
    )
  }

  addSubscriber(callback: Function) {
    this.subscribers.push(callback)
  }

  refreshToken() {
    return baseApi.post("/api/v1/auth/refresh", {
      token: this.getRefreshToken()
    })
  }

  login(data: Auth.LoginRequestType) {
    return baseApi.post("/api/v1/auth/sign-in", data)
  }
  register(data: Auth.RegisterRequestType) {
    return baseApi.post("/api/v1/auth/sign-up", data)
  }

  setAccessToken = (token: string) => {
    localStorage.setItem("access", token)
  }
  setRefreshToken = (token: string) => {
    localStorage.setItem("refresh", token)
  }
  getAccessToken = () => localStorage.getItem("access")
  getRefreshToken = () => localStorage.getItem("refresh")

  removeAccessToken = () => localStorage.removeItem("access")
  removeRefreshToken = () => localStorage.removeItem("refresh")
}

export default new authService()
