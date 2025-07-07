const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    // The container sets up the component's layout
    <div className="form-control items-center">
      {/* 
        Label wraps both text and checkbox for proper accessibility.
        Flex-col stacks the children vertically.
      */}
      <label htmlFor={name} className="label cursor-pointer flex flex-col items-center">
        {/* 
          The label text, displayed on top
        */}
        <span className="label-text capitalize mb-1">{label}</span>
        {/* 
          The checkbox input, displayed below the text
        */}
        <input
          type="checkbox" // Defines input as a checkbox
          name={name}     // Name attribute for form
          id={name}       // Connects label and input for accessibility
          defaultChecked={defaultValue} // Sets the default checked state
          className={`checkbox checkbox-primary ${size}`} // Styles from Tailwind or custom classes
        />
      </label>
    </div>
  );
};

export default FormCheckbox;
