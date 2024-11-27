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
       @blur="modify($event)" />
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
      var value = event.target.value;    // value entered 
                                         // in the field
      this.input = false;                // delete input field
      this.$emit("modify", { index : this.index, value : 
      value });   // update element in list
    }
  },
  emits : ["remove", "modify"]
}
export default Element;