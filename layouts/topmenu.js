import Head from "next/head";
import Link from "next/link";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
var TopMenu = () => {
  return (
    <>
      <Head>
        <title>web site test</title>
      </Head>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Link href="/">
            <Nav.Link as="a" href="">
              首頁
            </Nav.Link>
          </Link>
          <Link href="about">
            <Nav.Link as="a" href="">
              關於
            </Nav.Link>
          </Link>
          <Link href="employee">
            <Nav.Link as="a" href="#pricing">
              收合頁
            </Nav.Link>
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default TopMenu;
