import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FormattedDate extends Component {
    render() {
        const { date, formattedDate } = this.props;
            return (
                <time className="formatted-date" dateTime={ date.substring(0,10) }>
                    { formattedDate }
                </time>
            );
    }
}
