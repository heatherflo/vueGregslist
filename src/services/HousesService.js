import { AppState } from "../AppState"
import { House } from "../models/House"
import { api } from "./AxiosService"

class HousesService {

  async getHouses() {
    console.log('getting houses')
    const response = await api.get('api/houses')
    console.log('newHouse', response.data)
    AppState.houses = response.data.map(house => new House(house))
  }

  async createHouse() {
    console.log('creating a house')
    const response = await api.post('api/houses')
    console.log('posted house', response.data)
    AppState.houses
  }

}

export const housesService = new HousesService()