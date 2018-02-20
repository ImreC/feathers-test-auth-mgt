<template>
  <div>
    <section class="hero is-fullheight has-text-centered landinghero">



      <div class="hero-body">
        <div class="container">
          <div v-show = "button1" class = "button is-black is-outlined is-large" @click = "inputEmail()">
            CREATE ACCOUNT
          </div>
          <div v-show = "button2" class="field has-addons has-addons-centered" style="margin-bottom:0px;">
            <div class="control">
              <input class="input is-large" type="text" placeholder="Email" v-model = "user.email">
            </div>
            <div class="control">
              <div class="button is-black is-outlined is-large" @click = "signup()">
                SEND
              </div>
            </div>
          </div>
          <a v-show = "button3" class="button is-black is-outlined is-large" :href = "emailUrl">
            <span class="icon is-large">
              <i class="fa fa-check"></i>
            </span>
            <span>CHECK YOUR EMAIL</span>
          </a>
        </div>
      </div>
    </section>
    <section style="height:20vh">

    </section>
  </div>

</template>

<script>
export default {
  layout: 'navbarless',
  data () {
    return {
      isVisible: false,
      button1: true,
      button2: false,
      button3: false,
      user: {
        email: '',
        password: 'test'
      },
      emailUrl: ''
    }
  },
  methods: {
    scrollDown (gender) {
      this.$SmoothScroll(
        this.$refs.valueprop,
        1500
      )
      this.$store.commit('products/clearAll')
      this.$store.dispatch('products/find', {
        query: {
          $limit: 9,
          gender: gender
        }
      })
    },
    inputEmail () {
      this.button1 = false
      this.button2 = true
    },
    signup () {
      const email = this.user.email
      const password = this.user.password
      this.$store.dispatch('users/create', this.user)
        .then(() => {
          this.$store.dispatch('auth/authenticate', {strategy: 'local', email, password})
        })
        .then(() => {
          this.button2 = false
          this.emailUrl = 'http://' + this.user.email.split('@')[1]
          this.button3 = true
        })
        .catch(error => {
          // Convert the error to a plain object and add a message.
          let type = error.errorType
          error = Object.assign({}, error)
          error.message = (type === 'uniqueViolated')
            ? 'That email address is unavailable.'
            : 'An error prevented signup.'
          this.error = error
        })
      }
  },
  computed: {
    products () {
      return this.$store.getters['products/list'].slice(0,9)
    }
  },
  mounted () {
    this.$store.dispatch('products/find', {
      query: {
        $limit: 9
      }
    })
  }
}
</script>

</script>
<style lang="scss">
.landinghero {
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
}

.hero-overlay {
  position: absolute;
  width: 100vw;
  height: 100vh;
}

.left-half {
  background-color: rgba(41,95,78,0.30);
  height: 100vh;
}

.left-half:hover{
  background: rgba(41,95,78,0.40);
  cursor: pointer;
}

.lefttext {
  position: absolute;
  bottom: 0px;
  width: 50%;
  margin: 0 auto;
}

.right-half {
  background: rgba(41,95,78,0.50);
  height: 100vh;
}

.right-half:hover{
  background: rgba(41,95,78,0.60);
  cursor: pointer;
}

.righttext {
  position: absolute;
  bottom: 0px;
  width: 50%;
  margin: 0 auto;
}




</style>
