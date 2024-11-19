interface h4BoldProps {
    text: string;
}
  
function H4Bold({ text }: h4BoldProps) {
    return <h4 className="text-lg font-bold pb-4">{text}</h4>;
}
  
export default H4Bold;