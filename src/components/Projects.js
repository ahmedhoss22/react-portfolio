import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import digitalAgency from "../assets/img/digitalAgency3.jpg"
import eng from "../assets/img/eng.jpg"
import codeSyara from "../assets/img/codesyarah.jpg"
import decor from "../assets/img/Decor.jpg"
import landingpage from "../assets/img/scfs4.jpg"
import security from "../assets/img/security3.jpg"
import software from "../assets/img/Sofware.jpg"
import todolist from "../assets/img/toDoList.jpg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Digital Agency",
      description: "Landing page for Digital Agency company",
      imgUrl: digitalAgency,
    },
    {
      title: "Engineering",
      description: "Landing page for Engineering company",
      imgUrl: eng,
    },
      {
      title: "Code syarah",
      description: "Landing page for company that is specialize in import/export cars parts",
      imgUrl: codeSyara,
    },
  ]
  const projects2= [

    {
      title: "ToDoList",
      description: "Application for ToDoList tasks",
      imgUrl: todolist,
    },
      {
      title: "Decor",
      description: "Landing page for Home Decoration company",
      imgUrl: decor,
    },
    {
      title: "Digital Agency",
      description: "Landing page for Digital Agency company",
      imgUrl: digitalAgency,
    },
  ]
    const projects3=[
      {
        title: "Landing page",
        description: "Web Design",
        imgUrl: landingpage,
      },
      {
        title: "Secuirty",
        description: "Web Design",
        imgUrl: security,
      },
      {
        title: "Landing page",
        description: "Web Design",
        imgUrl: software,
      },
    ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={!isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>This my projects I just made either for Learning or for freelance work.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
