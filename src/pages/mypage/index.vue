<template>
  <div  v-if="!state.account.id">
    <!-- 다른 형들 마이페이지에서 실험할거면 여기서 하심 됩니다~ -->
    <h1>please login</h1>
  </div>
  <div v-else>
    <h1>mypage</h1>
  </div>
  </template>
  
  <script>
  import axios from "axios";
  import {reactive} from "vue";

  export default {
    setup() {
      const state = reactive({
        account: {
          id: null,
          name: "",
        },
        form: {
          loginId: "",
          loginPw: "",
        },
      });
      axios.get("/api/account").then((res) => {
        state.account = res.data;
      });
      return{state};
    }
  }
  </script>
  
  <style>
  
  </style>