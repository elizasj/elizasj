import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WorkList = props => {
    const recentWork = props.work
    console.log(props)
    const workList = recentWork.map(function(work, index) {
        if (props.header == 'Residencies') {
            return <li key={index}> {work.title} - {work.year}</li>
        } else {
            return <li key={index}> {work.title}</li>
        }
    })

    return(
        <div>
            <h4>{props.header}</h4>
            <ul>{workList}</ul>
        </div>
    )
}

WorkList.propTypes = {
    work: PropTypes.array,
}

export default WorkList;