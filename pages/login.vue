<template>
  <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                                    <div class="card-body">
                                        <div>
                                            <div class="form-floating mb-3">
                                                <input v-model="userLogin.email" class="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                                <label for="inputEmail">Email address</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input v-model="userLogin.password" class="form-control" id="inputPassword" type="password" placeholder="Password" />
                                                <label for="inputPassword">Password</label>
                                            </div>
                                            <div class="form-check mb-3">
                                                <input class="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                                <label class="form-check-label" for="inputRememberPassword">Remember Password</label>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <a class="small" href="password.html">Forgot Password?</a>
                                                <button class="btn btn-primary" @click="login">Login</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer text-center py-3">
                                        <div class="small"><nuxt-link to="/signup">Need an account? Sign up!</nuxt-link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted"></div>
                            <div>
                                Copyright &copy; Your Website
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
</template>

<script>
export default {
  name: 'loginComponent',
  layout: 'authentication',
  data (){
    return {
      userLogin: {
        email: '',
        password: '',
      },
      isLogin : false,
    }
  },
  methods: {
    async login(){
      await this.$store.dispatch('authenticate/login', this.userLogin).then(res => {
        this.isLogin = true;
        this.$toaster.success('Login success!', {timeout: 3000});
        if(this.isLogin){
          this.$router.push('./');
        }
      }).catch(err => {
        this.$toaster.error('Login failed!', {timeout: 3000});
        this.$router.push('/login');
      })
    }
  }
}
</script>

<style>

</style>
