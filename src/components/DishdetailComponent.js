import React,{Component} from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';
 class DishDetail extends Component
 {
    constructor(props)
    {
        super(props);
     
    }
    render()
    {
       if (this.props.dish != null)
            return(
                <>
                <div  className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                      <CardTitle>{this.props.dish.name}</CardTitle>
                      <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h2>comments</h2>
                    {this.props.dish.comments.map((commentss)=>
                    {
                        const {id,rating,comment,author,date} = commentss;
                        return(

                            <ul className="list-unstyled" key={id}>
                                <li>{comment}</li>
                                <li>--{author},{date}</li>
                            </ul>
                            
                        )
                    })}

                </div>
                </>
            );
        else
            return(
                <div>cbvnbvcn</div>
            );
    }
 }
 export default DishDetail;
