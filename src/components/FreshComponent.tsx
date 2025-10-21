interface FreshComponentProps {
    // union type it may be string or number
    luckyNumber:string | number;
}

const FreshComponent = ({luckyNumber}:FreshComponentProps) => {


  return (
    <div>FreshComponent:{luckyNumber}</div>
  )
}


export default FreshComponent
