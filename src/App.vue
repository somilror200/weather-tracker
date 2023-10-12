<template>
  <div id="app">
    <nav>
      <router-link to="/" class="nav-link">Search</router-link>
      <router-link to="/overall" class="nav-link">Overall</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>

nav {
  margin: 0;
  padding: 0;
  list-style: none;
}


.nav-link {
  text-decoration: none;
  color: #000; 
  padding: 10px 20px;
  border: 1px solid #000; 
  border-radius: 5px;
  margin-right: 10px; 
}

.nav-link:hover {
  background-color: #000; 
  color: #fff;
  text-decoration: none;
}
</style>
