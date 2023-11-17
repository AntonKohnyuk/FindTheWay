import "./styles/output.scss";

interface OutputProps {
  text: string | null;
}

const Output = ({ text }: OutputProps) => {
  return <p className="output">{text || "No data yet!"}</p>;
};
export default Output;
