import { Outlet } from "react-router-dom";
import { StyledNavbar, StyledNavLink } from "../../styles/jsx/navbar.styles";

export default function MainNavbar() {
  return (
    <>
      <StyledNavbar>
        LOGO
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/signup">Sign Up</StyledNavLink>
        <StyledNavLink to="/login">Login</StyledNavLink>
      </StyledNavbar>
      <Outlet />
    </>
  );
}
