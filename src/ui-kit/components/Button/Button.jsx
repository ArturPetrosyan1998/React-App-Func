const Button = ({ text, children, ...rest }) => (
  <button type="button" {...rest}>{children}</button>
);

export default Button;
