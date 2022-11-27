import React from "react";
import { useNavigate } from "react-router-dom";
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
import { IHeader} from './types';

const Header = ({autenticado}: IHeader) => {

  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate('/login');
  }

  const handleClickRegister = () => {
    navigate('/register');
  }
  
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
            <Button title="Entrar" onClick={handleClickLogin} />
            <Button title="Cadastrar" onClick={handleClickRegister} />
          </>
        )}
        </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }