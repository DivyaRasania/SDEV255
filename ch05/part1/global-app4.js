import Element from "./element3.js";
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
      <Element v-for="(element, index) in elements" 
      :key="index" :text="element" />
    </ul>
  `,
  methods: {
    add() {
      var element = "Element " + (this.elements.length + 1);
      this.elements.push(element);
    },
  },
};
export default GlobalApp;
