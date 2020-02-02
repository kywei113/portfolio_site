<template>
    <b-container>
        <nav-bar
          :propOne="this.propOne"
          :propTwo="this.propTwo"
          @open-main="openMain"
          @open-resume="openResume"
          @open-projects="openProjects"
        />
      <transition-group name="fade">
        <main-page v-if="showMain" :testProp="this.propOne" key="dynamic" class="animated"/>

        <resume v-if="showResume" :testProp="this.propTwo" key="dynamic" class="animated"/>

        <projects v-if="showProjects" key="dynamic" class="animated"/>
      </transition-group>

    </b-container>
</template>

<script>
import NavBar from './components/NavBar.vue';
import MainPage from './components/MainPage.vue';
import Resume from './components/Resume.vue';
import Projects from './components/Projects.vue';

export default
{
  name: 'app',
  components:
        {
          NavBar,
          MainPage,
          Resume,
          Projects,
        },
  data() {
    return {
      showMain: true,
      showResume: false,
      showProjects: false,
      propOne: '',
      propTwo: '',
    };
  },
  methods:
        {
          openMain() {
            this.showMain = true;
            this.showResume = false;
            this.showProjects = false;
          },
          openResume() {
            this.showMain = false;
            this.showResume = true;
            this.showProjects = false;
          },
          openProjects() {
            this.showMain = false;
            this.showResume = false;
            this.showProjects = true;
          },
        },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-leave-active {
  position: absolute;
}

.animated {
  transition: all 0.5s;
  /*display: flex;*/
  width: 100%;
}
</style>
