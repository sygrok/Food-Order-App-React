import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
      {/* '{...props.input} ' with using this trick the input gets other attributes like "type='text'" automatically*/}
    </div>
  );
};

export default Input;
