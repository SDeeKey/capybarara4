import React from 'react';
import styles from './linkIcon.module.scss';

// Определяем типы для пропсов
interface LinkIconProps {
    link: string;
    size: 'md' | 'lg';
}

const LinkIcon: React.FC<LinkIconProps> = ({ link, size }) => {
    const sizes: Record<string, React.CSSProperties> = { // Определяем тип объекта, который используем
        md: { height: '36px', width: '36px' },
        lg: { height: '44px', width: '44px' },
    };

    // Выбор стиля в зависимости от размера
    const style = sizes[size] || sizes.md; // По умолчанию размер md

    return (
        <div>
            <a href={link} target='_blank' rel='noopener noreferrer'>
                <div className={styles.linkIconContainer} style={style}>
                    <img src="linkIcon.svg" alt="linkIcon" />
                </div>
            </a>
        </div>
    );
};

export default LinkIcon;