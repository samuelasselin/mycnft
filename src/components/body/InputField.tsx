import { FormControl, Input, FormErrorMessage } from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";

interface InputFieldProps {
  name: string;
  label?: string;
  placeholder: string;
  type?: string;
}

export const InputField: React.FC<InputFieldProps> = (props) => {
  const [field, { error }] = useField(props);
  const { placeholder, type } = props;

  return (
    <FormControl isInvalid={!!error}>
      <Input {...field} type={type} id={field.name} placeholder={placeholder} />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
