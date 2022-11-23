<template>
    <div class="container mt-3" style="width: 500px;">
      <h1 style="text-align: center" class="mb-10">
        회원가입
      </h1>
      <hr/>
      <div class="form-floating mb-3">
        <input type="id" label="nickname" class="form-control" id="floatingNickname" placeholder="ID 를 입력하세요.">
      </div>
      <div class="form-floating mb-3">
        <input type="password" label="password" class="form-control" id="floatingPassword" placeholder="Password 를 입력하세요." >
      </div>
      <div class="form-floating mb-4">
        <input type="password" label="passwordCheck" class="form-control" id="floatingPasswordCheck" placeholder="Password 를 한 번 더 입력하세요.">
      </div>
      <hr/>
      <div class = "btn_field">
        <button class="inner_btn">
          회원가입
        </button>
        <button class = "inner_btn ml-5" @click="linkToLogin()">
          Oneshorts 로그인
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      linkToLogin(){
        this.$router.push({path:"./login"});
      }
    }
  }
  </script>
  
  <style>
    .btn_field{
      text-align:center;
    }
    .inner_btn{
      border-width: 1;
      border-radius: 5px;
    }
  </style> 