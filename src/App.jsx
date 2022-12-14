import { useState } from "react"
import { Button, Col, Container, Navbar, Row } from "react-bootstrap"
import { List, XLg } from "react-bootstrap-icons"
import NavBarContent from "./components/NavBarContent"
import PageContent from "./components/PageContent"

function App() {
  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <>
      <Container fluid className="main-container">
        <Row className="main-row">
          <Col className={"left-bar p-0 text-light bg-dark " + (collapsed ? "collapsed" : "")}>
            <NavBarContent collapsed={collapsed}  toggleCollapse={toggleCollapse} />
          </Col>
          <Col className="main-content">
            <PageContent />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
