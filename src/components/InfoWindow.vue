<template>
  <div>
    <div class="infoWindow">
      <br />
      <h2>{{ trips.title }}</h2>
      <h5>Visiting Date: {{ trips.visiting_date }}</h5>
      <h4>by {{ trips.authors_name }}</h4>
      <img id="authorPic" :src="`${trips.authors_image}`" />
      <br />
      <br />
<<<<<<< HEAD
=======
      <!-- <a class="DetailButton" href="/post/:id">see more</a> -->
>>>>>>> 6a607c0e0fa20cccf847a3ad283fb00d5a7debf5
      <router-link :to="`/post/${trips.id}`" class="DetailButton">
        see more
      </router-link>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    trips: {},
  },
};
</script>

<style scoped>


img {
  width: 60px;
  border-radius: 10%;
}

.infoWindow {
  font-family: 'Special Elite', cursive;
  width: 16em;
  height: 25em;
  text-align: center;
  border-radius: 10px;
  border: 1px solid black;
  color: darkred;
  z-index: 0;
  background-color: #ff5151;
  margin-left: 9px;
<<<<<<< HEAD
  margin-top: 35px;
=======
  margin-top: 60px;
>>>>>>> 6a607c0e0fa20cccf847a3ad283fb00d5a7debf5
  box-shadow: 3px 3px black;
}

.DetailButton {
  margin-left: 31px;
  margin-top: -5px;
  background-color: blue;
  box-shadow: 5px 5px #001796;
  color: aliceblue;
  transition: 0.5s;
  font-size: 21px;
}

.DetailButton:hover {
  color: #ff8bed;
  background-color: rgb(0, 0, 158));
}
</style>
