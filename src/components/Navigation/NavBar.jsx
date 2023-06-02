import { Container, Header } from "components/styles";
import NavbarAuth from "./NavAuth";
import NavbarUser from "./NavUser";
import NavbarMenu from './navContacts/navContacts'
import { Link } from "components/styles";
import SvgIcon from '@mui/material/SvgIcon';
import { useAuth } from "shared/useAuth";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function Navigation() {
  const isLogin = useAuth();

  return (

    <Header>

      <Link to="/"><HomeIcon sx={{ fontSize: 40 }} /></Link>
      <Container >
        {isLogin && <NavbarMenu />}

        {isLogin ? <NavbarUser /> : <NavbarAuth />} </Container>


    </Header>

  )

}