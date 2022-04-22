<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <b-container class="container">
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-white">Create an account</h1>
              <p class="text-lead text-white">
                Use these awesome forms to login or create new account in your
                project for free.
              </p>
            </b-col>
          </b-row>
        </div>
      </b-container>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            class="fill-default"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <!-- Table -->
      <b-row class="justify-content-center">
        <b-col lg="6" md="8">
          <b-card no-body class="bg-secondary border-0">
            <b-card-header class="bg-transparent pb-5">
              <div class="text-muted text-center mt-2 mb-4">
                <small>Sign up with</small>
              </div>
              <div class="text-center">
                <a href="#" class="btn btn-neutral btn-icon mr-4">
                  <span class="btn-inner--icon"
                    ><img src="img/icons/common/github.svg"
                  /></span>
                  <span class="btn-inner--text">Github</span>
                </a>
                <a href="#" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon"
                    ><img src="img/icons/common/google.svg"
                  /></span>
                  <span class="btn-inner--text">Google</span>
                </a>
              </div>
            </b-card-header>
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <small>Or sign up with credentials</small>
              </div>
              <validation-observer
                v-slot="{ handleSubmit }"
                ref="formValidator"
              >
                <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                  <base-input
                    alternative
                    class="mb-3"
                    prepend-icon="ni ni-hat-3"
                    placeholder="First Name"
                    name="firstName"
                    :rules="{ required: true }"
                    v-model="model.firstName"
                  >
                  </base-input>
                  <base-input
                    alternative
                    class="mb-3"
                    prepend-icon="ni ni-hat-3"
                    placeholder="Last Name"
                    name="lastName"
                    :rules="{ required: true }"
                    v-model="model.lastName"
                  >
                  </base-input>
                  <base-input
                    alternative
                    class="mb-3"
                    prepend-icon="ni ni-email-83"
                    placeholder="Email"
                    name="Email"
                    :rules="{ required: true, email: true }"
                    v-model="model.email"
                  >
                  </base-input>
                  <base-input
                    alternative
                    class="mb-3"
                    prepend-icon="ni ni-lock-circle-open"
                    placeholder="password"
                    type="password"
                    name="Password"
                    :rules="{ required: true, min: 6 }"
                    v-model="model.password"
                  >
                  </base-input>
                  <base-input
                    alternative
                    class="mb-3"
                    prepend-icon="ni ni-lock-circle-open"
                    placeholder="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    :rules="{ required: true, min: 6 }"
                    v-model="model.confirmPassword"
                  >
                  </base-input>
                  <base-input
                    alternative
                    class="mb-3"
                    prepend-icon="ni ni-hat-3"
                    placeholder="Date of Birth"
                    name="dob"
                    v-model="model.dob"
                  >
                  </base-input>
                  Male
                  <base-radio class="mb-3" name="gender" value="M"></base-radio>
                  Female
                  <base-radio class="mb-3" name="gender" value="F"></base-radio>
                  Status
                  <base-radio
                    class="mb-3"
                    name="status"
                    value="active"
                  ></base-radio>
                  Active
                  <base-radio
                    class="mb-3"
                    name="status"
                    value="inactive"
                  ></base-radio>
                  InActive
                  <base-input
                    alternative
                    class="mb-3"
                    prepend-icon="ni ni-hat-3"
                    placeholder="Mobile"
                    name="mobile"
                    v-model="model.mobile"
                  >
                  </base-input>
                  <div class="text-muted font-italic">
                    <small
                      >password strength:
                      <span class="text-success font-weight-700"
                        >strong</span
                      ></small
                    >
                  </div>
                  <b-row class="my-4">
                    <b-col cols="12">
                      <base-input name="Privacy" Policy>
                        <b-form-checkbox v-model="model.agree">
                          <span class="text-muted"
                            >I agree with the
                            <a href="#!">Privacy Policy</a></span
                          >
                        </b-form-checkbox>
                      </base-input>
                    </b-col>
                  </b-row>
                  <div class="text-center">
                    <b-button type="submit" variant="primary" class="mt-4"
                      >Create account</b-button
                    >
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { json } from "d3";
import BaseRadio from "../../components/Inputs/BaseRadio.vue";
export default {
  components: { BaseRadio },
  name: "register",
  data() {
    return {
      model: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        dob: "",
        gender: "",
        status: "",
        mobile: "",
        agree: false,
      },
    };
  },
  methods: {
    onSubmit() {
      const dataArr = 
        {
          firstName: this.model.firstName,
          lastName: this.model.lastName,
          email: this.model.email,
          password: this.model.password,
          confirmPassword: this.model.confirmPassword,
          dob: this.model.dob,
          gender: 'F',
          status: "active",
          mobile: this.model.mobile,
        };
      const userData = fetch("http://192.168.102.92:3003/auth/signup", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataArr),
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
        this.$router.push('login');
    },
  },
};
</script>
<style></style>
