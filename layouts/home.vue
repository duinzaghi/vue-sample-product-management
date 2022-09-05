<template>
  <div class="sb-nav-fixed">
    <Nav/>
    <div id="layoutSidenav">
      <SideBarHeader/>
      <div id="layoutSidenav_content">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeLayout',
}
</script>

<style>

</style>
