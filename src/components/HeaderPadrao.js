import styled from "styled-components";

export default function HeaderPadrao() {
  return (
    <Header>
      TrackIt
      <FotoUsuario
        src="https://i.pinimg.com/550x/f6/ae/c9/f6aec9493c2204676e25ad607a9cbce3.jpg"
        alt="Foto usuario"
      />
    </Header>
  );
}

const Header = styled.header`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 10px 0px 18px;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px 0px #00000026;
  font-family: "Playball", sans-serif;
  font-size: 39px;
  font-weight: 400;
  line-height: 49px;
  color: #ffffff;
`;

const FotoUsuario = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 98px;
`;
