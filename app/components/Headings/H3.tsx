interface h3Props {
    text: string;
}
  
function H3({ text }: h3Props) {
    return <h3 className="text-xl pb-4">{text}</h3>;
}
  
export default H3;