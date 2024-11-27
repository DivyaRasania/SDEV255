const Element = {
  data() {
    return {
      input : false
    }
  },
  template : `
    <li> 
      <span v-if="!input"> {{text}} </span>
      <input v-else type="text" :value="text" 
       @blur="modify($event)" ref="refInput" />
      <button @click="remove()"> Remove </button> 
      <button @click="input=true"> Modify </button>
    </li>
  `,
  props : ["text", "index"],
  methods : {
    remove() {
      // process the click on the Remove button
      this.$emit("remove", { index : this.index });
    },
    modify(event) {
      var value = event.target.value;
      this.input = false;
      this.$emit("modify", { index : this.index, value : 
      value });
    }
  },
  emits : ["remove", "modify"],
  updated() {
    // check that the ref="refInput" attribute exists, and 
    // if so, give focus to the input field
    if (this.$refs.refInput) this.$refs.refInput.focus();  
  }
}
export default Element;