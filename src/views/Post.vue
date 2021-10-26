<template>
  <div>
    <Posts :trips="blogPost" />
  </div>
</template>

<script>
import Posts from "@/components/Posts.vue";
export default {
  components: {
    Posts,
  },
  data: function () {
    return {
      blogPost: {},
    };
  },

  mounted: async function () {
<<<<<<< HEAD
    const url = "https://backendtravelblog.herokuapp.com/api";
=======
    const url = "https://kind-davinci-ca9573.netlify.app/mockdata.json"; //change this later to node.js api
>>>>>>> 6a607c0e0fa20cccf847a3ad283fb00d5a7debf5
    const context = this;
    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);

      context.blogPost = result.find(function (post) {
        return post.id === Number(context.$route.params.id);
      });
    } catch (error) {
      console.log("ERROR:");
      console.log(error);
    }
  },
};
</script>

<style></style>