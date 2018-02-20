<template>
  <div>
    Verifying
  </div>
</template>

<script>
export default {
  methods: {
    async verifyToken() {
      const authData = {
        action: 'verifySignupLong',
        value: this.$route.query.token
      }
      console.log(authData)
      await this.$store.dispatch('auth/authenticate')
      await this.$store.dispatch('authManagement/create', authData)
      this.$router.push('/onboarding')

    }
  },
  created () {
    this.verifyToken()
  }
}
</script>
