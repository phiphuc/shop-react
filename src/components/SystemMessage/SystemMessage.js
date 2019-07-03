import React from 'react';
import PropTypes from 'prop-types';
import './SystemMessage.scss';

function SystemMessage({
    text, type, onHide, isVisible
}){
    const className = isVisible
        ? 'systemmessage systemMessage_visible'
        : 'systemMessage';
    const modal = `systemMessage__modal systemMessage__modal${type}`;
    const fadeIn = {
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    };
    return (
        <div className={className} style={fadeIn}>
            <div className={modal}>
                <button id="closeButton" type="button" className="systemMessage__close" onClick={() => onHide()}>&#10006;</button>
                <p>{text}</p>
            </div>
        </div>
    )
}

SystemMessage.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    onHide: PropTypes.func,
    isVisible: PropTypes.bool
  };
  
  SystemMessage.defaultProps = {
    text: '',
    type: '',
    onHide: console.log,
    isVisible: false
  };

export default SystemMessage;