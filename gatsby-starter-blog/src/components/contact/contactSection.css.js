import styled from "styled-components"

export const CenteredContent = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin-left: 0;
  margin-right: 0;
  width: 50%;
`

export const FormContainer = styled.div`
  font-size: 3rem;
  width: 100%;

  input,
  textarea {
    font-size: 2rem;
  }

  input,
  textarea {
    padding: 1rem 2rem 1rem 1.5rem;
    border-radius: 8px;
    border: 1px solid #fff;
  }

  form div {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
  }

  label {
    color: black;
  }

  .button__wrapper {
    flex-grow: 0;
    width: 20%;
  }
`

export const FormButton = styled.button`
  text-align: center;
  border-radius: 12px;
  border: 5px solid #fff;
  padding: 1rem;
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0);
  font-weight: bold;
`
