<template>
  <div class="houses container-fluid">

    <section class="row">
      <div class="col-12">
        <div class="text-center my-3">
          <p class="fs-3">
            Buy/Sell Houses
          </p>
          <button class="btn btn-success">Create A House</button>
        </div>
      </div>
    </section>
    <section class="row">
      <div class="col-12 mb-3">
        <HousesForm v-if="account.id" />

      </div>
    </section>


    <div class="row">
      <div v-for="house in houses" class="col-4 mb-3">

        <HouseCard :house="house" />
      </div>
    </div>


  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { housesService } from '../services/HousesService';
import Pop from '../utils/Pop';
import HouseCard from '../components/HouseCard.vue';
import HousesForm from '../components/HousesForm.vue';

export default {

  setup() {

    onMounted(() => {
      getHouses()
    })


    async function getHouses() {
      try {
        await housesService.getHouses()
      } catch (error) {
        Pop.error(error)
      }
    }
    return {
      houses: computed(() => AppState.houses),
      account: computed(() => AppState.account),

      getHouses
    }
  },
  components: { HouseCard, HousesForm }
}

</script>


<style lang="scss" scoped></style>
