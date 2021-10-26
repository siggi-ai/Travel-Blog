<template>
  <div class="Content">
    <ul class="ContactList">
      <h1>contact page</h1>
      <h2>Do you like my page?</h2>
      <h4>(write an Email, the letter will take too long)</h4>
      <br />
      <li>Smiley Face</li>
      <li>Candyroad 12</li>
      <li>123456 Dreamland</li>
      <br />
      <li class="email">smiley.face@gmx.de</li>
    </ul>
    <p class="HamburgCodingSchool">
      The page was created as a project during the Full-Stack-Program at the
      'Hamburg Coding School' in 2021.
    </p>
  </div>
</template>

<script scoped>
export default {};
</script>

<style>
.ContactList {
  font-family: "Special Elite", cursive;
  font-size: 20px;
  margin-top: 100px;
  color: #873300;
  margin-left: 200px;
}

.HamburgCodingSchool {
  font-family: "Special Elite", cursive;
  font-size: 20px;
  margin-top: 100px;
  color: #000;
  margin-left: -65px;
}

ul {
  list-style: none;
}

.email {
  color: #a00;
}

@media screen and (max-width: 600px) {
  .Content {
  margin-left: -250px;
  margin-right: 120px;
  }
}
</style>
