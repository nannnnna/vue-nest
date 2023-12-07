<template>
    <nav class="menu">
      <ul>
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/list-books">List Books</router-link></li>
        <li><router-link to="/feedback">Feedback</router-link></li>
      </ul>
    </nav>
  </template>
  
  <style scoped>
  .menu {
    text-align: center;
  }
  
  .menu ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: inline-flex;
  }
  
  .menu li {
    margin: 0 10px;
    border: 1px solid #ccc; /* Border for menu items */
    border-radius: 5px; /* Rounded corners */
    transition: background-color 0.3s; /* Smooth transition for hover effect */
  }
  
  .menu a {
    display: block;
    padding: 10px 15px;
    text-decoration: none;
    color: inherit; /* Inherits from .menu class */
  }
  
  .menu a.router-link-exact-active, /* Styling for active menu item */
  .menu a.router-link-active { /* Vue Router adds these classes automatically */
    background-color: gray;
    color: black;
  }
  
  .menu a:hover { /* Hover effect */
    background-color: lightgray;
    color: black;
  }
  
  @media (max-width: 600px) { /* Mobile responsiveness */
    .menu ul {
      flex-direction: column;
    }
    .menu li {
      margin: 5px;
    }
  }
  </style>
  