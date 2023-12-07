<template>
    <div>
      <NavigationMenu />
      <h1>List of Books</h1>
      <div class="divider"></div>
      <!-- Your book list display logic goes here -->
    </div>
  </template>
  
  <script>
  import NavigationMenu from './NavigationMenu.vue';
  export default {
    name: 'ListBooks',
    components: {
    NavigationMenu
  }
    // Add your component logic here
  }
  </script>
  

  