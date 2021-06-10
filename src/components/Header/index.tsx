import React from 'react'
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR'

import styles from './Header.module.scss'

export default function Header() {
    const currentDate = format(new Date(), 'EEEEEE, dd MMMM', {
        locale: ptBR,
    });

    return(
        <header className={styles.headerContainer}>
            <img src='logo.svg' alt='Logo podcastr' />

            <p>O melhor para você ouvir, sempre</p>

            <span>{currentDate}</span>
        </header>
    );
}