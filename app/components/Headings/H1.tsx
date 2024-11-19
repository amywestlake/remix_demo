interface h1Props {
    text: string;
}
  
function H1({ text }: h1Props) {
    return <h1 className="text-xxxl font-bold pb-4">{text}</h1>;
}
  
export default H1;