import styles from '../styles/index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link'
import { FormSignIn } from '../components/modalFormSignIn';
import { FormSignUp } from '../components/modalFormSignUp';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';


export default function Index() {
    const [signInShow, setSignInShow] = useState(false);
    const [signUpShow, setSignUpShow] = useState(false);
    return (
        <div className={styles.page}>
            <header className={styles.containerTitle}>
                <div className={styles.title}>BOOK OF PLANTS </div>
                <div className={styles.subTitle}>The most popular plant encyclopedia</div>
            </header>
            <main className={styles.main}>
                <div className={styles.question}>What plant do you want to know about?</div>
                <div className={styles.searchInput}>
                    <Grid container
                        justifyContent='center'
                        alignItem='center'>
                        <Grid item xs={12} xl={9}>
                            <div className={styles.searchInput}>
                                <input type="search" placeholder="Search..." className={styles.searchInputwindow} />
                                <button className={styles.searchInputButton}><FontAwesomeIcon icon={faSearch} /></button>
                            </div>
                        </Grid>
                        <Grid item xl={3}>
                            <div className={styles.searchInputLinks}>
                                <div className={styles.searchInputLinksContainer}>
                                    <a onClick={() => setSignInShow(true)} href="#">Sign In</a>
                                    <div className={styles.vl}></div>
                                    <a onClick={() => setSignUpShow(true)} href="#">Sign Up</a>
                                </div>
                                <div className={styles.searchInputLinksSubtext}>
                                    For create/manage your own library
                                </div>
                                <FormSignIn show={signInShow} onHide={() => setSignInShow(false)}></FormSignIn>
                                <FormSignUp show={signUpShow} onHide={() => setSignUpShow(false)}></FormSignUp>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className={styles.plantsCarousel}>
                    <Carousel className={styles.carouselContainer} variant='dark' controls='false'>
                        <Carousel.Item >
                            <div className={styles.carouselItem}>
                                <img src="/1.png" alt="#" className={styles.carouselItemImg} />
                                <div className={styles.carouselItemTextContainer}>
                                    <div className={styles.carouselItemTitle}>Areca<hr width='50%' /></div>
                                    <div className={styles.carouselItemText}>
                                        Areca is a genus of 51 species of palms in the family Arecaceae, found in humid tropical forests from the islands of the Philippines, Malaysia and India, across Southeast Asia to Melanesia.The generic name Areca is derived from a name used locally on the Malabar Coast of India.
                                    </div>
                                    <div className={styles.carouselItemLink}><Link href='#'>More information...</Link></div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={styles.carouselItem}>
                                <img src="/2.png" alt="" className={styles.carouselItemImg} />
                                <div className={styles.carouselItemTextContainer}>
                                    <div className={styles.carouselItemTitle}>Plumeria<hr width='52%' /></div>
                                    <div className={styles.carouselItemText}>
                                        Plumeria is a genus of flowering plants in the family Apocynaceae.Most species are deciduous shrubs or small trees. The species variously are endemic to Mexico, Central America and the Caribbean, and as far south as Brazil and north as Florida, but are grown as cosmopolitan ornamentals in warm regions.
                                    </div>
                                    <div className={styles.carouselItemLink}><Link href='#'>More information...</Link></div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={styles.carouselItem}>
                                <img src="/3.png" alt="" className={styles.carouselItemImg} />
                                <div className={styles.carouselItemTextContainer}>
                                    <div className={styles.carouselItemTitle}>Monstera <hr className width='51%' /></div>
                                    <div className={styles.carouselItemText}>
                                        Monstera is a genus of 45 species of flowering plants in the arum family, Araceae, native to tropical regions of the Americas. The genus is named from the Latin word for monstrous or abnormal, and refers to the unusual leaves with natural holes that members of the genus have.
                                    </div>
                                    <div className={styles.carouselItemLink}><Link href='#'>More information...</Link></div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </main >
            <footer className={styles.footer}>
                <div className={styles.footerText}>
                    Follow us
                    <hr className={styles.Line} />
                </div>
                <FontAwesomeIcon className={styles.footerLabels} icon={faInstagram} />
                <FontAwesomeIcon className={styles.footerLabels} icon={faTwitter} />
                <FontAwesomeIcon className={styles.footerLabels} icon={faFacebook} />
                <FontAwesomeIcon className={styles.footerLabels} icon={faYoutube} />
                <img src="/white_logo.png" alt="" className={styles.footerLogo} />
            </footer>
        </div >
    )
}
