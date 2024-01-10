<template>
  <div class="house-card border border-primary rounded shadow">
    <img :src="house.imgUrl" class="img-fluid rounded-top" :alt="house.description">


  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { House } from '../models/House';
export default {
  props: { house: { type: House, required: true } },
  setup(props) {

    return {
      account: computed(() => AppState.account)
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
}
</style>