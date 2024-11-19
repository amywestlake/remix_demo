interface h3BoldProps {
    text: string;
}
  
function H3Bold({ text }: h3BoldProps) {
    return <h3 className="text-xl font-bold pb-4">{text}</h3>;
}
  
export default H3Bold;