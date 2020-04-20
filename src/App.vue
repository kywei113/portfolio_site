<template>
    <b-container id="vueBody">
      <b-img id="headerImage" class="img-fluid w-100" :src="require('./assets/images/mmbRange.jpg')"></b-img>


      <b-list-group horizontal id="navBar">
        <b-button @click="openMain"
                           class="text-center" button>
          Home
        </b-button>
        <b-button @click="openEducation"
                           class="text-center" button>
          Education & Skills
        </b-button>
        <b-button @click="openExperience"
                  class="text-center" button>
          Experience
        </b-button>
        <b-button @click="openProjects"
                           class="text-center" button>
          Projects
        </b-button>
      </b-list-group>

      <router-view id="routerContent"></router-view>
    </b-container>
</template>

<script>
export default
{
  name: 'app',
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
            this.$router.push('home');
          },
          openEducation() {
            this.$router.push('education');
          },
          openExperience() {
            this.$router.push('experience');
          },
          openProjects() {
            this.$router.push('projects');
          },
        },
};
</script>

<style>
  /*Body Styles*/
  .card
  {
    margin-top: 1%;
    margin-bottom: 1%;
    box-shadow: 3px 3px 8px;

  }
  h3
  {
    font-size: 1.1rem;
  }
  body
  {
    background-color: #3b78b3;
  }
  #vueBody
  {
    background-color: lightgrey;
    padding: 0;
    padding-bottom: 1%;
  }

  /*Nav Bar Styles*/
  #navBar
  {
    justify-content: center;
  }
  #navBar > button
  {
    flex-grow: 1;
    background-color: cadetblue;
  }
  #navBar > button:hover
  {
    background-color: white;
    color: steelblue;
  }
  #routerContent
  {
    margin-top: 2%;
  }

</style>
