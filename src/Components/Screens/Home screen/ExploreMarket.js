import React from 'react'
import './ExploreMarket.css'
import Grid from './Grid'

import tile1 from '..//../../Assets/Images/Path 99.png'
import tile2 from '..//../../Assets/Images/Path 102.png'
import tile3 from '..//../../Assets/Images/Path 103.png'
import tile4 from '..//../../Assets/Images/Group 274.png'
import tile5 from '..//../../Assets/Images/Group 275.png'
import tile6 from '..//../../Assets/Images/Group 276.png'
import tile7 from '..//../../Assets/Images/Group 277.png'
import tile8 from '..//../../Assets/Images/Path 149.png'
import tile9 from '..//../../Assets/Images/Group 278.png'
import tile10 from '..//../../Assets/Images/Path 156.png'
import tile11 from '..//../../Assets/Images/Path 157.png'
import tile12 from '..//../../Assets/Images/Group 279.png'


function ExploreMarket() {
    return (
        <div className="market__sec">
            <h1>Explore the Marketplace</h1>
            <p>Aenean gravida nibh sed erat aliquet, in rutrum eros pellentesque. Curabitur tincidunt faucibus est. </p>
            <div className="grid">

                <Grid
                    tile__img={tile1}
                    title="Explore Platform"
                />
                <Grid
                    tile__img={tile2}
                    title="Bayesian Statistics"
                />
                <Grid
                    tile__img={tile3}
                    title="Aerospace Engineering"
                />

                <Grid
                    tile__img={tile4}
                    title="Rocket Science"
                />
                <Grid
                    tile__img={tile5}
                    title="Stochastic Processes"
                />
                <Grid
                    tile__img={tile6}
                    title="Statistical analysis"
                />
                <Grid
                    tile__img={tile7}
                    title="Electrical Engineering"
                />

                <Grid
                    tile__img={tile8}
                    title="Accounting and finance"
                />
                <Grid
                    tile__img={tile9}
                    title="Structural design"
                />
                <Grid
                    tile__img={tile10}
                    title="Analysis of structures"
                />
                <Grid
                    tile__img={tile11}
                    title="Electromagnetic theory"
                />
                <Grid
                    tile__img={tile12}
                    title="Quantum Physics"
                />
            </div>
            <button>Place Order</button>
        </div>
    )
}

export default ExploreMarket
