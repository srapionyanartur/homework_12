import { useLocalStorage } from "../useLocalStorage";

const Form2 = () => {
  const [name, setName] = useLocalStorage("name2", "");
  const [checked, setChecked] = useLocalStorage("checked", false);



  return (
    <form className="container">
      <input className = "text"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
        aria-label="fullname"
      />
      <label>
        <input  className = "checkbox"
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />{" "}
        Not a robot?
      </label>
      <input className = "sbm" type="submit" value="Submit"></input>
    </form>
  );
};

export default Form2;