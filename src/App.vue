<template>
    <b-container id="vueBody">

      <b-row>
        <b-col>
          <b-img id="headerImage" class="img-fluid w-100" :src="require('./assets/images/mmbRange.jpg')"></b-img>
        </b-col>
      </b-row>


      <b-row>
        <b-col>
          <b-list-group horizontal id="navBar">
            <b-button @click="openEducation"
                      class="text-center" button>
              About Kyle
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
        </b-col>
      </b-row>

      <b-container>
            <b-card id="contactCard">
              <b-row align-h="between">
                <b-col cols="4">
                  <span>Kyle Wei | <a href="mailto:wei.kyle@gmail.com"><font-awesome-icon class="contactIcon" :icon="['far', 'envelope']" /> wei.kyle@gmail.com</a></span>
                </b-col>
                <b-col cols="4" id="linkColumn">
                  <a href="https://www.linkedin.com/in/kyle-wei/"><font-awesome-icon class="contactIcon" :icon="['fab', 'linkedin']"/>LinkedIn</a>
                  <a id="resumeIcon" href="https://1drv.ms/b/s!AmQ7QGGJ_UIEo2WVC2Da2W-B9noD?e=o7xHQe"><font-awesome-icon class="contactIcon" id="pdfIcon" style="color: red;" :icon="['far', 'file-pdf']" /> Resume</a>
                </b-col>
              </b-row>
            </b-card>
      </b-container>

      <b-row>
        <b-col>
          <router-view id="routerContent"></router-view>
        </b-col>
      </b-row>
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
  watch:
    {
      // eslint-disable-next-line no-unused-vars
      $route(to, from) {
        document.title = to.meta.title || 'Profile';
      },
    },
  mounted() {
    document.title = 'Kyle Wei';
  },
};
</script>

<style>
  /*Body Styles*/
  #headCol
  {
    background-image: url("./assets/images/mmbRange.jpg");
    background-size: 100% 100%;
    height: 25vh;
    width: 900px;
    padding:0;
  }
  #linkColumn
  {
    text-align: right;
  }
.contactIcon
{
  font-size: 1.5rem;

}
#contactCard
{
  margin-bottom: 0;
}
  .card
  {
    margin-top: 1%;
    margin-bottom: 1%;
    box-shadow: 3px 3px 8px;
  }
  .card-body
  {
    padding: 0.5rem;
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
    box-shadow: 10px 10px 15px;
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
    margin-top: 0;
  }

</style>
