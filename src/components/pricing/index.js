import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices:[100,150,250],
        positions:['Courtyard','Balcony','Roof'],
        desc:[
            'Kenyatta International Convention Centre (KICC) is a State Corporation established under the Tourism Act 2011 whose objective and purpose is to promote the business of Meetings, Incentives travel, Conferences and Exhibitions also known as MICE',
            'KICC is the largest Convention centre in Eastern Africa with the capacity to hold a large number of delegates. Our largest room, The Tsavo ballroom has the capacity to host over 4000 delegates. Our Facilities are the very Best in all of Kenya .',
            'KICC boasts of state of the art all round facilities such as simultaneous interpretation Equipment (SIE) with the capability of translating upto 7 languages, a modern business center, banking facility, Expansive grounds, ample and secure parking.'
        ],
        linkto:['http://sales/b','http://sales/m','http://sales/s'],
        delay:[500,0,500]

    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>Sh{this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
       
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
            </div>
        );
    }
}

export default Pricing;