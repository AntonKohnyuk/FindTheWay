interface OutputProps {
  text?: string;
}

const Output = (props: OutputProps) => {
  return <p className="output">{props.text || "No data yet!"}</p>;
};
export default Output;
