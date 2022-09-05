<template>
  <nav class="sb-topnav navbar navbar-expand navbar-light bg-light">
      <!-- Navbar Brand-->
      <a class="navbar-brand font-bold text-3xl p-3" href="/">Admin Manager</a>
      <!-- Sidebar Toggle-->
      <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!" @click="toggle"><i class="fas fa-bars"></i></button>

      <ul class="navbar-nav ms-auto me-3 me-lg-4">
          <UserNav/>
      </ul>
    </nav>
</template>

<script>
import UserNav from '~/components/Nav/UserNav.vue'
export default {
  components: {UserNav},
  methods: {
    toggle() {
      document.body.classList.toggle('sb-sidenav-toggled');
      localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    }
  }
}
</script>

<style>

</style>
