// @flow
import React from 'react';
import { TextInput as CarbonTextInput } from 'carbon-components-react';

type TextInputProps = {
  id: string,
  labelText: string,
  helperText?: string,
  placeholder?: string,
  optionalText?: string,
  onChange: (*) => any,
};

const TextInput = (props: TextInputProps) => {
  const { optionalText, onChange, ...carbonProps } = props;
  return optionalText ? (
    <CarbonTextInput
      {...carbonProps}
      helperText={optionalText}
      className="optional"
      onChange={onChange}
    />
  ) : (
    <CarbonTextInput {...carbonProps} onChange={onChange} />
  );
};

TextInput.defaultProps = {
  helperText: null,
  placeholder: null,
  optionalText: null,
};

export default TextInput;
