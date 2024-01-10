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

}

export const housesService = new HousesService()