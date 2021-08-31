const ButtonSpinner = (props) => {
  return props.loading ? (
    <span className='spinner-border spinner-border-sm'></span>
  ) : null;
};
export default ButtonSpinner;
