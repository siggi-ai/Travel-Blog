<template>
  <div class="CardBox">
    <div class="PreviewCard">
      <PreviewCard
        v-for="(trip, i) in trips"
        :key="i"
        :title="trip.title"
        :visiting_date="trip.visiting_date"
        :authors_image="trip.authors_image"
        :authors_name="trip.authors_name"
        :image="trip.image"
        :id="trip.id"
      />
    </div>
  </div>
</template>

<script>
import PreviewCard from "./PreviewCard.vue";

export default {
  name: "Overview",
  components: {
    PreviewCard,
  },
  props: ["trips"],
};
</script>

<style scoped>
.PreviewCard {
  display: flex;
  flex-wrap: wrap;
}
</style>
