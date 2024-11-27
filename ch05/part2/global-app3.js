import Element from "./element4.js";
const GlobalApp = {
  data() {
    return {
      elements : []
    }
  },
  components : {
    Element:Element
  },
  template : `
    <button @click="add()">Add Element</button>
    <ul>
      <Element v-for="(element, index) in elements" 
      :key="index" :text="element" 
        :index="index"
        @remove="remove($event)" @modify="modify($event)"
      />
    </ul>
  `,
  methods : {
    add() {
      var element = "Element " + (this.elements.length + 
      1);
      this.elements.push(element);
    },
    remove(params) {
      var index = params.index;
      this.elements.splice(index, 1);
    },
    modify(params) {
      var index = params.index;
      var value = params.value;
      this.elements[index] = value;  // new element value
    }
  }
}
export default GlobalApp;