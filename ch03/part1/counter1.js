const Counter = {
  data() {
    return {
      count: 0,
    };
  },
  template: "The counter is: {{count}}",
  created() {
    setInterval(() => {
      this.count += 1;
    }, 1000);
  },
};
export default Counter;
