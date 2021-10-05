<template>
  <div>
    <GoogleMap
      v-for="(trip, i) in trips"
      :key="i"
      api-key=""
      style="width: 100%; height: 90%"
      :center="trips[0].location.position"
      :zoom="5"
      :fullscreenControl="false"
    >
      <Marker
        v-for="(trip, i) in trips"
        :key="i"
        :options="{ position: trip.location.position }"
        @click="showMarkerWindow(trip)"
      >
      </Marker>

      <CustomControl class="infoWindow" v-if="display" position="LEFT_CENTER">
        <button class="closeWindow" @click="hideComponent">X</button>
        <InfoWindow :trips="chosenCity" />
      </CustomControl>
    </GoogleMap>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker, CustomControl } from "vue3-google-map";
import InfoWindow from "@/components/InfoWindow.vue";

export default defineComponent({
  components: {
    GoogleMap,
    Marker,
    CustomControl,
    InfoWindow,
  },
  props: ["trips"],

  data: function () {
    return {
      chosenCity: {},
      display: false,
      centerCity: {},
    };
  },
  methods: {
    showMarkerWindow(trips) {
      this.display = true;
      this.chosenCity = trips;
      console.log(this.display);
      console.log(trips);
    },
    hideComponent() {
      this.display = false;
      console.log();
    },
  },
});
</script>

<style scoped>
div {
  width: 100%;
  padding-top: 30px;
  background-color: none;
  padding-top: 0px;
  height: 555px;
}

.closeWindow {
  float: left;
  margin-top: 39px;
  margin-left: 165px;
  position: relative;
  background-color: darkred;
  border-radius: 4px;
  color: #ff7070;
  border: 1px solid red;
}
</style>
