import { Octokit } from "https://esm.sh/@octokit/core";
const octokit = new Octokit({
  auth: ''
})

async function getHTML() {
  try {
  
  const html = await octokit.request('GET /repos/lostmypillow/lostmypillow/readme', {
  owner: 'OWNER',
  repo: 'REPO',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
    'Accept': 'application/vnd.github.html+json'
  }
})
console.log(html)
 // const html = marked(data);  Convert Markdown to HTML
  document.getElementById('content').innerHTML = html.data;
} catch (error) {
  document.getElementById('content').innerHTML = '<p>Error loading README</p>';
}
}

await getHTML()


const allHTML = document.documentElement;
const mobileToggle = document.getElementById("mobile-toggle");
// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById("about-button").click();
// });
allHTML.setAttribute("data-theme", "light");
// desktopToggle.removeAttribute("checked");
mobileToggle.innerHTML =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg><span>Lights On</span>';
function handleToggle() {
  if (allHTML.getAttribute("data-theme") === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    // desktopToggle.setAttribute("checked", "checked");
    mobileToggle.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg><span>Lights Off</span>';
  } else {
    document.documentElement.setAttribute("data-theme", "light");

    // desktopToggle.removeAttribute("checked");
    mobileToggle.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg><span>Lights On</span>';
  }
}

mobileToggle.onclick = function () {
  handleToggle();
};

