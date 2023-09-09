import styled from "styled-components";
import React from "react";
import { RiArrowDownLine } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import GlobalButton from "../Desktop/GlobalButton";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [scroll, setScroll] = React.useState<boolean>(false);

  const onScroll = () => {
    if (window.scrollY >= 70) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", onScroll);
  return (
    <div>
      {scroll ? (
        <Container bcc="white">
          <Wrapper>
            <Logo>SheCodes</Logo>
            <NavHolder>
              <Nav>Home</Nav>
              <Nav>Pages</Nav>
              <Nav>Course</Nav>
              <Nav>Features</Nav>
              <Nav>Blog</Nav>
            </NavHolder>
            <ButtonHold>
              <NavLink style={{ textDecoration: "none" }} to="/signupas">
                <GlobalButton width="90px" text="Register" />
              </NavLink>
              <NavLink style={{ textDecoration: "none" }} to="/signinas">
                <GlobalButton width="90px" text="Login" />
              </NavLink>
            </ButtonHold>
          </Wrapper>
        </Container>
      ) : (
        <Container bcc="#FEF0EF">
          <Wrapper>
            <Logo>SheCodes</Logo>
            <NavHolder>
              <Nav>Home</Nav>
              <Nav>Pages</Nav>
              <NavLink style={{ textDecoration: "none" }} to="/courses">
                <Nav>Course</Nav>
              </NavLink>

              <Nav>Features</Nav>
              <Nav>Blog</Nav>
            </NavHolder>
            <ButtonHold>
              <NavLink style={{ textDecoration: "none" }} to="/signupas">
                <GlobalButton width="90px" text="Register" />
              </NavLink>
              <NavLink style={{ textDecoration: "none" }} to="/signinas">
                <GlobalButton width="90px" text="Login" />
              </NavLink>
            </ButtonHold>
          </Wrapper>
        </Container>
      )}
    </div>
  );
};

export default Header;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
`;

const Icon = styled.div`
  margin: 10px;
`;

const ButtonHold = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Nav = styled.nav`
  margin: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: yellow; */
`;

const NavHolder = styled.div`
  display: flex;
  /* background-color: red; */
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const Wrapper = styled.div`
  /* background-color: aliceblue; */
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div<{ bcc: string }>`
  background-color: ${(props) => props.bcc};
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 999999;
`;
