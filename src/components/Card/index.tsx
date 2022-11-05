import React from "react";
import {FiThumbsUp} from 'react-icons/fi'

import {CardContainer, Content, HasInfo, ImageBackgroun, PostInfo, UserInfo, UserPicture} from './styles';

import avatar from '../../assets/avatar.jpg';
import banner from '../../assets/banner-2.png';


const Card = () => {

  return (
    <>
      <CardContainer>
        <ImageBackgroun src={banner} />
        <Content>
          <UserInfo>
            <UserPicture src={avatar} />
            <div>
              <h4>Demi Caroline</h4>
              <p>Há 8 minutos</p>
            </div>
          </UserInfo>
          <PostInfo>
            <h4>Projeto para curso de HTML e CSS</h4>
            <p>Projeto feito no bootcamp dio do Global Avanade... <strong>Saiba Mais</strong></p>
          </PostInfo>
          <HasInfo>
            <h4>#HTML #CSS #Javascript</h4>
            <p>
              <FiThumbsUp /> 10
            </p>
          </HasInfo>
        </Content>
      </CardContainer>
    </>
  )
}

export {Card};
