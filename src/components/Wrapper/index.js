import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1220px;
  @media (max-width: 1220px) {
    width: calc(100%-32px);
    margin: 0 16px;
  } ;
`;
export { Wrapper };
