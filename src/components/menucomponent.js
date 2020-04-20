import React,{Component} from 'react';
//import {Media} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';
import DishDetail from '../components/Dishdetail';

class Menu extends Component
{

    constructor(props)
    {
        super(props);
        this.state={
            selectedDish:null
        };
    }
    onDishSelect(dish)
    {
        this.setState({selectedDish:dish})
    } 
    componentDidMount()
    {
        console.log("menu component has been added to the dom")
    }
    render()
    {
        console.log("menu component is rendered")
        //map operator used to map every single object of the array.we can now iterate over 
        //every dish through map method.
        const menu=this.props.dishes.map((dish)=>{
        return (
           <div key={dish.id} className="col-12 col-md-5 m-1">
           <Card onClick={()=>this.onDishSelect(dish)}>
                       <CardImg  width="100%" src={dish.image} alt={dish.name}></CardImg>
                       <CardImgOverlay>
                       <CardTitle heading>{dish.name}</CardTitle>
                       </CardImgOverlay>
               </Card>
               </div>
        
       );
      });
        return(
            <div className="container">
            <div className="row">
               {menu}
            </div>
            <div className="row">
            <DishDetail dish={this.state.selectedDish}/>
            </div>
            </div>
        );  
    }
}
export default Menu;