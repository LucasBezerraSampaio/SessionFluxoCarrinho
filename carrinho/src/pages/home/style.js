import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3em;


  .lista-produtos {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  button {
    padding: 1em;
    background-color: gray;
    border: 2px solid #353535;
    color: white;
    font-weight: 900;
  }

`


export { Container }