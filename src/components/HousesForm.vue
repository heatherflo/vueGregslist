<template>
  <div class="houses">
    <form @submit.prevent="createHouse()" class="row p-3 bg-white rounded shadow">
      <div class="col-6 mb-3">
        <label for="description">Describe your house</label>
        <input v-model="houseData.description" type="text" minlength="3" maxlength="200" name="description"
          class="form-control" required>
      </div>

      <div class="col-2 mb-3">
        <label for="bedrooms">#bedrooms: </label>
        <input v-model="houseData.bedrooms" name="bedrooms" type="number" minlength="1" maxlength="10" required
          class="form-control">
      </div>
      <div class="col-2 mb-3">
        <label for="bathrooms">#bathrooms: </label>
        <input v-model="houseData.bathrooms" name="bathrooms" type="number" minlength="1" maxlength="10"
          class="form-control" required>
      </div>
      <div class="col-2 mb-3">
        <label for="levels">#stories: </label>
        <input v-model="houseData.levels" name="levels" type="number" class="form-control" minlength="1" maxlength="4"
          required>
      </div>
      <div class="mb-3 col-6">
        <label for="imgUrl">Place image URL here:</label>
        <input v-model="houseData.imgUrl" type="url" class="form-control" required minlength="3" maxlength="500"
          name="imgUrl">
      </div>
      <div class="col-2 mb-3">
        <label for="year">Year Built</label>
        <input v-model="houseData.year" type="number" value="1975" class="form-control" required name="year" min="1900"
          max="2050">
      </div>
      <div class="col-4 mb-3">
        <label for="price">Price </label>
        <input v-model="houseData.price" type="number" class="form-control" name="price" min="5" max="100000" required>
      </div>
      <div class="text-start p-2">

        <button class="btn btn-success">Submit</button>
      </div>
    </form>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted, } from 'vue';
import { housesService } from '../services/HousesService';
import Pop from '../utils/Pop';

export default {

  setup() {
    const houseData = ref({})

    function resetForm() {
      houseData.value = {}
    }
    return {
      houseData,

      async createHouse() {
        try {
          await housesService.createHouse(houseData.value)
          Pop.success('you created a house!')
          resetForm()
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
};
</script>


<style lang="scss" scoped></style>