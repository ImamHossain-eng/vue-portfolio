<template>
  <div>
    <div class="login_wrapper">
      <div class="logo">
        <img
          src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
          alt=""
        />
      </div>
      <div class="text-center mt-4 name">Twitter</div>
      <form class="p-3 mt-3" @submit.prevent="submitLogin" method="POST">
        <div class="form-field d-flex align-items-center">
          <span class="fa fa-user"></span>
          <input
            type="text"
            v-model="email"
            name="email"
            id="userName"
            placeholder="Username"
            required
          />
        </div>
        <div class="form-field d-flex align-items-center">
          <span class="fa fa-key"></span>
          <input
            type="password"
            v-model="password"
            name="password"
            id="pwd"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" class="btn mt-3">Login</button>
      </form>
      <div class="text-center fs-6">
        <a href="#">Forget password?</a> or <a href="#">Sign up</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ['api'],
  data() {
    return {
      email: "",
      password: "",
      access:{}

    };
  },
  methods: {
    submitLogin() {
      if(this.email != null && this.password != null){
        const cred = {email: this.email, password: this.password}

        axios
        .post(this.api+'/login', cred)
        .then((res) => {
          this.auth = res.data
          // console.log(this.auth)
          this.$emit('logSuccess', this.auth)
        })
        .catch((err) => console.log(err));
      } else {
        console.log('Please fill all the fields');
      }
      

    // console.log(`Submitted: with ${this.email} and ${this.password} to this link: ${this.api}`)
    },
  },
};
</script>


<style scoped>
/* Importing fonts from Google */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

/* Reseting */

.login_wrapper {
  max-width: 350px;
  min-height: 500px;
  margin: 80px auto;
  padding: 40px 30px 30px 30px;
  background-color: #ecf0f3;
  border-radius: 15px;
  box-shadow: 13px 13px 20px #cbced1;
}

.logo {
  width: 80px;
  margin: auto;
}

.logo img {
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 0px 3px #5f5f5f, 0px 0px 0px 5px #ecf0f3, 8px 8px 15px #a7aaa7,
    -8px -8px 15px #fff;
}

.login_wrapper .name {
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 1.3px;
  padding-left: 10px;
  color: #555;
}

.login_wrapper .form-field input {
  width: 100%;
  display: block;
  border: none;
  outline: none;
  background: none;
  font-size: 1.2rem;
  color: #666;
  padding: 10px 15px 10px 10px;
  /* border: 1px solid red; */
}

.login_wrapper .form-field {
  padding-left: 10px;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff;
}

.login_wrapper .form-field .fas {
  color: #555;
}

.login_wrapper .btn {
  box-shadow: none;
  width: 100%;
  height: 40px;
  background-color: #03a9f4;
  color: #fff;
  border-radius: 25px;
  box-shadow: 3px 3px 3px #b1b1b1, -3px -3px 3px #fff;
  letter-spacing: 1.3px;
}

.login_wrapper .btn:hover {
  background-color: #039be5;
}

.login_wrapper a {
  text-decoration: none;
  font-size: 0.8rem;
  color: #03a9f4;
}

.login_wrapper a:hover {
  color: #039be5;
}

@media (max-width: 380px) {
  .login_wrapper {
    margin: 30px 20px;
    padding: 40px 15px 15px 15px;
  }
}
</style>