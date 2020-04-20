<template>
  <b-container>
    <b-card title="Projects">
      <h3>Cans4Cosmo Recycling Application</h3>
      <b-row align-h="between" align-v="start">
        <b-col cols="7">
          <ul>
            <li>A web application developed for Cosmopolitan Industries</li>
            <li>Subscriber interface aimed to allow clients to subscribe for scheduled recycling pickups from Cosmopolitan</li>
            <li>Administrative interface used to manage route table generation, location groupings, and subscriber information</li>
            <li>Front-end developed using the Vue.js and Bootstrap frameworks</li>
            <li>Back-end database and API developed using .NET Core and Entity Framework in C#</li>
          </ul>
        </b-col>
        <b-col cols="3" id="cosmoImage">
          <b-img  class="img-fluid" :src="require('../assets/images/cans4cosmo_logo.png')"></b-img>
        </b-col>
      </b-row>
    </b-card>

    <b-card>
      <b-row>
        <b-col>
          <h3>Saskatoon Public Schools Staff Laptop Refresh</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <ul>
            <li>Worked with SPS Information Services to replace teacher laptops throughout the school division during June, 2019</li>
            <li>Met with teachers to help transfer existing data onto their new laptops, provide information on laptop usage, and address any concerns</li>
            <li>Repackaged old laptop computers in preparation for recycling</li>
          </ul>
        </b-col>
        <b-col id="spsLogo">
          <b-img  class="img-fluid" :src="require('../assets/images/sps.jpeg')"></b-img>
        </b-col>
      </b-row>

    </b-card>

    <b-card>
      <h3>Nutana Collegiate Server Rack and VoIP Upgrade</h3>
      <b-row algn-h="between">
        <b-col cols="8">
          <ul>
            <li>Installed new server racking in the network room, and replaced Avaya and Nortel VoIP phones with Cisco phones</li>
            <li>Routed network cabling from old server cabinetry to new server room through walls and drop ceilings</li>
            <li>Reinstalled server hardware into new standing rack and terminated network cabling onto patch panels</li>
            <li>Configured Cisco VoIP phones to replace old Avaya and Nortel phones throughout the school</li>
            <li>Worked with Charter technicians to set up phone functionality and test functions such as 911 dialing, failover modes, and cross-site operations</li>
          </ul>
        </b-col>
        <b-col id="ntcImage" cols="3">
          <b-img class="img-fluid" :src="require('../assets/images/ntc_standRack.jpg')"></b-img>
        </b-col>
      </b-row>
    </b-card>

    <b-card>
      <h3>North Park Wilson School Network Upgrade</h3>
      <b-row>
        <b-col>
          <ul>
            <li>Prepared library within North Park Wilson Elementary School for its transition to a computer lab</li>
            <li>Hauled and mounted new network cabinet</li>
            <li>Cut and assembled CAT6 network cabling, network drops, and cable channels</li>
            <li>Installed new network switches and connected the new hardware to the existing school network</li>
          </ul>
        </b-col>
        <b-col>
          <b-img id="npwImage" class="img-fluid" :src="require('../assets/images/npw_channelCabinet.jpg')"></b-img>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods:
    {
      // eslint-disable-next-line no-unused-vars
      onSlideStart(slide) {
        this.sliding = true;
      },
      // eslint-disable-next-line no-unused-vars
      onSlideEnd(slide) {
        this.sliding = false;
      },
    },
};
</script>

<style scoped>
  h3
  {
    font-style:italic;
  }
  #cosmoImage
  {
    margin-right: 10%;
  }
  #spsLogo
  {

  }
</style>
