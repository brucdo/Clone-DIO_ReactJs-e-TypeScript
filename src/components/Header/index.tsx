import React from "react";
import { Button } from "../Button";
import avatar from '../../assets/avatar.jpg';
import logo from '../../assets/logo-dio.png';

import { 
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
  Img
} from './styles'
import { IHeader } from './types';

const Header = ({autenticado}: IHeader) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Img src={logo} alt="Logo da Dio" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
        {autenticado ? (
          <UserPicture src={avatar} />
        )
        : (
          <>
            <MenuRight href="#" >Home</MenuRight>
            <Button title="Entrar" />
            <Button title="Cadastrar" />
          </>
        )}
        </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }