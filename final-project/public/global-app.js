import Element from "./element.js";

const GlobalApp = {
  data() {
    return {
      elements: [], // array of object { text, _id }
      // (_id = document id in MongoDB)
      newTaskTitle: "",
      newTaskDescription: "",
      newDateAssigned: "",
    };
  },
  components: {
    Element: Element,
  },
  template: `
  <div>
    <h1>Task List</h1>
    <div>
      <input v-model="newTaskTitle" placeholder="Task Title" />
      <input v-model="newTaskDescription" placeholder="Task Description (optional)" />
      <input v-model="newDateAssigned" type="date" placeholder="Date Assigned" />
      <button @click="addTask">Add Task</button>
    </div>
    <ul>
      <li v-for="(element, index) in elements" :key="index">
        <div>
          <strong class="date-label">{{ formatDate(element.dateA) }}</strong>
          <span class="task-title">{{ element.text }}</span>
          <span class="task-description">{{ element.task }}</span>
        </div>
        <div>
          <button @click="modifyTask(element)">Modify Task</button>
          <button @click="removeTask(element)">Remove</button>
        </div>
      </li>
    </ul>
  </div>
  `,
  methods: {
    async addTask() {
      try {
        const response = await axios.post("/list", {
          text: this.newTaskTitle,
          task: this.newTaskDescription,
          dateA: this.newDateAssigned,
        });
        this.elements.push({
          _id: response.data.id,
          text: this.newTaskTitle,
          task: this.newTaskDescription,
          dateA: this.newDateAssigned,
        });
        this.newTaskTitle = "";
        this.newTaskDescription = "";
        this.newDateAssigned = "";
      } catch (err) {
        console.error(err);
      }
    },
    modifyTask(element) {
      const newTitle = prompt("Enter new task title:", element.text);
      const newDescription = prompt(
        "Enter new task description:",
        element.task
      );
      const newDate = prompt(
        "Enter new date assigned (YYYY-MM-DD):",
        element.dateA
      );

      if (newTitle !== null && newDescription !== null && newDate !== null) {
        this.updateTask(element._id, newTitle, newDescription, newDate);
      }
    },
    updateTask(id, title, description, date) {
      axios
        .put("/list", { id, text: title, task: description, dateA: date })
        .then(() => {
          this.elements = this.elements.map((element) => {
            if (element._id === id) {
              return { _id: id, text: title, task: description, dateA: date };
            }
            return element;
          });
        })
        .catch((error) => console.error(error));
    },
    removeTask(element) {
      axios
        .delete("/list", { data: { id: element._id } })
        .then(() => {
          this.elements = this.elements.filter(
            (task) => task._id !== element._id
          );
        })
        .catch((error) => console.error(error));
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return `${date.toLocaleString("default", {
        month: "short",
      })} ${date.getDate()}`;
    },
  },
  async created() {
    try {
      const response = await axios.get("/list");
      this.elements = response.data.elements.map((element) => ({
        _id: element._id,
        text: element.text,
        task: element.task,
        dateA: element.dateA,
      }));
    } catch (err) {
      console.error(err);
    }
  },
};

export default GlobalApp;
