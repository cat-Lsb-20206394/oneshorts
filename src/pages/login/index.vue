<template>
  <div v-if="state.account.id">
    <div class="container"  style="width: 500px;">
      <h1 class="mt-3 fw-normal">로그아웃</h1>
      <hr/>
      <button class="inner_btn"  @click="logout()">로그아웃</button>
      <hr />
    </div>
  </div>
  <div v-else>
    <div class="container"  style="width: 500px;">
      <h1 class="mt-3 fw-normal">로그인</h1>
      <hr/>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="loginId"
               placeholder="ID를 입력하세요." v-model="state.form.loginId" />
      </div>
      <div class="form-floating mb-3">
        <input type="password" class="form-control" id="loginPw"
               placeholder="PW를 입력하세요." v-model="state.form.loginPw" />
      </div>
      <button class="inner_btn" @click="submit()">login</button>
      <hr />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";
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
    const submit = () => {
      const args = {
        loginId: state.form.loginId,
        loginPw: state.form.loginPw,
      };
      axios
          .post("/api/account", args)
          .then((res) => {
            alert("로그인에 성공했습니다.");
            state.account = res.data;
          })
          .catch(() => {
            alert("로그인에 실패했습니다. 계정 정보를 확인해주세요.");
          });
    };
    const logout = () => {
      axios.delete("/api/account").then(() => {
        alert("로그아웃하였습니다.");
        state.account.id = null;
        state.account.name = "";
      });
    };
    axios.get("/api/account").then((res) => {
      state.account = res.data;
    });
    return { state, submit, logout };
  },
};
</script>

<style scoped>
.container{
  text-align: center;
}
.form-signin {
  max-width: 330px;
  padding: 15px;
}
.form-signin .form-floating:focus-within {
  z-index: 2
}
.form-signin input[type="text"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.inner_btn{
  width: 100px;
  border-width: 2px;
  border-radius: 5px;
}
</style>