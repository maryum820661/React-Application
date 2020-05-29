import React,{component, Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron,Nav,NavbarToggler,Collapse,NavItem,Form,Button,Modal,ModalBody,ModalHeader,FormGroup,Label,Input} from 'reactstrap';
import {NavLink} from 'react-router-dom';
 class Header extends  Component
 {
     constructor(props)
     {
         super(props);
         this.state={
             isNavOpen:false,
             isModalOpen:false
         }
         this.toggleNav=this.toggleNav.bind(this);

         this.toggleModal=this.toggleModal.bind(this);
         this.handlelogin = this.handlelogin.bind(this);
        }
     toggleNav()
     {
         this.setState({
             isNavOpen:!this.state.isNavOpen
         })
     }

     toggleModal()
     {
         this.setState({
            isModalOpen:!this.state.isModalOpen
         })
     }
     handlelogin(event)
     {
         this.toggleModal();
         alert("Username:"+this.username.value+"Password:"+this.password.value+"Remember:"
         +this.remember.checked);
         event.preventDefault();



     }
     render()
     {
         return(
         <>    
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav}/>
            <NavbarBrand classname="mr-auto"href="/">
                <img src="assets/images/logo.png" width="41" height="30" alt="Ristorante Con Fusiom"/>
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/About'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>

                                <NavItem>
                                  <Button outline onClick={this.toggleModal}>
                                      <span className="fa fa-sign-in fa-lg"></span>Login
                                  </Button>
                                </NavItem>
                            </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
            <div class="container">
                <div class="row row-header">
                    <div class="col-12 col-sm-6">
                    <h1>Ristorante Con Fusion</h1>
                    <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                    </div>

                </div>
            </div>
        </Jumbotron>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader isOpen={this.state.isModalOpen} toggle={this.toggleModal}>Login</ModalHeader>
            <ModalBody>
            <Form onSubmit={this.handlelogin}>
             <FormGroup>

                 <Label htmlFor="username">Username</Label>
                 <Input type="text" id="username" name="username"
                  innerRef={(input)=>this.username=input}/>

             </FormGroup>

             <FormGroup>

             <Label htmlFor="password">Password</Label>
             <Input type="password" id="password" name="password"
            innerRef={(input)=>this.password=input}/>

            </FormGroup>
            <FormGroup check>

            <Label check>
            <Input type="checkbox" id="remember" name="remember"
             innerRef={(input)=>this.remember=input}/>
            Remember Me
             </Label>
            </FormGroup>
            <Button type="submit" value="submit" className="bg-primary">Login</Button>
            </Form>
            </ModalBody>
        </Modal>

         </>
         );
     }
 }
 export  default Header;