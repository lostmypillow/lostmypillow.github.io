<script setup>
import { onMounted, ref } from 'vue'
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import TableRow from './components/TableRow.vue'
import TableHead from "./components/TableHead.vue";
import SectionTitle from "./components/SectionTitle.vue";
import SectionContent from "./components/SectionContent.vue";
import GitHubIcon from "./components/GitHubIcon.vue";

const firebaseConfig = {
  apiKey: "AIzaSyApoLScnyY0elI4d5H88UJp_eBIQoWo3Hc",
  authDomain: "mainsite-1d0e8.firebaseapp.com",
  projectId: "mainsite-1d0e8",
  storageBucket: "mainsite-1d0e8.appspot.com",
  messagingSenderId: "108336659505",
  appId: "1:108336659505:web:6490bfe05e2c8b1673a910"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const isLoading = ref(false)
const list = []

async function getData() {
  isLoading.value = true
  const querySnapshot = await getDocs(collection(db, "projects"));
  isLoading.value = false
  // console.log(querySnapshot)
  querySnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data()}`);
    list.push(
      {
        "id": doc.id,
        "name": doc.data().name,
        "description": doc.data().description,
        "demo": doc.data().demo,
        "github": doc.data().github,
      }
    )
  });
  // console.log(list)

}

onMounted(() => {
  getData()
})




</script>

<template>
  <div class="flex flex-col w-svw h-svh items-center justify-between p-8">

    <h1 class="text-4xl font-extrabold mb-6">
      LOSTMYPILLOW
    </h1>


    <SectionTitle>
      Who am I?
    </SectionTitle>

    <SectionContent>
      <p class="text-base">
        I'm Johnny Lin.
        <br>
        I make full stack apps with sensible UI/UX and no frills.
        <br>
        Venturing into Java & Kotlin at the moment, for cross platform app development.
      </p>
    </SectionContent>

    <SectionTitle>
      Where are my apps?
    </SectionTitle>

    <SectionContent>
      <div class="flex flex-col gap-4 items-start justify-center">
        <div class="flex flex-row gap-2 items-center justify-center">
          <a class="btn bg-slate-500 text-slate-200 text-base  h-11 px-4 py-2" href="https://github.com/lostmypillow"
          target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
          Head to My GitHub
        </a>
        <p>
          OR see them all below:
        </p></div>
        

        <div v-if="isLoading" class="flex items-center justify-center w-full gap-2">
          <span class="loading loading-spinner text-primary" sta></span>
          Loading...
        </div>

        <TableHead v-else>
          <TableRow v-for="de in list" :data=de />
        </TableHead>
      </div>


    </SectionContent>


    <SectionTitle>
      How do you contact me?
    </SectionTitle>

    <SectionContent class="pb-4">
      <a class="btn text-base btn-primary" href="mailto:lostmypillow@icloud.com">
        Email Me
      </a>
    </SectionContent>




  </div>




</template>
