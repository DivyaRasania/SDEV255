const Element = {
    data() {
      return {
        input : false   // display element text by default
      }
    },
    template : `
      <li> 
        <span v-if="!input"> {{text}} </span>
        <input v-else type="text" :value="text" />
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
    },
    emits : ["remove"]
  }
  export default Element;