<template>
  <div>
    <!-- AppDisplayPost Component -->
    <app-display-post
        v-for="postType in wpPosts" :key="postType.id"
        :post-type="postType">
      <!-- AppDisplayPost is called for each post in the wpPosts -->
    </app-display-post>
  </div>
</template>
