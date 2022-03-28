import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  flex-direction: column;

  width: 100%;
  background-color: #2f326b;
  @media (max-width: 400px) {
    margin-top: 2rem;
  }
`;

export const HeadingWrapper = styled.div`
  color: #2f326b;
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  margin-top: 2rem;
  @media (max-width: 1200px) {
    font-size: 2rem;
  }
  @media (max-width: 800px) {
    font-size: 1.7rem;
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const ResourcesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  a {
    margin-top: 1rem;
    margin-bottom: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1.5rem;
    text-decoration: none;
    color: white;

    :hover {
      color: #94a0b1;
    }
    @media (max-width: 1200px) {
      font-size: 1rem;
    }
    @media (max-width: 800px) {
      font-size: 0.8rem;
    }
    @media (max-width: 600px) {
      font-size: 0.8rem;
    }
  }
`;
