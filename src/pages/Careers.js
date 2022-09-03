import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../components/Footer'
import NavbarComp from '../components/NavbarComp'

const Careers = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div style={{backgroundColor:'black'}}>
        <NavbarComp />
        <div className='top' style={{backgroundColor:'white', paddingBottom:'30px'}}>
            <Container>
                <Row>
                    <h1 style={{fontSize:'60px', fontWeight:'bold'}}>Make an impact that matters.</h1>
                </Row>
            </Container>
        </div>
        <div style={{backgroundColor:'#f5f8fb'}}>
        <Container>
                <Row>
                <Col>
                        <p style={{marginTop:'130px',marginBottom:'30px',fontSize:'22px',paddingRight:'50px',textAlign: 'justify'}}>
                        Many ideas grow better when transplanted into another mind than the one where they sprang up.
                        </p> 
                        <p style={{marginTop:'60px',marginBottom:'30px',fontSize:'22px',paddingRight:'50px',textAlign: 'justify'}}>
                        Our goal at HGM & Co LLP is to build a team of individuals with competence, integrity, a passion for excellence, a desire to learn, a willingness to work hard, and more importantly, deep respect for their own commitments. A healthy work ethic and meritocracy, which rewards superior performance faster than expected, will reward them in return. HGM & Co LLP offers a challenging, stimulating and professional work environment where you will be an integral part of the team. We offer an exciting opportunity for you to grow on both a professional and personal level.
                        </p> 
                        <p style={{marginTop:'120px',marginBottom:'30px',fontSize:'22px',paddingRight:'50px',textAlign: 'justify'}}>
                        Send us your CV at <a style={{  color:'black'}} href='mailto:careers@hgmllp.com'>careers@hgmllp.com</a>
                        </p>
                        <p style={{marginTop:'60px',marginBottom:'30px',fontSize:'22px',paddingRight:'50px',textAlign: 'justify'}}>
                        Your CV must contain details of your actual experience, preference if any, for specific service areas, current and expected remuneration and the period within which you can join if an offer is made.
                        </p>
                        <p style={{marginTop:'120px',marginBottom:'230px',fontSize:'22px',paddingRight:'50px',textAlign: 'justify'}}>
                        Wishing you all success in your career ahead.
                        </p>
                </Col>
                </Row>
            </Container>
            </div>
            <Footer />
    </div>
  )
}

export default Careers