<template>
      <b-row>
        <b-col>
          <b-navbar type="light" toggleable="lg" fixed="top">
            <b-navbar-brand id="navBrand" disabled>
              <h4>Kyle Wei</h4>
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
    background-image: url("assets/images/creampaper.png");
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
  background: linear-gradient(90deg, rgba(245,245,245,1) 20%, rgba(102,220,240,1) 80%, rgba(45,216,251,1) 100%);
  box-shadow: 3px 3px 8px;
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

#resumeLink
{
  color: grey;
}
#resumeLink:hover
{
  color: black;
}
#resumeCloudIcon
{
  color: dodgerblue;
}
#emailIcon
{
  /*background-color: whitesmoke;*/
  color: red;
}
#linkedinIcon
{

  /*background-color: whitesmoke;*/
  color: dodgerblue;
}
  .card
  {
    margin-top: 2%;
    margin-bottom: 2%;
    box-shadow: 3px 3px 8px;
    border-radius: 20px;
    background-color: rgba(245,245,245, 0.7);
  }
  .card-body
  {
    padding: 2em;
    background-color: rgba(245,245,245, 0.7);
    border-radius: 20px;

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
