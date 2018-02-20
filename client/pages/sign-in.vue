<template>
  <div id="app">
    <div class = "container">
      <section>
        <br />
        <div class = "content">
            <h1 class="title">Sign In</h1>
        </div>
        <div class="column is-4 is-offset-4">
          <div class="box">

            <form>
              <div class="field">
                <div class="control">
                  <input class="input is-large" type="email" placeholder="Your Email" autofocus="" v-model = "email">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large" type="password" placeholder="Your Password" v-model = "password">
                </div>
              </div>
              <div class="field">
                <label class="checkbox">
                  <input type="checkbox">
                  Remember me
                </label>
              </div>
              <div class = "columns">
                <div class = "column">
                  <a class="button is-block is-primary is-large" @click="login()">Login</a>
                </div>
                <div class = "column">
              <a class="button is-block is-primary is-large" @click="logout()">Logout</a>
                </div>
              </div>
            </form>
          </div>
          <p class="has-text-grey">
            <a href="#">Sign Up</a> &nbsp;·&nbsp;
            <a href="../">Forgot Password</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </section>
    </div>

  </div>
</template>


<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
    },
    login () {
      const email = this.email
      const password = this.password
      this.$store.dispatch('auth/authenticate', {strategy: 'local', email, password})
        .catch(error => {
          let type = error.className
          error = Object.assign({}, error)
          error.message = (type === 'not-authenticated')
            ? 'Incorrect email or password.'
            : 'An error prevented login.'
          this.error = error
        })
    }
  }
}
</script>

<style>
#app {
  min-height:60vh;
}
</style>
