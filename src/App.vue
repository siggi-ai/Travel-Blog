<template>
  <div>
    <div class="dashboard">
      <div>
        <router-link to="/">
          <img
            class="Logo"
            alt="The Wonderful Travel Blog Logo (Fly)"
            src="../src/assets/logo_2.png"
          />
        </router-link>
      </div>
      <div class="TitleDiv">
        <p class="Headline">The Wonderful Travel Blog ©</p>
      </div>
      <div class="menuBar">
        <router-link class="navButton" to="/">Home</router-link>&nbsp;
        <router-link class="navButton" to="/about">About</router-link>&nbsp;
        <router-link class="navButton" to="/contact">Contact</router-link>&nbsp;
        <router-link class="navButton" to="/new_post">NewPost</router-link>
        <router-link class="navButton" to="/log_in">
          LogIn
          <img
            class="Logo KeyImage"
            alt="Drawing of a Key"
            src="../src/assets/key.png"
          />
        </router-link>
      </div>
      <router-view />
    </div>
    <div class="Footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: { Footer },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Special+Elite&family=Stick+No+Bills:wght@400;600");

.dashboard {
  display: flex;
  width: 100%;
  height: 700px;
  background-image: url("https://weneedfun.com/wp-content/uploads/2016/08/William-Morris-Wallpapers-1.png");
  padding: 16px 0px;
}

.dashboard a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
  height: 23px;
  transition: 0.2s;
}

.dashboard a:hover {
  color: #006b66;
}

.Logo {
  height: 50px;
  margin-left: 3px;
  margin-top: -12px;
}

.Logo:hover {
  transform: rotateZ(-5deg);
}

.Headline {
  font-size: 15px;
  font-family: "Special Elite", cursive;
  color: black;
  white-space: nowrap;
}

.menuBar {
  display: flex;
  float: right;
  margin-left: 54%;
  font-family: "Special Elite", cursive;
  position: fixed;
  opacity: 0.5;
  transition: 0.2s;
}

.menuBar:hover {
  display: flex;
  float: right;
  position: fixed;
  opacity: 1;
}

.navButton {
  margin-left: 30px;
}

.KeyImage {
  width: 37px;
  height: auto;
  margin-left: 3px;
}


body {
  margin: 0;
}

.Footer {
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 75px;
  background: #ffcb00;
  padding-top: 13px;
}
</style>
