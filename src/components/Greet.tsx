type GreetProps = {
  name: string
  messageCount: number
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>Lorem ipsum dolor sit. Sunt minima! {props.name}</h2>
      <p>You have {props.messageCount} unread messages</p>
    </div>
  )
}
