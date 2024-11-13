const Counter = {
  data() {
    return {
      count: 0,
      message: "",
    };
  },
  template: `
    count (less than 100): <input type="text" 
    :value="count" @blur="valid($event)" />
     &nbsp;&nbsp; count = {{count}} 
    <br><br>
    <span>{{message}}</span>
  `,
  methods: {
    valid(event) {
      this.message = ""; // reset of the error message
      // before each check
      if (event.target.value < 100) this.count = event.target.value;
      else this.message = "Error: count must be less than 100";
    },
  },
};
export default Counter;
