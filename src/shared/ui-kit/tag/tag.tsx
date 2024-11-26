import React from 'react';
import styles from './tag.module.scss'


const Tag = ({title}: {title: string}) => {
    return (
        <div className={styles.mainTag}>
            <h3 className={styles.tag}>{title}</h3>
        </div>
    );
};

export default Tag;