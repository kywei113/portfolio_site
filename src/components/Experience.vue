<template>
    <b-container>
      <b-card class="pageTitle" title="Related Experience">
        <b-row>
          <b-col>
            <p class="editTime">Last edited: April 27, 2020</p>
            <h3 class="jobTitle">Systems Technician (Freelance)</h3>
            <p class="jobTime">February 2020 -> Present </p>
            <ul>
              <li>Working with small business clients to provide network and technical support</li>
              <li>Supporting <em>Blakley RG Chartered Accountant</em> with server and network solutions</li>
              <ul>
                <li>Identified and resolved <em>Microsoft Exchange</em> issues stemming from improper DNS configurations</li>
                <li>Setup and installed new server back up schedule, and Uninterruptible Power Supply (UPS) with monitoring software</li>
                <li>Assisted with transitioning select personnel to remote operations due to COVID-19 Pandemic</li>
              </ul>
            </ul>

            <h3 class="jobTitle">System Support Technician (Summer Student) | <span class="jobLoc"> Saskatoon Public Schools</span></h3>
            <p class="jobTime">June 2019 -> August 2019</p>
            <ul>
              <li>Collaborated with other SPS Information Services staff to provide technical support for the Saskatoon Public School Division</li>
              <li>Assisted teachers and support staff via phone, email, support ticketing software, remote desktop, and in-person meetings</li>
              <li>Managing domain users and objects through Active Directory and System Center Configuration Manager</li>
              <li>Maintaining and replacing network hardware throughout elementary and high schools</li>
            </ul>

            <h3 class="jobTitle">Product Process Specialist | <span class="jobLoc"> Best Buy Canada</span></h3>
            <p class="jobTime">July 2015 -> Present</p>
            <ul>
              <li>Product Process team has been recognized for consistently the best warehouse in Western Canada</li>
              <li>Shipping and receiving store stock and high value goods</li>
              <li>Operating work machinery safely within enclosed spaces</li>
              <li>Working with other store staff to rotate and maintain hardware</li>
            </ul>

            <h3 class="jobTitle">Home Solutions/Gaming Specialist |<span class="jobLoc"> Best Buy Canada</span></h3>
            <p class="jobTime">November 2011 -> August 2014</p>
            <ul>
              <li>Showcased and provide consult to with customers on video game consoles, games, televisions, and relevant accessories</li>
              <li>Meeting with brand representatives to learn about new products, features, and benefits offered</li>
            </ul>
          </b-col>
        </b-row>

      </b-card>

      <b-card title="Volunteer Work">
        <b-row>
          <b-col>
            <h3 class="jobTitle">Technical Mentor | <span class="jobLoc">Canada Learning Code</span></h3>
            <p class="jobTime">February 29, 2020</p>
            <ul>
              <li>Volunteered as a Technical Mentor at the Teens Learning Code: HTML & CSS workshop</li>
              <li>Assisted children and teenagers with constructing a personalized web resume</li>
              <li>Worked with other mentors and session organizers to provide a safe, learning environment</li>
            </ul>

            <h3 class="jobTitle">Instructor Aide/Tutor | <span class="jobLoc">Saskatchewan Polytechnic</span></h3>
            <p class="jobTime">Winter 2020</p>
            <ul>
              <li>Tutoring two first year Computer Systems Technology students</li>
              <li>Providing assistance and clarification about lecture topics and programming concepts</li>
              <li>Creating a weekly meeting schedule that fit both students' schedules</li>
            </ul>

            <h3 class="jobTitle">Junior Football Coach | <span class="jobLoc">Centennial Collegiate</span></h3>
            <p class="jobTime">Fall 2012, Fall 2013</p>
            <ul>
              <li>Coached the Defensive Line unit comprised of Grade 9 and 10 students</li>
              <li>Taught theory, tactics, and skills associated with Defensive Line positions and Defense as a whole</li>
              <li>Worked with other coaches to incorporate different player positions in drills</li>
              <li>Conduct and supervised physical conditioning drills during practice days</li>
            </ul>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
</template>

<script>
export default {
  name: 'Experience',
};
</script>

<style scoped>
.jobTitle
{
  margin-bottom: 0;
}
.jobLoc
{
  font-style: italic;
}
.jobTime
{
  font-style: italic;
  margin-top: 0;
}
</style>
