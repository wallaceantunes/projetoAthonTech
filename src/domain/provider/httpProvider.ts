import axios from 'axios'
import { HttpResponse } from '../model/httpResponse'
const API = axios.create({
  baseURL: 'https://athon-tech-ps.herokuapp.com'
})
export class HttpProvider {
  async get<T> (url: string, query?: Record<string, string>): Promise<HttpResponse<T>> {
    const resp = await API.get<T>(url, { params: query })
    return {
      status: resp.status,
      data: resp.data
    }
  }
}
