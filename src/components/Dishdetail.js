import React,{Component} from 'react';
//import {Media} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

function RenderDish({dish})
{
    if(dish!=null)
        {
            return(
                <div class="col-12 col-md-5 m-1">
                <Card>
                <CardImg  width="50%" src={dish.image} alt={dish.name}></CardImg>
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                </CardBody>
                </Card>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
            
}
function RenderComments({Comments}){
     const comm=Comments.map((comm)=>{
        
         if(comm!=null)
         {
            let date = new Intl.DateTimeFormat('en-US', {
                year:'numeric',
                month: 'short',
                day: '2-digit'
            }).format(new Date(Date.parse(comm.date)))
             return(
              <div>
              <ul class = "list-unstyled">
              <li>{comm.comment}</li>
              <li>--{comm.author},{date}</li>
             </ul>
             </div>
             );

         }
         else{
             return(
             <div></div>
             );

         }
     
})
return (
    <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <div>{comm}</div>
    </div>
    
);
}
class DishDetail extends Component{ //Dish detail component initialized
    constructor(props)// constructor for props
    {
        super(props);
    }

    render()
    {  
        if (this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderDish dish={this.props.dish} />
                        <RenderComments Comments={this.props.dish.comments} />
                    </div>
                </div>
                
            );
        } else {
            return (
                <div></div>
            );
        }

    }
}
export default DishDetail;