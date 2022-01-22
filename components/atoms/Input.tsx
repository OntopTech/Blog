interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const NewInput = (props: {
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

export default NewInput;