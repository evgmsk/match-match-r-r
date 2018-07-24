/**
 * project match-match-r-r
 */
import React from 'react';
import './invitationPage.scss';

class About extends React.Component {
    componentDidMount() {
        this.props.dataLoaded(true);
    }
    render() {
        return (
            <section className="about">
                <h1>Учеба как незабываемое приключение</h1>
                <h2>Cкриншоты игры</h2>
                <div className="screenshots-wrapper">
                    <figure className="game-screenshots">
                        <img src={FirstScreen} alt="" />
                        <figcaption>Магическая атака - магия льда</figcaption>
                    </figure>
                    <figure className="game-screenshots">
                        <img src={SecondScreen} alt="" />
                        <figcaption>Магическая атака - магия жизни</figcaption>
                    </figure>
                    <figure className="game-screenshots">
                        <img src={ThirdScreen} alt="" />
                        <figcaption>Магическая атака - магия огня</figcaption>
                    </figure>
                    <figure className="game-screenshots">
                        <img src={ForthScreen} alt="" />
                        <figcaption>Магическая атака - магия воды</figcaption>
                    </figure>
                </div>
            </section>
        );
    }
}

export default About;