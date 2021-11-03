<template>
  <div class="about">
    <h1>about</h1>
    <p>
      My name is Siegfried Hamm and I am a Web-Developer <br />
      and Designer. I created this page with Vue JS and <br />
      also designed some of the Logos. Please contact me! <br />
      My assistant Smiley Face will answer all questions.
    </p>
    <router-link class="navButtonContact" to="/contact"
      >click for contact 👽</router-link
    >
  </div>
</template>

<style scoped>
.about {
  font-family: "Special Elite", cursive;
  margin-top: 100px;
  color: #873300;
  margin-left: 220px;
}

@media screen and (max-width: 1500px) {
  .about {
    margin-left: 60px;
    margin-right: 120px;
    margin-top: 100px;
  }
}

@media screen and (max-width: 1300px) {
  .about {
    margin-left: -30px;
    margin-right: 120px;
    margin-top: 100px;
  }
}

@media screen and (max-width: 1000px) {
  .about {
    margin-left: -80px;
    margin-right: 120px;
    margin-top: 100px;
  }
}

@media screen and (max-width: 800px) {
  .about {
    margin-left: 20px;
    margin-right: 120px;
    margin-top: 100px;
  }
}

@media screen and (max-width: 600px) {
  .about {
    margin-left: -40px;
    margin-right: 120px;
    margin-top: 100px;
  }
}
</style>
