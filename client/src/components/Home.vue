<template>
  <div class="hello">
    <div>
      <div class="ui huge top secondary fixed menu" id="top-menu">
        <router-link to="/" class="item" style="padding-left: 80px;">
          <img src="../assets/Hacktiv8.png" alt="">
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbspHacktiv<b>OverFlow</b>
        </router-link>
        <router-link to="/" active-class="active" class="item" exact>
          Home
        </router-link>
        <router-link to="/users" active-class="active" class="item" exact>
          Members
        </router-link>
        <div class="right menu" style="padding-right: 70px;">
          <div class="item">
            <div class="ui action input">
              <input type="text" placeholder="Type here.. " style="width: 280px;">
              <div class="ui button">Search</div>
            </div>
          </div>
          <router-link to="/signin" active-class="active" class="item" exact v-if="!isLogin">
            Login
          </router-link>
          <a class="item" @click="getUserSignout" v-if="isLogin">
            Sign Out
          </a>
        </div>
      </div>
    </div>
    <transition name="custom-classes-transition" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutRight"><router-view v-if="show"></router-view></transition>
    <div class="ui fluid container" style="padding-top: 40px;">
          <div class="ui inverted vertical footer segment" style="height: 230px; padding-top: 50px;">
              <div class="ui container">
                  <div class="ui stackable inverted divided equal height stackable grid">
                      <div class="three wide column">
                          <h4 class="ui inverted header">About</h4>
                          <div class="ui inverted link list">
                            <a href="#" class="item">Sitemap</a>
                            <a href="#" class="item">Contact Us</a>
                            <a href="#" class="item">Religious Ceremonies</a>
                            <a href="#" class="item">Gazebo Plans</a>
                          </div>
                      </div>
                      <div class="three wide column">
                          <h4 class="ui inverted header">Services</h4>
                          <div class="ui inverted link list">
                            <a href="#" class="item">Banana Pre-Order</a>
                            <a href="#" class="item">DNA FAQ</a>
                            <a href="#" class="item">How To Access</a>
                            <a href="#" class="item">Favorite X-Men</a>
                          </div>
                      </div>
                      <div class="seven wide column">
                          <h4 class="ui inverted header">Footer Header</h4>
                          <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      page: 'Home',
      show: true
    }
  },
  methods: {
    ...mapActions([
      'userSignoutMethod',
      'checkTokenFromLocalStorageMethod'
    ]),
    getUserSignout () {
      this.userSignoutMethod()
    }
  },
  computed: mapGetters({
      isLogin: 'getLoginStatus'
  }),
  created () {
    this.checkTokenFromLocalStorageMethod()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ui.fixed.menu {
    background-color: rgba(255, 255, 255, 0.88);
    border-bottom-width: 0px 0px 10px 0px;
    border-bottom-style: solid;
    border-bottom-color: orange;
  }
</style>
