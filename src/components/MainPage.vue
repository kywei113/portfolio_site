<template>
  <b-container>
    <b-card title="Welcome!">
      <b-row>
        <b-col>
          <p>You've found your way to Kyle Wei's portfolio website</p>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <h4>In a Rush?</h4>
          <p>Click on the following link to download a copy of Kyle Wei's resume.</p>

          <a href="https://1drv.ms/b/s!AmQ7QGGJ_UIEo2OccoQeG74ZfwWa?e=qvyqXR"><font-awesome-icon id="pdfIcon" style="color: red;" :icon="['far', 'file-pdf']" /> Resume</a>


        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>


<script>
export default
{
  name: 'mainPage',
  data() {
    return {

    };
  },
};
</script>

<style>
#pdfIcon
{
  color: red;
}
</style>
