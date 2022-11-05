import { Link, useNavigate } from "react-router-dom";

import bannerImage from '../../assets/banner.png';

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import {Container, TextContent, Title, TitleHighlight} from './styles';

const Home = () => {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login')
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implement <br />
            </TitleHighlight> 
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologia utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
          </TextContent>
          <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />
        </div>
        <div>
          <img src={bannerImage} alt='Imagem principal' />
        </div>
      </Container>
      <Button title='Teste 1' />
      <Button title='Teste 2' variant="secondary" />
      <Link to='/login'>Login</Link>
    </>
  )
}

export default Home;