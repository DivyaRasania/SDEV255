import Counter from "./counter3.js";
const Counters = {
  data() {
    return {
      total: 0,
    };
  },
  components: {
    Counter: Counter,
  },
  template: `
      Counter 1 : <counter @add="add($event)" 
      @sub="sub($event)" /> <br>
      Counter 2 : <counter @add="add($event)" 
      @sub="sub($event)" /> <br>
      Counter 3 : <counter @add="add($event)" 
      @sub="sub($event)" /> <br><br>
      Total : {{total}} <br>
  `,
  methods: {
    add(value) {
      this.total += parseInt(value);
    },
    sub(value) {
      this.total -= parseInt(value);
    },
  },
};
export default Counters;
