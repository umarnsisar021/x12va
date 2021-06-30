import React from 'react'
import './ExpertGridRow.css'
import ExpertTile from './ExpertTile'


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function ExpertGridRow({ title, avatar1, avatar2,
    avatar3, avatar4, tileTitle1, tileTitle2,
    tileTitle3, tileTitle4, }) {

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
    };

    return (
        <div>
            <div className="exp__headerContainer">
                <div className="exp__headerLeft">
                    <h2> {title} </h2>
                </div>
                {/* <div className="exp__headerRight">
                    <button className="exp__sliderbutton">&lt;</button>
                    <button className="exp__sliderbutton">&gt;</button>
                </div> */}
            </div>
            <div className="expertGrid__row">
                <div className="expertInnerGrid">
                    <Slider {...settings}>
                        <ExpertTile
                            avatar={avatar1}
                            tileTitle={tileTitle1}
                        />
                        <ExpertTile
                            avatar={avatar2}
                            tileTitle={tileTitle2}

                        />
                        <ExpertTile
                            avatar={avatar3}
                            tileTitle={tileTitle3}

                        />
                        <ExpertTile
                            avatar={avatar4}
                            tileTitle={tileTitle4}

                        />

                        <ExpertTile
                            avatar={avatar1}
                            tileTitle={tileTitle1}
                        />
                        <ExpertTile
                            avatar={avatar2}
                            tileTitle={tileTitle2}

                        />
                        <ExpertTile
                            avatar={avatar3}
                            tileTitle={tileTitle3}

                        />
                        <ExpertTile
                            avatar={avatar4}
                            tileTitle={tileTitle4}

                        />
                    </Slider>
                </div>
            </div>

            <hr className="horizontal__line" />
        </div>
    )
}

export default ExpertGridRow
