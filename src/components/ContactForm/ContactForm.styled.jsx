import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormContact = styled(Form)`
  border: 2px solid #deaf85;
  width: 450px;
  display: block;
  padding: 15px;
  margin: auto;
`;

export const ErrorText = styled(ErrorMessage)`
  color: tomato;
`;

export const Label = styled.label`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.15;
`;

export const Input = styled(Field)`
  all: unset;
  display: flex;
  border: 2px solid #deaf85;
  margin: 10px 0;
  padding: 15px;
  font-size: 20px;
  &:focus-visible {
    border-radius: 4px;
    border: 3px solid lightblue;
  }
`;

export const Button = styled.button`
  box-shadow: inset 0px 0px 12px 3px #ffffff;
  background: linear-gradient(to bottom, #deaf85 5%, #deaf85 100%);
  background-color: #ededed;
  border-radius: 4px;
  border: 2px solid #deaf85;
  display: inline-block;
  cursor: pointer;
  color: #212121;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  padding: 16px 37px;
  text-decoration: none;
  margin: 10px 0;
  &:hover {
    background: linear-gradient(to bottom, #dfaf98 5%, #dfaf98 100%);
    background-color: #212121;
    color: #ffffff;
  }
`;