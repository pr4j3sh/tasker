const items = [
  {
    day: "Monday",
    title: "Web Development",
    url: "https://roadmap.sh/roadmaps?g=Web+Development",
  },
  {
    day: "Tuesday",
    title: "DevOps",
    url: "https://roadmap.sh/roadmaps?g=DevOps",
  },
  {
    day: "Wednesday",
    title: "Blockchain",
    url: "https://roadmap.sh/roadmaps?g=Blockchain",
  },
  {
    day: "Thursday",
    title: "Cyber Security",
    url: "https://roadmap.sh/roadmaps?g=Cyber+Security",
  },
  {
    day: "Friday",
    title: "Mobile Development",
    url: "https://roadmap.sh/roadmaps?g=Mobile+Development",
  },
  {
    day: "Saturday",
    title: "AI and Machine Learning",
    url: "https://roadmap.sh/roadmaps?g=Machine+Learning",
  },
  {
    day: "Sunday",
    title: "UI/UX",
    url: "https://roadmap.sh/roadmaps?g=Design",
  },
];

const tasks = document.getElementById("tasks");

const html = items
  .map((item) => {
    return `<article class="card">
<article class="card-body">
<span class="tag">${item.day}</span>
<h6>${item.title}</h6>
<a class="link" href="${item.url}" target="_blank">roadmap</a>
</article>
</article>`;
  })
  .join("");

tasks.innerHTML = html;
