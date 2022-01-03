<template>
  <header>
    <router-link to="/login">로그인</router-link> |
    <router-link to="/signup">회원가입</router-link>
    <div>{{ test }}</div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      test: process.env.VUE_APP_API_VALUE,
    };
  },
};
</script>

<style></style>
