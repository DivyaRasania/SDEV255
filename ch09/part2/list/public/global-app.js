import Element from "./element.js";
const GlobalApp = {
  data() {
    return {
      elements: [], // array of object { text, _id }
      // (_id = document id in MongoDB)
    };
  },
  components: {
    Element: Element,
  },
  template: `
    <button @click="add()">Add Element</button>
    <ul>
      <Element v-for="(element, index) in elements" 
       :key="index" :element="element"
        @remove="remove($event)" @modify="modify($event)"
      />
    </ul>
  `,
  methods: {
    add() {
      var text = "Element " + (this.elements.length + 1);
      axios
        .post("/list", { text: text }) // pass object
        // {text:text} to
        // server
        .then((response) => {
          this.elements.push({ text: text, _id: response.data.id });
        });
    },
    remove(params) {
      var id = params.id;
      // remove the element with this id from the elements
      // array
      this.elements = this.elements.filter(function (element) {
        if (element._id == id) return false;
        else return true;
      });
      axios.delete("/list", { data: { id: id } });
      // the options must be written in the data
      // property
    },
    modify(params) {
      var id = params.id;
      var value = params.value;
      // modify the text of the element with this id in the
      // elements array
      this.elements = this.elements.map(function (element) {
        if (element._id == id) {
          element.text = value;
          return element;
        } else return element;
      });
      // modify the text of the element having this
      // identifier
      axios.put("/list", { text: value, id: id });
    },
  },
  created() {
    axios.get("/list").then((response) => {
      this.elements = response.data.elements.map(function (element) {
        return { _id: element._id, text: element.text };
      });
    });
  },
};
export default GlobalApp;
