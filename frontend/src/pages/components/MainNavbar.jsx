import { Outlet } from "react-router-dom";
import { StyledMainNavbar, StyledNavLink } from "../../styles/jsx/navbar.styles";

export default function MainNavbar() {
  return (
    <>
      <StyledMainNavbar>
        LOGO
        <div>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/signup">Sign Up</StyledNavLink>
          <StyledNavLink to="/login">Login</StyledNavLink>
        </div>
      </StyledMainNavbar>
      <Outlet />
    </>
  );
}
