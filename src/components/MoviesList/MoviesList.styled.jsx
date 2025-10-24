import styled from "@emotion/styled";
import posterMissingPath from "../../assets/Poster_missing.png";

export const List = styled.ul`
  list-style: none;
  text-align: left;
`;

export const Img = styled.img`
  display: inline-block;
  width: 100%;
`;

export const Title = styled.p`
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
`;

export const BackgroundPoster = styled.div`
  width: 268px;
  height: 402px;
  background-size: cover;
  background-image: url(${(props) =>
    props.bg
      ? `https://image.tmdb.org/t/p/w200${props.bg}`
      : posterMissingPath});
`;
