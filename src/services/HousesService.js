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

  async createHouse(houseData) {
    console.log('creating a house')
    const response = await api.post('api/houses', houseData)
    console.log('posted house', response.data)
    AppState.houses.push(new House(response.data))
  }

  async deleteHouse(houseId) {
    console.log('deleting house')
    const response = await api.delete(`api/houses/${houseId}`);
    console.log('deleted house', response.data);
    const indexToRemove = AppState.houses.findIndex(house => house.id == houseId);
    AppState.houses.splice(indexToRemove, 1)
  }

}

export const housesService = new HousesService()