interface ChildProps {
  text: string;
  onClick: (message: string) => void;
}

/*
function ChildComponent({ text, onClick }: ChildProps) {
*/

function ChildComponent(props: ChildProps) {
  return (
    <div>
      <p>{props.text}</p>
      <button className="btn" onClick={() => props.onClick(`You clicked onn ${props.text}`)}>
        Click Me
      </button>
    </div>
  );
}

export default ChildComponent;
