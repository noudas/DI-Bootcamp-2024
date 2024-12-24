import Counter from '../counter/Counter'
const Parent = (props) => {
  console.log(props);
  if (props.auth === "admin") return props.children;

  return <Counter/>;
};
export default Parent;
