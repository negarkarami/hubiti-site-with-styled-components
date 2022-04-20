import styled from 'styled-components';
import {radius} from "../../utils/variables";
import React, {useState} from "react";
import {Image} from "./Image";
import {lighten, rgba} from "polished";
import {Link} from "react-router-dom";
import Choose from "../../bin/choose";

const Wrapper = styled.div`
  background-color: ${p => p.theme.lightColor};
  margin-bottom: ${p => (p.spaceDown) ? '20px' : null};
  border-radius: ${radius.small};
`;

const SectionTop = styled(Link)`
  display: block;
  margin-bottom: -20px;
  position: relative;
  text-align: center;
  overflow: hidden;
  border-top-left-radius: ${radius.small};
  border-top-right-radius: ${radius.small};
`;

const CustomImage = styled(Image)`
  height: 200px;
  transform: scale(2);
`;

const SectionContent = styled.div`
  background-color: ${p => p.theme.lightColor};
  border-radius: ${radius.small};
  padding: 10px;
  position: relative;
`;

const PartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Part = styled.div`
  display: flex;
`;

const TextLink = styled(Link)`
  display: block;
  color: inherit;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 1.2rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.1rem;
  color: ${p => rgba(p.theme.darkColor, 0.5)};
`;

const Description = styled.p`
  font-size: 1rem;
`;

const Icon = styled.i`{
  margin-right: -4px;
  color: ${p => (p.color === 'red') ? p.theme.redColor : null};
}`;

const ActionButton = styled.button`{
  background: transparent;
  border: none;
  font-size: 2rem;
  color: ${p => lighten(0.3, p.theme.darkColor)};
  padding: 0;
  margin-left: ${p => (p.spaceLeft) ? '20px' : null};
}`;

const Detail = styled.div`
  color: ${p => rgba(p.theme.darkColor, 0.5)};
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
`;

const Value = styled.span`
  display: block;
  margin-left: 8px;
  margin-right: 8px;
`;

const CardView = ({data}) => {
    const [heart, setHeart] = useState(false);

    const handleClickHeart = _ => {
        setHeart(s => !s);
    }

    return (
        <Wrapper spaceDown>
            <SectionTop to={`/channel/${data.id}`}>
                <CustomImage src={data.image}/>
            </SectionTop>
            <SectionContent>
                <PartWrapper>
                    <Part>
                        <ActionButton>
                            <Icon className="feather icon-bookmark"/>
                        </ActionButton>
                    </Part>
                    <Part>
                        <ActionButton spaceLeft>
                            <Icon className="feather icon-send"/>
                        </ActionButton>
                        <ActionButton spaceLeft>
                            <Icon className="feather icon-message-circle"/>
                        </ActionButton>
                        <ActionButton onClick={handleClickHeart}>
                            {
                                Choose(heart, [
                                    {
                                        state: true,
                                        value: (
                                            <Icon color={'red'} className="feather icon-heart-on"/>
                                        )
                                    },
                                    {
                                        state: false,
                                        value: (
                                            <Icon className="feather icon-heart"/>
                                        )
                                    }
                                ])
                            }
                        </ActionButton>
                    </Part>
                </PartWrapper>
                <TextLink to={`/channel/${data.id}`}>
                    <Title>{data.title}</Title>
                    <CategoryTitle>{data.categoryTitle}</CategoryTitle>
                    <Description>{data.description}</Description>
                </TextLink>
                <PartWrapper>
                    <Part>
                        <Detail>
                            <span>{data.date}</span>
                        </Detail>
                    </Part>
                    <Part>
                        <Detail>
                            <Icon className="feather icon-message-circle"/>
                            <Value>{data.commentCount}</Value>
                        </Detail>
                        <Detail>
                            <Icon className="feather icon-heart"/>
                            <Value>{data.likeCount}</Value>
                        </Detail>
                        <Detail>
                            <Icon className="feather icon-eye"/>
                            <Value>{data.visitCount}</Value>
                        </Detail>
                    </Part>
                </PartWrapper>
            </SectionContent>
        </Wrapper>
    )
}

export {CardView};
