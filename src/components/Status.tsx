type StatusProps = {
  status: 'loading' | 'success' | 'error'
}

const Status = (props: StatusProps) => {
  let message

  if (props.status === 'loading') {
  } else if (props.status === 'success') {
    message = 'Data fetched successfully'
  } else if (props.status === 'error') {
    message = 'Error fetching data'
  }

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  )
}

export default Status
