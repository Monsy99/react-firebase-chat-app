import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
const GridContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 300px 1fr;
`;

export { GridContainer, Wrapper };
