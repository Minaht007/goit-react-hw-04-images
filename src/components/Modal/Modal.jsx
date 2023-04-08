import { Component } from 'react';
import { createPortal } from 'react-dom';
import Style from '../Style/Style.module.css';

const modalRoot = document.querySelector('#modal-root');
export class ModalImg extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handlKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlKeyPress);
  }
  render() {
    const { largPhoto, closeModal } = this.props;
    return createPortal(
      <div className={(Style.Modal, Style.Overlay)}>
        <img
          src={largPhoto}
          alt={largPhoto}
          onClick={() => closeModal()}
          onKeyDown={() => closeModal()}
        />
      </div>,
      modalRoot
    );
  }
}
