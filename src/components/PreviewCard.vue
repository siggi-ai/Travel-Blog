<template>
  <div>
    <div class="PreviewCard">
      <router-link :to="detailPage" class="DetailButton">
        <p class="title">{{ title }}</p>
        <p class="visitingDate">{{ visiting_date }}</p>
        <img :src="authors_image" class="AuthorImage" object-fit="cover" />
        <p class="authorName">{{ authors_name }}</p>
        <br />
        <br />
        <img
          class="imagePlace"
          :src="image"
          width="200"
          border-radius="5px"
          height="100"
          object-fit="cover"
        />
        <p class="readMoreText">(click on the Card to read more)</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      detailPage: `/post/${this.id}`,
    };
  },
  props: [
    "title",
    "visiting_date",
    "image",
    "authors_name",
    "authors_image",
    "trips",
    "id",
  ],
};
</script>

<style scoped>
.PreviewCard {
  font-family: "Special Elite", cursive;
  width: 196px;
  height: 296px;
  padding: 10px;
  margin: 5px;
  border-radius: 5%;
  border: 1px solid rgb(0, 255, 135);
  background-color: #fffc5a;
  text-align: center;
  transition: 0.6s;
  opacity: 0.9;
  box-shadow: 2px 2px #4ea775;
}

.PreviewCard:hover {
  background-color: rgb(253, 236, 0);
  opacity: 1;
}

.title {
  color: #ff6b6b;
  font-weight: bold;
  height: 10px;
  font-size: 14px;
}

.DetailButton {
  color: gray;
  background-color: aquamarine;
  transition: 0.2s;
  height: 272px;
  width: 173px;
}

.DetailButton:hover {
  background-color: rgb(85, 255, 191);
}

.AuthorImage {
  margin-left: 25px;
  border-radius: 50%;
  object-fit: cover;
  float: left;
  width: 50px;
  height: 50px;
}

.visitingDate {
  height: 10px;
  font-size: 15px;
}

.authorName {
  font-size: 25px;
  height: 5px;
  padding-top: 0px;
  color: green;
  font-size: 18px;
}

.imagePlace {
  border: 1px solid #000;
  border-radius: 2%;
  object-fit: cover;
  margin-top: -16px;
  width: 170px;
}

.readMoreText {
  font-size: 10px;
}
</style>
