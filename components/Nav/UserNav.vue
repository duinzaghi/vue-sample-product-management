<template>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
        <li><nuxt-link class="dropdown-item" to="user/profile">Profile</nuxt-link></li>
        <li><hr class="dropdown-divider" /></li>
        <li><button class="dropdown-item" @click="logout">Logout</button></li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'UserNav',
  methods: {
    async logout(){
      await this.$store.dispatch('authenticate/logout').then(()=>{
        this.$toaster.success('Logout success!', {timeout: 3000});
        this.$router.push('/login');
      })
    }
  }
}
</script>

<style>

</style>
