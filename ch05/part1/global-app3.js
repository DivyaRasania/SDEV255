import Element from "./element2.js";
const GlobalApp = {
  data() {
    return {
      elements: [],
    };
  },
  components: {
    Element: Element,
  },
  template: `
    <button @click="add()">Add Element</button>
    <ul>
      <li v-for="(element, index) in elements" 
      :key="index">{{element}}</li>
    </ul>
  `,
  methods: {
    add() {
      var element = "Element " + (this.elements.length + 1); // "Element X"
      this.elements.push(element);
    },
  },
};
export default GlobalApp;
