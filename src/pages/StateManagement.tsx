import { useEffect, useRef, useState } from "react";
import SectionHeading from "../components/SectionHeading";

function StateManagement() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [names, setNames] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const textRef = useRef(null);

  const textChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addNameHandler = () => {
    if (name.trim() !== "") {
      setNames((prevNames) => [...prevNames, name]);
      setName("");
    }
  };

  useEffect(() => {
    console.log("hello world");
    setTimeout(() => {
      setName("ildeniz");
    }, 2000);
  }, []);

  return (
    <>
      <SectionHeading name="State Management" />
      <div className="text-center">{count}</div>
      <div className="text-center">
        <button className="btn" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className="btn" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
      <hr className="my-4" />
      <div className="text-center">
        <p>{text}</p>
      </div>
      <div className="text-center">
        <input
          className="text-center border border-gray-300 rounded-md p-2"
          type="text"
          value={text}
          onChange={(e) => textChangeHandler(e)}
        />
      </div>
      <hr className="my-4" />

      <div className="text-center">
        <input
          type="text"
          className="text-center border border-gray-300 rounded-md p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="btn text-center" onClick={addNameHandler}>
          Add Name
        </button>
      </div>

      <hr className="my-4" />

      {names.map((item, index) => (
        <div key={index} className="text-center">
          <p>{item}</p>
        </div>
      ))}

      <hr className="my-4" />

      <div className="text-center">
        <input
          type="text"
          placeholder="Ref Example"
          className="text-center border border-gray-300 rounded-md p-2"
          ref={textRef}
        />
        <button
          className="btn"
          onClick={() => {
            if (textRef.current) {
              (textRef.current as HTMLInputElement).focus();
            }
          }}
        >
          Focus Input
        </button>
      </div>

      <hr className="my-4" />
    </>
  );
}

export default StateManagement;
