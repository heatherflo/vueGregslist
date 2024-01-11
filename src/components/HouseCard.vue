<template>
  <div class="house-card border border-primary rounded shadow p-1">
    <img :src="house.imgUrl" class="img-fluid rounded-top" :alt="house.description">
    <p>{{ house.description }}</p>
    <p>Bedrooms: {{ house.bedrooms }}</p>
    <p>Bathrooms: {{ house.bathrooms }}</p>
    <p class="text-success text-end">${{ house.price }}</p>
    <button @click="deleteHouse(house.id)" v-if="account.id == house.creatorId" class="btn btn-danger delete-button "><i
        class="mdi mdi-delete-forever"></i></button>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { House } from '../models/House';
import Pop from '../utils/Pop';
import { housesService } from '../services/HousesService';

export default {
  props: { house: { type: House, required: true } },
  setup(props) {

    return {
      account: computed(() => AppState.account),

      async deleteHouse(houseId) {
        try {
          if (await Pop.confirm('are you sure?')) {
            await housesService.deleteHouse(houseId)
            Pop.success('deleted house!')
          }
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }

};
</script>


<style lang="scss" scoped>
.house-card {
  position: relative;

  img {
    width: 100%;
    height: 25vh;
    object-fit: cover;
    object-position: center;
  }

  .delete-button {
    position: absolute;
    right: 0px;
    top: 0px
  }
}
</style>