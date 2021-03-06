import { useSlider } from './hooks/slider'

import { GlobalStyles } from './styles'

// Main
import { Main, Header, Logo, Nav, NavItem, NavLink } from './styles'

// Content
import { Content, SectionIntro, TitleSmall, TitleBig, IntroText, Button, Showcase } from './styles'

// Bottom
import { Bottom, BottomLeft, Count, LineWrapper, Line, Description, BottomRight } from './styles'

import { Collection } from './components/Collection'

export const App = () => {
  const { showcaseWidth, count } = useSlider()

  return (
    <>
      <GlobalStyles />
      <Main>
        <Header>
          <Logo>Logo</Logo>
          <Nav>
            <NavItem>
              <NavLink href="">Reviews</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Contact</NavLink>
            </NavItem>
          </Nav>
        </Header>

        <Content>
          <SectionIntro>
            <TitleSmall>Our Intro</TitleSmall>
            <TitleBig>Our Big Title</TitleBig>
            <IntroText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda aspernatur rerum, in officiis omnis nisi atque!
            </IntroText>
            <Button>Get started</Button>
          </SectionIntro>
          <Showcase width={showcaseWidth}>
            <Collection />
          </Showcase>
        </Content>

        <Bottom>
          <BottomLeft>
            <Count>{`${count + 1}`.padStart(2, "0")}</Count>
            <LineWrapper>
              <Line></Line>
            </LineWrapper>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias temporibus atque.
            </Description>
          </BottomLeft>
          <BottomRight>

          </BottomRight>
        </Bottom>
      </Main>
    </>
  )
}
