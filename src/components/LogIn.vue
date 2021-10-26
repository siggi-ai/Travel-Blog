<template>
  <div>
    <div class="LogInBox">
      <form class="LogIn">
        <input type="hidden" name="submitted" value="1" />
        <input type="text" name="title" placeholder="UserName" />
        <br />
        <br />
        <input type="text" name="title" placeholder="Password" />
        <br />
        <br />
        <button @click="LogInMethod" type="submit">Log In</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.LogInBox {
  background-color: brown;
  margin: 50px 0px 50px 900px;
  padding: 40px;
  border-radius: 5px;
  width: 150px;
}

.LogIn {
  margin-top: 4px;
  margin-left: 2px;
}
</style>
