<script setup>
import { onMounted, ref } from 'vue'
// import { initializeApp } from "firebase/app";
// import { collection, getDocs, getFirestore } from "firebase/firestore";
import TableRow from './components/TableRow.vue'
import TableHead from "./components/TableHead.vue";
// import SectionTitle from "./components/SectionTitle.vue";
// import SectionContent from "./components/SectionContent.vue";
// import GitHubIcon from "./components/GitHubIcon.vue";
import DaisyCard from './components/DaisyCard.vue';
// const firebaseConfig = {
//   apiKey: "AIzaSyApoLScnyY0elI4d5H88UJp_eBIQoWo3Hc",
//   authDomain: "mainsite-1d0e8.firebaseapp.com",
//   projectId: "mainsite-1d0e8",
//   storageBucket: "mainsite-1d0e8.appspot.com",
//   messagingSenderId: "108336659505",
//   appId: "1:108336659505:web:6490bfe05e2c8b1673a910"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);
const isLoading = ref(false)
const list = [
  {
    "id": "dancinggoats",
    "name": "Dancing Goats (WIP)",
    "description": "Work In Progress",
    "demo": "https://dancinggoats.vercel.app/",
    "github": "https://github.com/lostmypillow/dancinggoats"
  },
  {
    "id": "jcourses",
    "name": "JCourses",
    "description": "Django + React Web App for NTUT courses",
    "demo": "https://github.com/lostmypillow/jcourses",
    "github": "https://github.com/lostmypillow/jcourses"
  },
  {
    "id": "jsearch",
    "name": "JSearch React (Unmaintained)",
    "description": "React Frontend for OMDb API and HerosAPI",
    "demo": "https://lostmypillow.github.io/jsearch-react",
    "github": "https://github.com/lostmypillow/jsearch-react"
  },
  {
    "id": "jsearch-vue",
    "name": "JSearch Vue",
    "description": "JSearch But in Vue",
    "demo": "https://lostmypillow.github.io/jsearch-vue",
    "github": "https://github.com/lostmypillow/jsearch-vue"
  },
  {
    "id": "rarserver",
    "name": "jRAR",
    "description": "Django + React Web App for RPi | Arduino | RFID Project",
    "demo": "https://rarserver.lostmypillow.duckdns.org",
    "github": "https://github.com/lostmypillow/jrar"
  }
]

// async function getData() {
//   isLoading.value = true
//   isLoading.value = false
  // const querySnapshot = await getDocs(collection(db, "projects"));
  // isLoading.value = false
  // // console.log(querySnapshot)
  // querySnapshot.forEach((doc) => {
  //   // console.log(`${doc.id} => ${doc.data()}`);
  //   list.push(
  //     {
  //       "id": doc.id,
  //       "name": doc.data().name,
  //       "description": doc.data().description,
  //       "demo": doc.data().demo,
  //       "github": doc.data().github,
  //     }
  //   )
  // });
  // console.log(list)

// }

// onMounted(() => {
//   getData()
// })

// const subtitle = ref(`
//         `)

// const projects = ref(`  `)

</script>

<template>


  <div class="navbar flex w-full bg-base-100">
    <a class="btn btn-ghost text-xl">LOSTMYPILLOW</a>
  </div>
  <div class="flex flex-col  w-full items-center md:items-start justify-center ">



    <DaisyCard title="Who am I?">
      <p>I'm Johnny Lin.</p> <br />
      <p>I'm building:</p>

      <ul>
        <li> - <b>Django (Python)</b> web apps serving <b>React/Vue</b> frontends</li>
      </ul>
      <br />
      <p>I'm self-hosting those apps with:</p>
      <ul>
        <li> - <b>Docker containers</b> on my RPi 3B+ in my own home, behind an <b>NGINX</b> reverse proxy</li>
      </ul>
      <br />
      <p>I'm learning:</p>
      <ul>
        <li> - <b>Java</b> for future Spring Boot projects</li>
        <li> - <b>Rust</b> for systems programming</li>
        <li> - <b>NTLK</b> (Natural Language Toolkit) just for fun</li>
      </ul>
    </DaisyCard>

    <DaisyCard title="Featured Apps">
      <div class="flex flex-col gap-4 items-start justify-center">
        


        <div v-if="isLoading" class="flex items-center justify-start w-full gap-2">
          <span class="loading loading-spinner text-primary" sta></span>
          Loading...
        </div>

        <TableHead v-else>
          <TableRow v-for="de in list" :data=de />
        </TableHead>
      </div>
    </DaisyCard>

<DaisyCard title="My Videos">

These are the videos I've edited and made over the years, on YouTube.


</DaisyCard>
 


  </div>




</template>
