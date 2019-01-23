import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd:99
    }


    percentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.percentage()
        },20)
    }


    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    <Fade
                        onReveal={()=> this.percentage()}
                    >
                        <div className="discount_percentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th JUNE</h3>
                            <p> Buy the tickets before the date above to receive a ridiculous 99% discount.</p>
                        
                            <MyButton
                                text="Purchase tickets"
                                bck="#ffa800"
                                color="#ffffff"
                                link="http://google.com"
                            />
                        
                        </div>
                    </Slide>
                    


                </div>
            </div>
        );
    }
}

export default Discount;