<template>
  <div class="houses">
    THE HOMES PAGE
    <div v-for="house in houses" class="col-4 mb-3">
      <HouseCard :house="house" />
    </div>
    <!-- {{ houses }} -->

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { housesService } from '../services/HousesService';
import Pop from '../utils/Pop';
import HouseCard from '../components/HouseCard.vue';

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
  components: { HouseCard }
}

</script>


<style lang="scss" scoped></style>
