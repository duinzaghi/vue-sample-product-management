<template>
  <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"><span class="font-weight-bold">{{user.username}}</span><span class="text-black-50">{{user.email}}</span><span> </span></div>
        </div>
        <div class="col-md-6 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">User Name</label><input type="text" class="form-control" placeholder="first name" v-model="user.username"></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12 mt-3"><label class="labels">Age</label><input type="text" class="form-control" placeholder="enter email id" v-model="user.age"></div>
                    <div class="col-md-12 mt-3"><label class="labels">Email</label><input type="text" class="form-control" placeholder="enter email id" v-model="user.email"></div>
                    <div class="col-md-12 mt-3"><label class="labels">Mobile Number</label><input type="Phone" class="form-control" placeholder="enter phone number" value=""></div>
                </div>
                <!-- <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"></div>
                </div> -->
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "profilePage",
  layout: "home",
  fetch({ store, params }) {
    return store.dispatch("authenticate/fetch")
  },
  computed: {
    ...mapGetters({
      user: "authenticate/profile"
    }),
  }
}
</script>

<style>

</style>
