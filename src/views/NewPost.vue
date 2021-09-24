<template>
  <div class="BlogForm">
    <form
      class="BlogPost"
      method="GET"
      action="/post"
      enctype="application/x-www-form-urlencoded"
    >
      <input type="hidden" name="submitted" value="1" />
      <select name="author" id="author">
        <option value="">choose country</option>
      </select>
      <br />
      <br />
      <input type="text" name="title" placeholder="Title" />
      <br />
      <br />
      <textarea
        style="width: 511px; height: 316px"
        name="postNew"
        placeholder="Your New Post"
        class="textarea"
      ></textarea>
      <br />
      <br />
      <button @click="PostMethod" type="submit">Submit New Post</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["BlogCard"],
  data: function () {
    return {
      currentValue: "The New Post",
    }
  },
  methods: {
    PostMethod: function (currentValue) {
      this.$emit("BlogCard", currentValue);
    },
  },
};
</script>

<style scoped>
.BlogForm {
  margin-top: 100px;
}

.BlogPost {
  margin-left: 220px;
}

.textarea {
  background-color: #ff5151;
  border-radius: 3%;
}
</style>