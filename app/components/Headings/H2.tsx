interface h2Props {
    text: string;
}
  
function H2({ text }: h2Props) {
    return <h2 className="text-xxl font-bold pb-4">{text}</h2>;
}
  
export default H2;