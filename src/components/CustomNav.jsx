import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { useNavigate, Link } from "react-router-dom";

function CustomNav(props) {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-info-subtle">
      <Container>
        <Navbar.Brand href="/">Weather Station</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Form
            onSubmit={(e) => {
              e.preventDefault();

              // volevo usare navigate ma apparentemente mi refresha la pagina, annullando i cambi di stato precedenti (torna a mostrare i valori di default)
               // navigate(`/search/${e.target[0].value}`)
               window.history.pushState({}, null, `/search/${e.target[0].value}`)
               props.onSearchFetch(e.target[0].value)
            }}
          >
            <Form.Group>
              <Form.Control
                type="search"
                name="search"
                id="search"
                placeholder={"Search by city name"}
                style={{ width: "300px" }}
              />
            </Form.Group>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNav;
