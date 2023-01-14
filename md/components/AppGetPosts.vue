<template>
  <div>
    {{ postType.title.rendered }}
  </div>
</template>

<script>
export default {
  props: {
    postType: {
      type: Object,
      required: true,
      default: null
    }
  } };
</script>
