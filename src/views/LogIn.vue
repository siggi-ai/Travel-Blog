<template>
  <div>
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
</template>

<script>
export default {};
</script>

<style scoped>
.LogIn {
  margin-top: 110px;
  margin-left: 300px;
}
</style>
