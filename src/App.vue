<script setup>
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import TableRow from './components/TableRow.vue'
import {ref} from 'vue'
// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
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

const list = []

async function getData() {
  const querySnapshot = await getDocs(collection(db, "projects"));
  console.log(querySnapshot)
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    list.push(
      {
        "id": doc.id,
        "name": doc.data().name,
        "description": doc.data().description,
        "logo": doc.data().logo,
        "demo": doc.data().demo,
        "github": doc.data().github,
        "screenshots": doc.data().screenshots,
      }
    )
  });
  console.log(list)
  show.value = true

}

const show = ref(false)


</script>

<template>
  <div class="flex flex-row items-end justify-start gap-2">  <h1 class="text-4xl font-extrabold">LostMyPillow</h1>
  <h2 class="text-2xl font-thin text-gray-400">Home of Johnny Lin</h2></div>

  <p class="text-lg">I make apps with sensible UI/UX and no frills.</p>
  <button class="btn text-xl">Contact Me</button>
  <button class="btn text-xl">My GitHub</button>
  <h3 class="text-xl">
My Projects
  </h3>
  <button class="btn" @click="getData">Button</button>

  <div class="overflow-x-auto">
  <table v-if="show == true" class="table table-xs table-pin-rows table-pin-cols">
    <thead>
      <tr>
        <th></th> 
        <td>Name</td> 
        <td>Description</td> 
        <td>Demo</td> 
        <td>GitHub</td> 
        <th></th> 
      </tr>
    </thead> 
<tbody>
<TableRow v-for="de in list" :data=de />
</tbody>

  </table>
  </div>
</template>
