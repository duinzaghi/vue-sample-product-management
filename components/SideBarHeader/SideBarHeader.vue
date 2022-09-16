<template>
  <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
                <div class="nav">
                    <div class="sb-sidenav-menu-heading">Core</div>
                    <nuxt-link class="nav-link" to="/">
                        <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                        Dashboard
                    </nuxt-link>
                    <div class="sb-sidenav-menu-heading">Manager</div>
                    <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                        <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                        Manager user
                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                    </a>
                      <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                          <nav class="sb-sidenav-menu-nested nav">
                              <nuxt-link class="nav-link" to="/user">List user</nuxt-link>
                          </nav>
                      </div>
                    <nuxt-link class="nav-link collapsed" to="/categories" >
                        <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                        Categories
                    </nuxt-link>
                    <nuxt-link class="nav-link collapsed" to="/products" >
                        <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                        Products
                    </nuxt-link>
                </div>
            </div>
            <div class="sb-sidenav-footer">
                <div class="small">Logged in as:</div>
                Admin Manager
            </div>
        </nav>
      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
