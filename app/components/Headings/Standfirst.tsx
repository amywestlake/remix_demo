interface standfirstProps {
    text: string;
}
  
function Standfirst({ text }: standfirstProps) {
    return <p className="text-lg pb-4">{text}</p>;
}
  
export default Standfirst;