import {useState} from 'react';
import Modal from 'react-modal';
import styles from './Navbar.module.scss';

const Navbar = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <nav className={styles.nav_container}>
            <div className={styles.center}>
                <p className={styles.nav_item} onClick={openModal}>Contact</p>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Contact"
                className={styles.modalContent}
                overlayClassName={styles.modalOverlay}
            >
                <h2>Contact</h2>
                <div>
                    <p>Тестовое задание выполнил: <strong>Кияшко Артём</strong></p>
                    <br/>
                    <p>Мое резюме: <a
                        className={styles.link}
                        href="https://hh.ru/resume/7c4c1c18ff0c7bb9430039ed1f575473717058?hhtmFrom=resume_list"
                        target={'_blank'}>Здесь</a>
                    </p>
                    <p>Мой Telegram: <a
                        className={styles.link}
                        href="https://t.me/sznchange"
                        target={'_blank'}>Здесь</a>
                    </p>
                    <p>Исходный код: <a
                        className={styles.link}
                        href="https://github.com/smenasezona/valantis-test-assigment.git"
                        target={'_blank'}>Здесь</a>
                    </p>
                    <p>Мой e-mail: artemkiasko@gmail.com</p>
                    <br/>
                    <p>
                        С нетерпением буду ждать фидбека!<br/>
                        Хорошего вам дня :)
                    </p>
                </div>
                <button onClick={closeModal}>Close</button>
            </Modal>

        </nav>
    );
};

export default Navbar;
