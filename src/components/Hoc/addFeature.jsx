import React, { Component } from "react";
import styles from './fade.module.css'


const addFeature = (WrappedComponent) => {

    return class extends Component {
        state = {
            fadeClass: 'fade-in',
            theme: 'dark',
        };
        handleOverlayClick = (e) => {
            e.stopPropagation();
        }


        render() {
            const { fadeClass, theme } = this.state;
            return (
                <div className={`${styles.modalOverlay} ${styles[fadeClass]} ${styles[`${theme}Theme`]}`}
                    onClick={this.handleOverlayClick}>
                    <WrappedComponent {...this.props} theme={theme} />
                </div>
            )
        }
    }
}
export default addFeature;