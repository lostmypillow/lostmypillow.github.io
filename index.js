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