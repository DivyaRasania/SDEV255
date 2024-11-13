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
    <button>Add Element</button>
    <ul></ul>
  `,
};
export default GlobalApp;
