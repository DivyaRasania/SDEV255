const Counter = {
  data() {
    return {
      count: 0,
    };
  },
  template: `
    <button @click="count++">Increment counter by 
    count++</button> 
       &nbsp;&nbsp; count = {{count}} <br><br>
    <button @click="incr()">Increment counter by 
    incr()</button> 
      &nbsp;&nbsp; count = {{count}}
  `,
  methods: {
    incr() {
      this.count++;
    },
  },
};
export default Counter;
