import "./style.css";
import "./src/theme";

const tasks = [
  {
    id: "1",
    task: "Problem Solving",
    isComplete: false,
  },
  {
    id: "2",
    task: "Project",
    isComplete: false,
  },
  {
    id: "3",
    task: "Learn",
    isComplete: false,
  },
  {
    id: "4",
    task: "Side Project",
    isComplete: false,
  },
  {
    id: "5",
    task: "Freelancing",
    isComplete: false,
  },
  {
    id: "6",
    task: "Contributing",
    isComplete: false,
  },
  {
    id: "7",
    task: "Programming Language",
    isComplete: false,
  },
  {
    id: "8",
    task: "Blog",
    isComplete: false,
  },
  {
    id: "9",
    task: "Apply",
    isComplete: false,
  },
  {
    id: "10",
    task: "Video",
    isComplete: false,
  },
];

let taskCards;

const tasksSection = document.getElementById("tasks");

function setTaskCards() {
  taskCards = tasks
    .map((task) => {
      return `<section class="card" id="${task.id}">
            <article class="flex items-center gap-2">
              <input class="checkbox" type="checkbox" name="" value="" />
                <p>${task.task}</p>
            </article>
          </section>`;
    })
    .join("");

  tasksSection.innerHTML = taskCards;
}

setTaskCards();
