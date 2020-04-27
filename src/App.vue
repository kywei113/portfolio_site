<template>
      <b-row align-h="start" id="contentRow" class="mr-lg-5">
        <b-col lg>
          <b-navbar type="light" toggleable="lg" fixed="top">
            <b-navbar-brand id="navBrand" disabled>
              <h4 id="brandHeader">Kyle Wei</h4>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item to="about">About Kyle</b-nav-item>
                <b-nav-item to="experience">Experience</b-nav-item>
                <b-nav-item to="projects">Projects</b-nav-item>
                <b-nav-item id="resumeLink" href="https://1drv.ms/b/s!AmQ7QGGJ_UIEo2WVC2Da2W-B9noD?e=o7xHQe" target="_blank" rel="noopener noreferrer">
                  Resume
                </b-nav-item>
                <b-nav-form id="contactForm">
                  <b-nav-item href="mailto:wei.kyle@gmail.com" target="_blank" rel="noopener noreferrer">
                    <font-awesome-icon id="emailIcon" class="contactIcon" :icon="['far', 'envelope']" />
                  </b-nav-item>
                  <b-nav-item href="https://www.linkedin.com/in/kyle-wei/" target="_blank" rel="noopener noreferrer">
                    <font-awesome-icon id="linkedinIcon" class="contactIcon" :icon="['fab', 'linkedin']"/>
                  </b-nav-item>
                </b-nav-form>
              </b-navbar-nav>
              <b-navbar-nav class="ml-auto">
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>

          <transition name="content-fade" mode="out-in">
            <router-view id="routerContent"></router-view>
          </transition>
        </b-col>

      </b-row>
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
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Poppins:wght@500&family=Raleway&display=swap');

  body
  {
    max-width: 98vw;
    /*background-image: url("assets/images/circuit-gradient-side.png"), url("assets/images/creampaper.png");*/
    background-image: url("assets/images/circuit-lightgrey.png"), url("assets/images/creampaper.png");
    background-repeat: no-repeat, repeat;
    background-position: right center, center center;
    background-size: auto, auto;
    background-attachment: fixed;
    font-family: 'Open Sans', sans-serif;
  }
  /*Body Styles*/
  h1, h2, h3, h4
  {
    font-family: 'Poppins', sans-serif;
  }
.contactIcon
{
  font-size: 2rem;
}
nav
{
  background-color:whitesmoke;
  /*background: linear-gradient(90deg, rgba(255,255,255,1) 44%, rgba(77,212,235,1) 70%, rgba(0,42,99,1) 100%);*/
  box-shadow: 1px 1px 5px;
}

.navbar-light .navbar-nav .nav-link
{
  font-family: 'Raleway', 'Open Sans', sans-serif;
  color: black;
}

.navbar-light:hover .navbar-nav:hover .nav-link:hover
{
  font-family: 'Raleway', 'Open Sans', sans-serif;
  color: black;
  text-decoration: underline;
}
#brandHeader
{
  color:dodgerblue;
}
#resumeLink
{
  color: grey;
}
#resumeLink:hover
{
  color: black;
}
#emailIcon
{
  color: dodgerblue;
}
#linkedinIcon
{
  color: dodgerblue;
}
.card
{
  margin-top: 2%;
  margin-bottom: 3%;
  box-shadow: 1px 1px 2px
}
.card-body
{
  padding: 2em;
  background-color: ghostwhite;

}
h3
{
  font-size: 1.1rem;
}
#routerContent
{
  padding-top: 6rem;
}
.content-fade-enter-active, .content-fade-leave-active {
  transition: opacity .4s ease;
  transition-delay: .1s;
}
.content-fade-enter, .content-fade-leave-to
{
  opacity: 0;
}

</style>
