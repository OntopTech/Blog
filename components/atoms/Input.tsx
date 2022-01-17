export const NewInput = (props: {
  placeholder: string
  required: boolean
  classname: string
  type: string
}) => {
  return (
    <>
      {props.required ? (
        <input
          placeholder={props.placeholder}
          className={props.classname}
          type={props.type}
          required
        />
      ) : (
        <input
          placeholder={props.placeholder}
          className={props.classname}
          type={props.type}
        />
      )}
    </>
  )
}
