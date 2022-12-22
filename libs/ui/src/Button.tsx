// import d3 from 'd3'
// const unused = true
const buttonName = ['beep', 'bop', 'boop']
export const Button = (props: any) => {
  // return <button>Boop</button>;
  // return (
  //   <>
  //     {buttonName.map((name) => (
  //       <button>{name}</button>
  //     ))}
  //   </>
  // )
  return (
    <>
      {props.label}
      {buttonName.map((name) => (
        <button key={name}>{name}</button>
      ))}
    </>
  )
}
