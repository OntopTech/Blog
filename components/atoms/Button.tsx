export const NewButton = (props: { classname: string; content: string }) => {
  return (
    <button className={props.classname} type="submit">
      {props.content}
    </button>
  )
}
