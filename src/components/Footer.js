import React from 'react'
import { Button, Col, NavDropdown, Row } from 'react-bootstrap'
import { IoMdMail } from 'react-icons/io'
import { FaLocationArrow, FaLinkedinIn, FaFacebookF, FaTwitter, FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../stylesheets/footer.css'


const Footer = () => {

  return (
    <div className="container">
        <footer>
            <Row style={{marginTop:'100px', paddingBottom:'70px'}}>

                <Col md={6} sm={12}>
                    <Row>
                        <Col md={3} sm={12}><h3 style={{fontSize:'25px'}}><Link style={{ color:'white'}} to='/about' className="nav-link p-0">About us</Link></h3></Col>
                        <Col md={3} sm={12}><h3 style={{fontSize:'25px', color:'white'}}>
                        <NavDropdown className='footer-dropdown' title="Services" id="basic-nav-dropdown2" menuVariant='dark'>
                            <NavDropdown.Item as={Link} to='/audit'>AUDIT AND ASSURANCE</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/taxation'>TAXATION</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/accounting'>ACCOUNTING AND BUSINESS SUPPORT</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/advisory'>TRANSACTION ADVISORY</NavDropdown.Item>
                        </NavDropdown>
                        </h3></Col>
                        <Col md={3} sm={12}><h3 style={{fontSize:'25px'}}><Link style={{ color:'white'}} to='/careers' className="nav-link p-0">Careers</Link></h3></Col>
                        <Col md={3} sm={12}><h3 style={{fontSize:'25px'}}><Link style={{ color:'white'}} to='/contact' className="nav-link p-0">Contact</Link></h3></Col>

                        <Col md={6} style={{marginTop:'50px'}} sm={12}>
                            <h4 style={{color:'white'}}>HGM & Co LLP</h4>
                            
                            <p className="text-muted">© 2022. HGM & Co LLP</p>
                            <a style={{ color:'grey', textDecoration:'none'}} href='mailto:info@hgmllp.com'>info@hgmllp.com</a>
                        </Col>
                    </Row>
                    <hr style={{color:'white'}} />
                    <Row style={{marginBottom:'20px'}}>
                        <Col xs={1}><a href='https://www.linkedin.com/company/hgcollp/'><Button style={{ border:'none'}} size='lg' variant="outline-light"><FaLinkedinIn /></Button>{' '}</a></Col>
                        {/* <Col xs={1}><a href='https://www.facebook.com'><Button style={{ border:'none'}} size='lg' variant="outline-light"><FaFacebookF /></Button>{' '}</a></Col> */}
                        <Col xs={1}><a href='https://www.twitter.com/hgmcollp'><Button style={{ border:'none'}} size='lg' variant="outline-light"><FaTwitter /></Button>{' '}</a></Col> 
                    </Row>
                </Col>
                <Col md={2} sm={12}></Col>
                <Col md={2} sm={12}>
                    <ul class="nav flex-column">
                        <li style={{color:'white', fontSize:'25px',
                            fontWeight:'400'}} class="nav-item mb-2">Pune</li>
                        <li style={{color:'grey',
                            fontWeight:'400'}} class="nav-item mb-2"><FaLocationArrow /> : Office-3, </li>
                        <li style={{color:'grey',
                            fontWeight:'400'}} class="nav-item mb-2">Aditya Centeegra, </li>
                        <li style={{color:'grey',
                            fontWeight:'400'}} class="nav-item mb-2">Dnyaneshwar Paduka Chowk, </li>
                        <li style={{color:'grey',
                            fontWeight:'400'}} class="nav-item mb-2">FC Road, Pune.</li>
                        <li>
                        
                        </li>
                        {/* <li style={{color:'grey',
                            fontWeight:'400'}}>
                            <IoMdMail    /> : <a style={{ color:'grey', textDecoration:'none'}} href='mailto:gauravdmurkute@gmail.com'>info@hgmllp.com</a>
                        </li>
                        <li style={{color:'grey',
                            fontWeight:'400'}}>
                            <FaPhoneAlt /> : +918779642945
                        </li> */}
                    </ul>
                </Col>
                <Col md={2} sm={12}>
                    <ul class="nav flex-column">
                        <li style={{color:'white', fontSize:'25px',
                            fontWeight:'400'}} class="nav-item mb-2">Nashik</li>
                        <li style={{color:'grey',
                            fontWeight:'400'}} class="nav-item mb-2"><FaLocationArrow /> : 11, Aniket resi., </li>
                        <li style={{color:'grey',
                            fontWeight:'400'}} class="nav-item mb-2">Savarkar Nagar,  </li>
                        <li style={{color:'grey',
                            fontWeight:'400'}} class="nav-item mb-2">Gangapur Road,</li>
                        <li style={{color:'grey',
                            fontWeight:'400'}} class="nav-item mb-2">Nashik.</li>
                        <li>
                        
                        </li>
                        {/* <li style={{color:'grey',
                            fontWeight:'400'}}>
                            <IoMdMail    /> : <a style={{ color:'grey', textDecoration:'none'}} href='mailto:gauravdmurkute@gmail.com'>info@hgmllp.com</a>
                        </li>
                        <li style={{color:'grey',
                            fontWeight:'400'}}>
                            <FaPhoneAlt /> : +918779642945
                        </li> */}
                    </ul>
                </Col>
            </Row>
            {/* <hr style={{color: 'white'}} /> */}
            <Row>
                <Col></Col>
                <Col style={{textAlign:'end'}}>
                    
                    <h6><a style={{textDecoration:'none', color:'#AAA'}} href='https://linktr.ee/atharv_arote'>Design by Atharv Arote</a></h6>
                </Col>
                
            </Row>
        </footer>
    </div>
  )
}

export default Footer