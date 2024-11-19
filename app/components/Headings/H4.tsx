interface h4Props {
    text: string;
}
  
function H4({ text }: h4Props) {
    return <h4 className="text-lg pb-4">{text}</h4>;
}
  
export default H4;