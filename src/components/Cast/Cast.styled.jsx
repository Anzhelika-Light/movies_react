import styled from "@emotion/styled";
import imgMissingPath from "../../assets/Img_missing.jpg";

export const BackgroundImg = styled.div`
  width: 200px;
  height: 300px;
  background-size: cover;
  disply: block;
  margin: 0 auto;
  background-image: url(${(props) =>
    props.bg ? `https://image.tmdb.org/t/p/w200${props.bg}` : imgMissingPath});
`;
