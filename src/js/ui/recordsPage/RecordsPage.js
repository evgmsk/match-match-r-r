/**
 * project match-match-r-r
 */
import React from 'react';
import RacordsTableHead from './RecordsTableHead';
import './recordsPage.scss';

class RecordsPage extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <section className="racords-wrapper">
                <RacordsTableHead />
            </section>
        );
    }
}

export default RecordsPage;
