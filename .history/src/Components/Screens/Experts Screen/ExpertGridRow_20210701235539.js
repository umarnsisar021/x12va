import React from 'react'
import './ExpertGridRow.css'
import ExpertTile from './ExpertTile'


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';



function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
function ExpertGridRow(props) {

    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        responsive: [
            { breakpoint: 500, settings: { slidesToShow: 1 } },
            { breakpoint: 700, settings: { slidesToShow: 2 } },
            { breakpoint: 900, settings: { slidesToShow: 2 } },
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
        ],
        slidesToScroll: 1,
        // nextArrow: <SamplePrevArrow />,
        // prevArrow: <SamplePrevArrow />
    };

    return (
        <div>
            <div className="exp__headerContainer">
               
                {/* <div className="exp__headerRight">
                    <button className="exp__sliderbutton">&lt;</button>
                    <button className="exp__sliderbutton">&gt;</button>
                </div> */}
            </div>
            <div className="expertGrid__row">
                <div className="exp__headerLeft">
                    <h2> {props.title} </h2>
                </div>
                <div className="expertInnerGrid">
                    <Slider {...settings} >
                        {
                           console.log(props.data)
                        }
                       
                        <ExpertTile
                            avatar={props.avatar2}
                            tileTitle={props.tileTitle2}

                        />
                        <ExpertTile
                            avatar={props.avatar3}
                            tileTitle={props.tileTitle3}

                        />
                        <ExpertTile
                            avatar={props.avatar4}
                            tileTitle={props.tileTitle4}

                        />

                        <ExpertTile
                            avatar={props.avatar1}
                            tileTitle={props.tileTitle1}
                        />
                        <ExpertTile
                            avatar={props.avatar2}
                            tileTitle={props.tileTitle2}

                        />
                        <ExpertTile
                            avatar={props.avatar3}
                            tileTitle={props.tileTitle3}

                        />
                        <ExpertTile
                            avatar={props.avatar4}
                            tileTitle={props.tileTitle4}

                        />
                    </Slider>
                </div>
            </div>

            <div className="horizontal__line">
                <div className="border"></div>
            </div>
        </div>
    )
}

export default ExpertGridRow
