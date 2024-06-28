import {ReactComponent as LogoIcon} from "../../assets/icons/Logo_New_Shield_1.svg";
import styles from './side_bar.module.scss'
import Icon from "@mdi/react";
import {mdiMenuOpen, mdiViewDashboardOutline, mdiCharity} from '@mdi/js';

export const SideBar = () => {
    return (
        <div className={styles.side_bar}>
            <div className={styles.side_bar_logo}>
                <div className={styles.side_bar_logo_items}>
                    <LogoIcon/>
                    <p className={styles.side_bar_logo__text}>Frorex<br/>Academy</p>
                </div>
                <button className={styles.side_bar_button}>
                    <Icon path={mdiMenuOpen}
                          size={1}/>
                </button>
            </div>
            <div className={styles.side_bar__menu}>
                <h4>Menu</h4>
                <ul className={styles.side_bar__menu__buttons}>
                    <li className={styles.side_bar__menu__buttons_links}>
                        <a href="/"><Icon path={mdiViewDashboardOutline}
                                          size={1}/>
                            Dashboard</a>
                    </li>
                    <li className={styles.side_bar__menu__buttons_links}>
                        <a href="/"><Icon path={mdiCharity}
                                          size={1}/>
                            Dashboard</a>
                    </li>
                    <li className={styles.side_bar__menu__buttons_links}>
                        <a href="/"><Icon path={mdiViewDashboardOutline}
                                          size={1}/>
                            Dashboard</a>
                    </li>
                    <li className={styles.side_bar__menu__buttons_links}>
                        <a href="/"><Icon path={mdiViewDashboardOutline}
                                          size={1}/>
                            Dashboard</a>
                    </li>
                    <li className={styles.side_bar__menu__buttons_links}>
                        <a href="/"><Icon path={mdiViewDashboardOutline}
                                          size={1}/>
                            Dashboard</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}