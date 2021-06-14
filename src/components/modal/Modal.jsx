import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './modal.scss';
import { MdClose } from 'react-icons/md';
const Modal = ({ title, image, description, demo, github, closeModal }) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    setShowModal(true);
  }, []);

  const animation = useSpring({
    config: {
      duration: 400,
    },
    opacity: showModal ? 1 : 0,
    // transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const outClick = (e) => {
    if (modalRef.current === e.target) {
      console.log(e.target);
      closeModal();
    }
  };

  return (
    <div className='modalContainer' ref={modalRef} onClick={outClick}>
      <animated.div style={animation}>
        <div className='modalWrapper'>
          <div className='modalHeader'>
            <span>{title}</span>
          </div>
          <div className='wrapper'>
            <img className='modalImg' src={image} alt='img' />
            <div className='modalContent'>
              <h2>{title}</h2>
              <p>{description}</p>
              <b>
                Demo:
                <a
                  href='!#'
                  className='hyper-link'
                  onClick={() => window.open(`${demo}`, '_blank')}>
                  &nbsp; {demo}
                </a>
              </b>
              <b>
                GitHub:
                <a
                  href='!#'
                  className='hyper-link'
                  onClick={() => window.open(`${github}`, '_blank')}>
                  &nbsp; {github}
                </a>
              </b>
            </div>
          </div>
          <MdClose className='closeBtn' onClick={closeModal} />
        </div>
      </animated.div>
    </div>
  );
};

export default Modal;
