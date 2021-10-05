<template>
  <div>
    <div class="LeftBody">
      <Overview :trips="apiResponseData" />
    </div>
    <div class="RightBody">
      <Map class="map" :trips="apiResponseData" />
    </div>
  </div>
</template>

<script>
import Map from "@/components/Map.vue";
import Overview from "@/components/Overview.vue";

export default {
  name: "Home",
  components: { Map, Overview },
  data: function () {
    return {
      apiResponseData: undefined,
    };
  },
  mounted: async function () {
    const url = "https://kind-davinci-ca9573.netlify.app/mockdata.json";
    const response = await fetch(url);
    const result = await response.json();
    this.apiResponseData = result;
    console.log(this.apiResponseData);
    this.sortedByDate = this.apiResponseData.sort(
      (a, b) => new Date(a.visiting_date) - new Date(b.visiting_date)
    )},
};
</script>

<style scoped>
.LeftBody {
  display: flex;
  margin-top: 85px;
  margin-left: -250px;
  float: left;
  width: 57%;
  height: 500px;
  overflow-y: scroll;
  background: linear-gradient(to bottom, #addc68, #3ccae1);
  border: 3px solid rgb(238, 255, 0);
  overflow-y: scroll;
  scrollbar-color: #ff9b00 #93a4ff;
  scrollbar-width: thin;
  font-size: 17px;
}

.RightBody {
  display: flex;
  margin-top: 85px;
  margin-right: 55px;
  float: right;
  width: 56%;
  min-height: 500px;
  background: rgb(0, 124, 255);
  border: 3px solid red;
  height: 500px;
  overflow: hidden;
}
</style>
