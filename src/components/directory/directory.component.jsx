import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenyItem from '../menu-item/menu-item.component';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {
            sections.map(({ id, ...otherSectionProps }) => (
                <MenyItem key={id} {...otherSectionProps} />
            ))
        }
    </div>
);

const mapStateToPros = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToPros)(Directory);