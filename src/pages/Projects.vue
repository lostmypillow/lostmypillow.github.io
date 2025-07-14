<!-- eslint-disable vue/valid-v-for -->
<script setup lang="ts">
import ProjectCard from "../components/ProjectCard.vue";

const projectList = [
  {
    id: 1,
    title: "AutoDMS",
    subtitle: "每日新聞摘要自動化",
    content:
      "PR company asked me to copy, paste and format (BY HAND) dozens of news articles into fixed categories, in a fixed format, every day. So I automated the process.",
    showDemo: true,
    demoLink:
      "https://chromewebstore.google.com/detail/autodms/aemgieopgpcjapdcdlcaajhbnkbnjmii",
    showGithub: true,
    githubLink: "https://github.com/lostmypillow/autodms-ext",
    techStack: ['Vue']
  },
  {
    id: 2,
    title: "kw-tutor",
    subtitle: "高偉數輔系統",
    content:
      "<ul><li>- Includes a Vue frontend and FastAPI backend.</li><li>- Large UI for the TV to show which seats has tutors, their names and pictures.</li><li>- Includes an autoplaying video player on the bottom left and an announcement carousel on the bottom right.</li><li>- A dedicated page for tutors to update their picture and info</li></ul><br /><i>因程式碼屬公司機密，恕不提供repo和demo</i>",
    showDemo: false,
    demoLink: "",
    showGithub: false,
    githubLink: "",
    techStack: ['Vue', 'FastAPI']
  },
  {
    id: 3,
    title: "kw-touch",
    subtitle: "高偉補位系統",
    content:
      "<ul><li>- Includes a Vue frontend and FastAPI backend.</li><li>- Deployed in a kiosk for students to interact with.</li><li>- Has a status banner that shows the latest and upcoming classes, as well as classes available for 補位.</li><li>- Offers 補位,獎學金申請 and 滿意度調查 functionalities in the middle section.</li><li>- An autoplaying video player on the bottom.</li></ul><br /><i>因程式碼屬公司機密，恕不提供repo和demo</i>",
    showDemo: false,
    demoLink: "",
    showGithub: false,
    githubLink: "",
    techStack: ['Vue', 'FastAPI']
  },
  {
    id: 4,
    title: "kw-sms",
    subtitle: "高偉簡訊系統",
    content:
      "<ul><li>- FastAPI backend with multiple workers.</li><li>- Processes SMS sending from internal system.</li></ul><br /><i>因程式碼屬公司機密，恕不提供repo和demo</i>",
    showDemo: false,
    demoLink: "",
    showGithub: false,
    githubLink: "",
    techStack: ['Vue', 'FastAPI']
  },
  {
    id: 5,
    title: "kw-media",
    subtitle: "高偉媒體系統",
    content:
      "<ul><li>- FastAPI backend with multiple workers.</li><li>- Processes SMS sending from internal system.</li></ul><br /><i>因程式碼屬公司機密，恕不提供repo和demo</i>",
    showDemo: false,
    demoLink: "",
    showGithub: false,
    githubLink: "",
    techStack: ['Vue', 'FastAPI']
  },
];
</script>
<template>
  <div
    class="flex flex-row flex-wrap items-start w-full justify-start gap-8 pt-6"
  >
    <ProjectCard
      v-for="project in projectList"
      :key="project.id"
      :title="project.title"
      :subtitle="project.subtitle"
      :content="project.content"
      :show-demo="project.showDemo"
      :demo-link="project.demoLink"
      :show-github="project.showGithub"
      :github-link="project.githubLink"
      :tech-stack="project.techStack"
    />
  </div>
</template>
