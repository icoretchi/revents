import React from 'react';
import { connect } from 'react-redux';
import TestModal from './TestModal';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const modalLookup = {
  TestModal,
  LoginModal,
  RegisterModal,
};

const mapState = state => {
  return {
    currentModal: state.modals,
  };
};

const ModalManager = ({ currentModal }) => {
  let renederedModal;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];

    renederedModal = <ModalComponent {...modalProps} />;
  }

  return <span>{renederedModal}</span>;
};

export default connect(mapState)(ModalManager);
