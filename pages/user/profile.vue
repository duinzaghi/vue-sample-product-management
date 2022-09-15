<template>
  <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"><span class="font-weight-bold">{{user.username}}</span><span class="text-black-50">{{user.email}}</span><span> </span></div>
        </div>
        <div class="col-md-6 border-right">
            <div class="p-3 py-5">

                <template v-if="edit===true">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Edit Profile</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">User Name</label><input type="text" class="form-control" placeholder="first name" v-model="editProfile.username"></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12 mt-3"><label class="labels">Age</label><input type="text" class="form-control" placeholder="enter your age" v-model="editProfile.age"></div>
                    <div class="col-md-12 mt-3"><label class="labels">Email</label><input type="text" class="form-control" placeholder="enter email" v-model="editProfile.email"></div>
                    <div class="col-md-12 mt-3"><label class="labels">Address</label><input type="text" class="form-control" placeholder="enter your address" v-model="editProfile.address"></div>
                    <div class="col-md-12 mt-3"><label class="labels">Mobile Number</label><input type="Phone" class="form-control" placeholder="enter phone number" v-model="editProfile.phoneNumber"></div>
                    <div class="mt-5 text-center"><button class="btn btn-primary profile-button" @click="updateProfile" type="button">Save Profile</button></div>
                </div>
                </template>
                <template v-else>
                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile</h4>
                  </div>
                  <div class="row mt-2">
                      <div class="col-md-6"><label class="labels">User Name</label><input type="text" class="form-control" placeholder="first name" :value="user.username"></div>
                  </div>
                  <div class="row mt-3">
                      <div class="col-md-12 mt-3"><label class="labels">Age</label><input type="text" class="form-control"  :value="user.age"></div>
                      <div class="col-md-12 mt-3"><label class="labels">Email</label><input type="text" class="form-control"  :value="user.email"></div>
                      <div v-show="user.address" class="col-md-12 mt-3"><label class="labels">Address</label><input type="Phone" class="form-control"  :value="user.address"></div>
                      <div v-show="user.phoneNumber" class="col-md-12 mt-3"><label class="labels">Mobile Number</label><input type="Phone" class="form-control"  :value="user.phoneNumber"></div>
                  </div>
                  <div @click="setEdit(user)" class="mt-5 text-center"><button class="btn btn-primary profile-button"  type="button">Edit Profile</button></div>
                </template>
                <!-- <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"></div>
                </div> -->
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
  data(){
    return {
      edit: false,
      editProfile: {},
    }
  },
  fetch({ store, params }) {
    return store.dispatch("authenticate/fetch")
  },
  computed: {
    ...mapGetters({
      user: "authenticate/profile"
    }),
  },
  methods: {
    setEdit(data){
      const temp = JSON.parse(JSON.stringify(data));
      this.edit = true;
      this.editProfile = temp;
    },
    async updateProfile(){
      console.log(this.editProfile);
      await this.$store.dispatch('authenticate/update', { id: this.editProfile._id, data: this.editProfile}).then(res => {
          this.$toaster.success('Update success!', {timeout: 3000});
          this.edit = false;
      }).catch(err => {this.$toaster.error('Register failed!', {timeout: 3000});})
    }
  }
}
</script>

<style>

</style>
