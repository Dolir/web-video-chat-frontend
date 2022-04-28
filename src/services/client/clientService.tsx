import axios from "axios"
import { authService } from "../auth/authService"
import * as Users from "./clientTypes"

export const clientAlias = {
  GET_ME: "GET_ME"
}
class clientService extends authService {
  getMe() {
    return this.baseApi.get("/api/v1/users/me")
  }
}
export default new clientService()
