<template>
  <b-container>
    <b-card title="About Kyle">
      <b-row>
        <b-col>
          <p>A second-year Computer Systems Technology student aiming to graduate in June 2020. He has had an
            interest in computers since childhood, has built several computer systems and networks,
            and looks forward to entering into the IT industry upon graduation.</p>

          <p>Ecletic in his hobbies, Kyle participates in a number of activities ranging from musical performance,
            with over 13 combined years of study between the piano, violin, and banjo, to sports such as baseball,
            badminton, football, and snowboarding, for which he makes an annual trip to Marmot Basin. He has travelled around Canada, the United States,
            China in 2008, and Japan in 2018.</p>
        </b-col>
      </b-row>
    </b-card>
    <b-card title='Skills'>
      <b-row>
        <b-col>
          <h3>Systems</h3>
          <ul id="sysList">
            <li>Domain and System Management</li>
            <ul>
              <li>Microsoft Active Directory</li>
              <li>System Center Configuration Manager (SCCM)</li>
              <li>LDAP in Linux environments</li>
            </ul>
            <li>Machine Virtualization</li>
            <ul>
              <li>Microsoft Azure Cloud Services</li>
              <li>VMWare ESXi</li>
            </ul>
            <li>Networking and Hardware</li>
            <ul>
              <li>Setup and configuration of network devices</li>
              <li>Assembly and installation of network wiring</li>
              <li>Planning and assembly of computer hardware</li>
              <li>Setup and usage of Windows and Linux systems</li>
            </ul>
          </ul>
        </b-col>
        <b-col>
          <h3>Development Languages</h3>
          <ul id="langList">
            <li>Programming</li>
            <ul>
              <li>C#</li>
                <ul>.NET Core Framework</ul>
              <li>C++</li>
              <li>C</li>
              <li>Java</li>
              <li>Xamarin</li>
              <li>Swift</li>
              <li>Bash & Perl Script</li>
              <li>VBA</li>
            </ul>
            <li>Web Development</li>
            <ul>
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <ul>
                  <li>Bootstrap</li>
                  <li>Vue.js</li>
              </ul>
              <li>PHP</li>
            </ul>
            <li>Database Mangement</li>
            <ul>
              <li>SQL</li>
              <ul>
                <li>Microsoft SQL Server</li>
                <li>SQLite</li>
              </ul>
              <li>PSQL</li>
            </ul>
          </ul>


        </b-col>
      </b-row>

    </b-card>
    <b-card title="Education">
      <b-row>
        <b-col>
          <h3 class="edTitle">Saskatchewan Polytechnic</h3>
          <ul id="spEd">
            <li id="spProg">Computer Systems Technology, Diploma</li>
            <li>September 2018 - June 2020</li>
            <ul>
              <li>A broad program covering topics in Application and Database Programming, Web Design, System Administration, and Hardware Design</li>
              <li>Excelled in Systems and Network Administration, and Programming areas</li>
            </ul>
          </ul>
        </b-col>

      </b-row>

      <b-row>
        <b-col>
          <h3 class="edTitle">University of Saskatchewan</h3>
          <ul id="uosEd">
            <li id="uosProg">Computer Science, BSc. (Incomplete)</li>
            <li>September 2011 - June 2017</li>
            <ul>
              <li>Took a wide range of courses in computer sciences, natural and social sciences, and linguistics</li>
              <li>Studied German to the A2 Level for German Language Proficiency</li>
            </ul>
          </ul>
        </b-col>

      </b-row>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: 'Skills',
};
</script>

<style scoped>
  h3
  {
    font-weight: bold;
  }
  .edTitle
  {
    font-size: 1.05em;
  }

#spProg, #uosProg
{
  font-style: italic;
}

#langList > li, #sysList > li
{
  margin-top: 1%;
}
</style>
