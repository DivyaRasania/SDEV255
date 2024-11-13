const Element = {
  data() {
    return {};
  },
  template: `
    <li> 
      <span> {{text}} </span>
      <button> Remove </button> 
      <button> Modify </button>
    </li>
  `,
  props: ["text"],
};
export default Element;
