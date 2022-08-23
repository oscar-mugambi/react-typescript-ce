type GreetProps = {
  name: string
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>Lorem ipsum dolor sit. Sunt minima! {props.name}</h2>
    </div>
  )
}
