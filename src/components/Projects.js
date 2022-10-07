// Import Assets
import pfIngo from '../assets/pfIngo.png';
import pfGoodsflow from '../assets/pfGoodsflow.png';
import pfRsbt from '../assets/pfRsbt.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>Some of My Projects...</h2>
                    
            <div className="projects__cards">

                <div className="projects__card">
                    <h3>inGO</h3>
                    <img src={pfIngo} alt="inGO Mobile App" />
                    <p>An ad mobile application.
                    </p>

                    <a href="https://sudo.ingo.io/detailingo.php" target="_blank" className="button">Site</a>
                    {/* <a href="https://github.com/Uniswap/v2-core" target="_blank" className="button">Code</a> */}
                </div>

                <div className="projects__card">
                    <h3>Goodsflow</h3>
                    <img src={pfGoodsflow} alt="Goodsflow Admin Page" />
                    <p>This application is useful for making sales requests, checking goods, making sales orders and shipping goods with a variety of different roles in one application
                    </p>

                    <a href="https://sudo.ingo.io/detailgoodflow.php" target="_blank" className="button">Site</a>
                    {/* <a href="https://github.com/compound-finance/compound-protocol" target="_blank" className="button">Code</a> */}
                </div>

                <div className="projects__card">
                    <h3>RS Bunda Thamrin</h3>
                    <img src={pfRsbt} alt="RS Bunda Thamrin Mobile App" />
                    <p>This application is for patient queue and for information about polyclinics, doctor's schedules and hospital promos.


                    </p>

                    <a href="https://sudo.ingo.io/detailrsbt.php" target="_blank" className="button">Site</a>
                    {/* <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a> */}
                </div>
                <i>You can see some more of my projects in the portfolio below</i>

            </div>
        </section>
    );
}

export default Projects;