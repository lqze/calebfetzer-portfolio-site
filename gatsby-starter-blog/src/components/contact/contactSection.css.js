import styled from "styled-components"

export const CenteredContent = styled.div`
  /* margin-top: 2rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 35vw;
  h1 {
    text-align: center;
  }
  div.flash-success {
    background: inherit;
    visibility: hidden;
    transition: visibility 0s, opacity 0.3s ease-in-out 0.2s;
    opacity: 0;
  }
  @media screen and (max-width: 764px) {
    width: auto;
    max-width: 80%;
  }
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
    margin-bottom: .5rem;
    margin-top: 1rem;
  }

  .button__wrapper {
    flex-grow: 0;
    width: 20%;
    @media screen and (max-width: 764px) {
      margin-top: 2rem;
      width: 140px;
    } 
  }
`

export const FormButton = styled.button`
  text-align: center;
  border-radius: 12px;
  border: 0;
  padding: 1rem;
  font-size: 2rem;
  background: white;
  font-weight: bold;
  transition: ease-in-out 0.3s;
  &:hover {
    transition: ease-in-out 0.3s;
    cursor: pointer;
    background: white;
    color: #333;
    box-shadow: 4px 4px 4px rgb(193, 165, 100);
  }
`
