<template>
  <div class="hello">
    <NavigationMenu />
    <h1>Welcome to My Vue App</h1>
    <div class="divider"></div>
    <p>This is a custom welcome page for my Vue.js application.</p>
  </div>
</template>


<script>
import NavigationMenu from './NavigationMenu.vue';
export default {
   name: 'HelloWorld',
   components: {
    NavigationMenu
  }
}
</script>

