import styled from "styled-components";

type ContainerProps ={
    feito: boolean;
}

export const Container = styled.div(({feito} : ContainerProps) =>( 
  `
  display: flex;
  background-color: #020212;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;

  label{
      color: #CCC;
      text-decoration: ${feito?  'line-through': 'initial'};
  }

  input{
      width: 25px;
      height: 25px;
      margin-right: 10px;
  }
`
));