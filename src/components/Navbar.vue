<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" :to="{ name: 'Home'}">
        <h2><span class="red_txt">O</span>neShorts</h2>
      </router-link>
  
      <ul class="navbar-nav mr-auto">
        <li class="white_space"></li>
        <li class="nav-item active">
          <router-link class="nav-link" :to="{ name: 'Todos'}">
            My Video
          </router-link>
        </li>
        <li class="white_space"></li>
        <li class="nav-item active">
          <router-link class="nav-link" :to="{ name: 'Mypage'}">
            My Page
          </router-link>
        </li>
        <li class="white_space"></li>
        <li class="nav-item active">
          <router-link class="nav-link" :to="{ name: 'Login'}">
            Login
          </router-link>
        </li>
        <li class="white_space"></li>
        <li class="nav-item active">
          <router-link class="nav-link" :to="{ name: 'Signup'}">
            SignUp
          </router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
    .red_txt{
      color: red;
    }
    .white_space{
      width:30px;
    }
  </style>