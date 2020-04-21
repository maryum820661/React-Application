import React from 'react';
//import {Media} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';



  function RenderMenuItem({dish,onClick}) {
    return(
                <Card key={dish.id} onClick={() =>onClick(dish.id)}>
                       <CardImg  width="100%" src={dish.image} alt={dish.name}></CardImg>
                       <CardImgOverlay>
                       <CardTitle heading>{dish.name}</CardTitle>
                       </CardImgOverlay>
               </Card>
    );
                
  }
  //functional based component
  const Menu=props=>
  {
    const menu=props.dishes.map((dish)=>{
        return (
             <div key={dish.id} className="col-12 col-md-5 m-1">
             <RenderMenuItem dish={dish} onClick={props.onClick}/>
               </div>
             );
        })
      return(
        <div className="container">
        <div className="row">
           {menu}
        </div>
        <div className="row">
        </div>
        </div>
    );

  }
 
        //map operator used to map every single object of the array.we can now iterate over 
        //every dish through map method.
      

export default Menu;