<template>
  <div class="vue-template">
    <form>
      <h3>Sign Up</h3>

      <div class="form-group">
        <label>Full Name</label>
        <input type="text" class="form-control form-control-lg"/>
      </div>

      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control form-control-lg"/>
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control form-control-lg"/>
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

      <p class="forgot-password text-right">
        Already registered
        <router-link :to="{name: 'login'}">sign in?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>


fieldset {
  border: 0px solid white;
}

button {
  font-size: 30px;
  font-weight: bold;
  color: rgb(66, 184, 131);
  background-color: black;
  padding: 4px;
  height: 40px;
  border: 1px solid yellowgreen;
}


input, textarea {
  color: white;
  background-color: black;
  padding: 1px;
  border: 1px solid white;
}

label div {
  white-space: pre-line;
  color: gray;
  padding: 0px;
}
</style>
