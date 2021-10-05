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
    const url = "https://615c4f5bbc36ec00c90970b8--kind-davinci-ca9573.netlify.app/mockdata.json"; //change this later to node.js api
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