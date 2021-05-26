import styled from 'styled-components';

export const Container = styled.figure`
  cursor: pointer;
  margin: 0;
`;

export const Cover = styled.img`
  filter: grayscale(100%);
  border: 2px solid #000;
  object-fit: cover;
  aspect-ratio: 2 / 3;
  width: 100%;
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  font-size: 28px;
  margin: 0 0 10px 0;
  line-height: 1.3;
`;

export const Author = styled.h4`
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
`;
