<template>
    <b-container>
        <b-list-group horizontal>
            <b-list-group-item @click="openMain" class="text-center" button>
              Home
            </b-list-group-item>

            <b-list-group-item @click="openResume" class="text-center" button>
              About Me
            </b-list-group-item>

            <b-list-group-item @click="openProjects" class="text-center" button>
              Projects
            </b-list-group-item>
        </b-list-group>
    </b-container>
</template>


<script>
export default
{
  name: 'navBar',
  methods:
        {
          openMain() {
            this.$emit('open-main');
          },
          openResume() {
            this.$emit('open-resume');
          },
          openProjects() {
            this.$emit('open-projects');
          },
        },

};
</script>


<style>

</style>
