<template>
  <div>
    <router-link :to="`/`" class="DetailButtonPost"> back home </router-link>
    <div class="PostWindow">
      <br />
      <table class="titleTable">
        <tr>
          <th class="titlePost">{{ trips.title }}</th>
          <br />
          <br />
          <th namePost>by {{ trips.authors_name }}</th>
          <br />
          <br />
          <th>Visiting Date: {{ trips.visiting_date }}</th>
        </tr>
      </table>
      <h2 class="titlePost"></h2>

      <h5></h5>
      <img class="authorPic" :src="`${trips.authors_image}`" />
      <img
        class="image_place"
        :src="trips.image"
        width="200"
        border-radius="5px"
        height="100"
        object-fit="cover"
      />
      <br />
      <p class="descriptionText">{{ trips.description }}</p>
      <p class="descriptionText">{{ trips.location }}</p>
      <router-link to="/">
        <img class="flyPic" alt="Logo Fly" src="../assets/logo_2.png" />
      </router-link>
    </div>
    <div class="cardBox">
      <GoogleMap
        v-for="(trip, i) in trips"
        :key="i"
        api-key=""
        style="width: 100%; height: 100%"
        :center="trips.location.position"
        :zoom="4"
      >
        <Marker
          v-for="(trip, i) in trips"
          :key="i"
          :options="{ position: trips.location.position }"
        >
        </Marker>
      </GoogleMap>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  props: {
    trips: {},
  },
  components: {
    GoogleMap,
    Marker,
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Special+Elite&family=Stick+No+Bills:wght@400;600");

.PostWindow {
  font-family: "Special Elite", cursive;
  width: 814px;
  height: 520px;
  text-align: center;
  border: 1px solid black;
  color: darkred;
  z-index: 0;
  background-color: #ff5151;
  margin-left: 100;
  margin-top: 80px;
  box-shadow: 3px 3px black;
  overflow-y: scroll;
  scrollbar-color: #ff9b00 #93a4ff;
  scrollbar-width: thin;
  padding: 10px;
}

.titleTable {
  margin-left: 50px;
  width: 80%;
}

.titlePost {
  font-size: 40px;
}

#closeWindow {
  float: right;
  margin-top: -150px;
  margin-right: 68px;
  background-color: darkred;
  border-radius: 8px;
  color: #fff;
  border: 1px solid black;
}

.DetailButtonPost {
  margin-left: -200px;
  background-color: #5acf30;
  box-shadow: 5px 5px #289600;
  color: rgb(11, 138, 0);
  transition: 0.5s;
  font-size: 21px;
  font-family: "Special Elite", cursive;
  margin-top: 2px;
}

.DetailButton:hover {
  color: #ff8bed;
  background-color: rgb(0, 0, 158);
}

.descriptionText {
  margin: 18px 110px 80px 110px;
  text-align: justify;
  text-indent: 30px;
}

.image_place {
  width: 675px;
  height: auto;
}

.authorPic {
  width: 185px;
  height: auto;
  margin-left: -306px;
  margin-top: -20px;
  border-radius: 5%;
  border: 1px solid black;
  box-shadow: 3px 3px black;
  position: absolute;
}

.flyPic {
  margin-left: 360px;
  width: 50px;
  height: auto;
}

.flyPic:hover {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.cardBox {
  width: 300px;
  height: 542px;
  border-radius: -4%;
  background-color: aliceblue;
  color: aliceblue;
  display: block;
  float: right;
  margin-right: -303px;
  margin-top: -542px;
  overflow: hidden;
  object-fit: cover;
  box-shadow: 3px 3px black;
}
</style>
