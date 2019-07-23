import React from 'react';
//styles
import styled from 'styled-components';
import vars from './Vars';
//react modal
import ReactModal from 'react-modal';

//styled
const ModalInner = styled.section`
  position: relative;
`;

const ModalWrap = styled.div`
  position: relative;
  max-width: 600px;
  max-height: calc(100vh - 100px);
  overflow-y: scroll;
  margin: 0 auto;
  background-color: #fff;
  padding: 50px 20px 20px 20px;
  @media (max-width: 620px) {
    margin: 0 20px;
  }
`;

const ModalClose = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  padding: 0;
  line-height: 1;
  background: none;
  svg {
    .fill {
      transition: ${vars.transitions.hover1};
    }
  }
  &:hover {
    svg {
      .fill {
        fill: ${vars.colors.textDark};
      }
    }
  }
`;

const ModalContent = styled.div`
  position: relative;
`;


//modal styles override
const style = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999999,
    backgroundColor: 'rgba(31, 36, 48, 0.6)'
  },
  content: {
    position: 'absolute',
    top: '80px',
    left: '0',
    right: '0',
    bottom: 'auto',
    maxWidth: '600px',
    margin: 'auto',
    border: 'none',
    background: 'none',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '0px',
    outline: 'none',
    padding: '0'
  }
}

//Root element
ReactModal.setAppElement('#root');

const Modal = (props) => {
  return (
    <ModalInner>
      <ReactModal
        isOpen={props.openModal}
        onRequestClose={props.closeModal}
        contentLabel="Modal"
        closeTimeoutMS={200}
        style={style}>
        <ModalWrap>
          <ModalClose onClick={props.closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16">
              <defs>
                <path id="a" d="M14.313 0L8 6.314 1.687 0 0 1.687 6.314 8 0 14.313 1.687 16 8 9.687 14.313 16 16 14.313 9.687 8 16 1.687z" />
              </defs>
              <use className="fill" fill="#818795" fillRule="evenodd" xlinkHref="#a" />
            </svg>
          </ModalClose>
          <ModalContent>
            {props.children}
          </ModalContent>
        </ModalWrap>
      </ReactModal>
    </ModalInner>
  );
};

export default Modal;