import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import truncate from './trunc';

const WorkList = props => {
    const recentWork = props.work
    const workList = recentWork.map(function(work, index) {
        if (props.header == 'Residencies') {
            return <li key={index}><a className='p-highlight' href={work.url}> {truncate.apply(work.title, [25, true])}</a>, {work.year}</li>
        } else {
            return <li key={index}><a className='p-highlight' href={work.url}> {truncate.apply(work.title, [25, true])}</a></li>
        }
    })

    return(
        <div className='sp-right flex-width'>
            <h4>{props.header}</h4>
            <ul>{workList}</ul>
        </div>
    )
}

WorkList.propTypes = {
    work: PropTypes.array,
}

export default WorkList;