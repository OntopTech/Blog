import { SubContentCard } from '../organisms/subContentCard';
import styles from '../../styles/Home.module.css'
import { Col, Container, Row } from 'react-bootstrap';

export const ContainerCards = () => {

    return (
        <div className="containerCards">
            <section className={`${styles.masonryLayout} ${styles.col2Layout} ${styles.mt30}`}>
                <Container>
                    <div className={styles.containerFluid}>
                        <Row>
                            <Col lg="8" className={styles.mt10}>
                                <SubContentCard />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </div>
    );
}