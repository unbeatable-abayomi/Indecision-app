import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) =>{
    return (
       <Modal isOpen = {props.selectedOption}
       onRequestClose={props.handleCloseModal}
            ariaHideApp={false}
              contentLabel = "Selected Option"
       >
         <h3>Selected Details</h3>
       <h3>{props.selectedOption && <p> task:{  props.selectedOption}</p>}</h3>
       <button onClick={props.handleCloseModal}>Okay </button>
       </Modal>
  )

    
  
};

export default OptionModal;

