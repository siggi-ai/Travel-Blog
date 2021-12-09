<template>
  <div>
    <form class="Box" @submit="submitMethod">
      <table>
        <tr>
          <h3>Please add a new Entry!</h3>
          <th><label for="newCity">City:</label></th>
          <th>
            <input type="text" name="city" id="inputCity" value="Berlin" />
          </th>
        </tr>
        <tr>
          <th><label for="newCountry">Country:</label></th>
          <th>
            <input type="text" name="country" id="newCountry" value="Germany" />
          </th>
        </tr>
        <br />
        <tr>
          <th><label for="visitingDate">Arrival Date: </label></th>
          <th>
            <input type="date" name="visiting_date" id="newVisiting_date" />
          </th>
        </tr>
        <br />
        <tr>
          <th><label for="lng">Longitude:</label></th>
          <th><input type="text" name="lng" id="inputLng" value="52.52" /></th>
        </tr>
        <br />
        <tr>
          <th><label for="lat">Latitude:</label></th>
          <th>
            <input type="text" name="lat" id="inputLat" value="13.40495" />
          </th>
        </tr>
        <br />
        <br />
      </table>
      <div>
        <label for="newDescription">Here you go (be nice 😉):</label>
        <br />
        <textarea name="description" id="newDescription">
Tell us about your journey!
            </textarea
        >
      </div>
      <br />
      <button type="submit">Post Entry</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    submitMethod: async function (event) {
      event.preventDefault();
      const newEntry = {
        city: event.target.elements.city.value,
        country: event.target.elements.newCountry.value,
        visiting_date: event.target.elements.visiting_date.value,
        lat: Number(event.target.elements.lat.value),
        lng: Number(event.target.elements.lng.value),
        description: event.target.elements.newDescription.value,
      };
      const response = await fetch("https://backendtravelblog.herokuapp.com/api/new_post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEntry),
      });
      const result = await response.json();
      this.$router.push({ path: "/" });
      console.log(result);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Special+Elite&family=Stick+No+Bills:wght@400;600");

.Box {
  font-family: "Special Elite", cursive;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 25px;
  text-align: left;
  width: 75%;
  margin-top: 60px;
  margin-left: 145px;
}
input {
  height: 30px;
  border-radius: 5px;
  padding-bottom: -5px;
  font-size: 0.7em;
  border: 1px solid gray;
  color: rgb(255, 255, 255);
  background-color: #ff6d6d;
}
button {
  background-color: rgb(255, 118, 118);
  border-radius: 5px;
  color: white;
  border: 2px solid rgb(255, 0, 0);
  cursor: pointer;
  font-family: "Special Elite", cursive;
  font-size: 30px;
  margin: 10px;
  width: 100px;
  margin-left: 250px;
}
button:hover {
  background-color: rgb(255, 0, 0);
  box-shadow: 2px 2px black;
}
#newDescription {
  height: 10em;
  width: 50em;
  border-radius: 10px;
  font-size: 0.5em;
}
@media screen and (max-width: 1200px) {
  .Box {
    margin-left: -20px;
    font-size: 15px;
  }
  #newDescription {
    height: 180px;
    width: 305px;
    border-radius: 10px;
    font-size: 15px;
  }
  button {
    margin-left: 100px;
  }
}
@media screen and (max-width: 600px) {
  .Box {
    margin-left: -20px;
    font-size: 15px;
  }
  #newDescription {
    height: 180px;
    width: 305px;
    border-radius: 10px;
    font-size: 15px;
  }
  button {
    margin-left: 100px;
  }
}
</style>
