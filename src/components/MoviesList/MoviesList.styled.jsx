import styled from "@emotion/styled";
import posterMissingPath from "../../assets/Poster_missing.png";

// import { Button } from "antd";

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

export const BackgroundImg = styled.div`
  width: 268px;
  height: 402px;
  background-size: cover;
  background-image: url(${(props) =>
    props.bg
      ? `https://image.tmdb.org/t/p/w200${props.bg}`
      : posterMissingPath});
`;

// export const CustomButton = styled(Button)`
//   background-color: #722ed1;
//   border-color: #722ed1;
//   border-radius: 12px;
//   color: white;

//   &:hover {
//     background-color: #9254de;
//     border-color: #9254de;
//   }
// `;
