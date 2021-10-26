<template>
  <div>
    <div class="dashboard">
      <div>
        <router-link to="/">
          <img
            class="Logo"
<<<<<<< HEAD
            alt="The Wonderful Travel Blog Logo (fly)"
            src="../src/assets/logo_2.png"
          />
        </router-link>
        <router-link class="navButtonAboutResponsive" to="/about"
          >About</router-link>&nbsp;
      </div>
      <div class="TitleDiv">
        <p class="Headline">The Wonderful Travel Blog ©</p>
        <p class="Headline_responsive">TWTB ©</p>
      </div>
      <div class="menuBar">
        <router-link class="navButtonHome" to="/">Home</router-link>&nbsp;
        <router-link class="navButtonAbout" to="/about">About</router-link
        >&nbsp;
        <router-link class="navButtonContact" to="/contact">Contact</router-link
        >&nbsp;
        <router-link v-if="!isHidden" class="navButton" to="/new_post"
          >NewPost</router-link
        >
        <button
          class="navButtonLogIn"
          v-on:click="isHidden = !isHidden"
          value="true"
        >
          {{ isHidden ? "LogIn" : "LogOut" }}>
          <div v-if="!isHidden"></div>
=======
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
>>>>>>> 6a607c0e0fa20cccf847a3ad283fb00d5a7debf5
          <img
            class="Logo KeyImage"
            alt="Drawing of a Key"
            src="../src/assets/key.png"
          />
<<<<<<< HEAD
          <div v-if="!isHidden"></div>
        </button>
=======
        </router-link>
>>>>>>> 6a607c0e0fa20cccf847a3ad283fb00d5a7debf5
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
<<<<<<< HEAD
  data: function () {
    return {
      isHidden: true,
      isLogedIn: false,
    };
  },
  methods: {
    Log: function (msg, isHidden) {
      console.log(msg.target.value);
      isHidden = msg.target.value;
      console.log(isHidden);
    },
  },
=======
>>>>>>> 6a607c0e0fa20cccf847a3ad283fb00d5a7debf5
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Special+Elite&family=Stick+No+Bills:wght@400;600");

.dashboard {
  display: flex;
  width: 100%;
  height: 700px;
<<<<<<< HEAD
  background-image: url("/images/Wallpaper.png");
=======
  background-image: url("https://weneedfun.com/wp-content/uploads/2016/08/William-Morris-Wallpapers-1.png");
>>>>>>> 6a607c0e0fa20cccf847a3ad283fb00d5a7debf5
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
<<<<<<< HEAD
  margin-left: 53%;
=======
  margin-left: 54%;
>>>>>>> 6a607c0e0fa20cccf847a3ad283fb00d5a7debf5
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

<<<<<<< HEAD
.navButtonHome.navButtonAbout.navButtonContace {
  margin-left: 30px;
}

.navButtonAboutResponsive {
  display: none;
}

.navButtonLogIn {
  font-family: "Special Elite", cursive;
  font-size: 18px;
  margin-left: 12px;
  border: none;
  background-color: #ffcb00;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 12px;
  border-radius: 5%;
  width: 200px;
}

=======
.navButton {
  margin-left: 30px;
}

>>>>>>> 6a607c0e0fa20cccf847a3ad283fb00d5a7debf5
.KeyImage {
  width: 37px;
  height: auto;
  margin-left: 3px;
<<<<<<< HEAD
  margin-top: 0px;
}

=======
}


>>>>>>> 6a607c0e0fa20cccf847a3ad283fb00d5a7debf5
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
<<<<<<< HEAD

.Headline_responsive {
  display: none;
}

@media screen and (max-width: 1300px) {
  .navButtonLogIn {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .Headline {
    display: none;
  }
  .Headline_responsive {
    display: inline;
    font-family: "Special Elite", cursive;
    white-space: nowrap;
    margin-top: 30px;
    line-height: 46px;
  }
  .navButtonAboutResponsive {
    display: flex;
    font-family: "Special Elite", cursive;
    position: fixed;
    margin-left: 160px;
  }
  .dashboard a {
    font-size: 15px;
  }
}

@media screen and (max-width: 800px) {
  .menuBar {
    display: none;
    -moz-transition: display 1s ease;
  }
}
=======
>>>>>>> 6a607c0e0fa20cccf847a3ad283fb00d5a7debf5
</style>
