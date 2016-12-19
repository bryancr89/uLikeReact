import React, {PropTypes} from 'react';

const uInput = (props) => {
  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };
  let errors = props.errors || [];
  let invalidCSS = errors.length > 0 && 'is-invalid' || '';
  let errorsHtml = errors.map((error, key) => {
    return <span className="mdl-textfield__error" key={key}>{error}</span>;
  });
  return (
    <div className={`mdl-textfield mdl-js-textfield ${invalidCSS}`}>
      <input
        className="mdl-textfield__input"
        type="text"
        value={props.value}
        onChange={handleChange}
        id={props.id}/>
      <label className="mdl-textfield__label" htmlFor={props.id}>{props.placeholder}</label>
      {errorsHtml}
    </div>
  );
};

uInput.propTypes = {
  errors: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default uInput;
