import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";

import {Container, Column, Title, TitleHighlight} from './styles';

import avatar from '../../assets/avatar.jpg';

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo percentual={80} name='Demi Caroline' image={avatar} />
          <UserInfo percentual={45} name='Demi Caroline' image={avatar} />
          <UserInfo percentual={12} name='Demi Caroline' image={avatar} />
          <UserInfo percentual={57} name='Demi Caroline' image={avatar} />
          <UserInfo percentual={100} name='Demi Caroline' image={avatar} />
          <UserInfo percentual={5} name='Demi Caroline' image={avatar} />
          <UserInfo percentual={72} name='Demi Caroline' image={avatar} />
        </Column>
      </Container>
    </>
  )
}

export default Feed;