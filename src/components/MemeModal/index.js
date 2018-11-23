import React, { Component } from "react";

import Modal from "react-responsive-modal";

class MemeModal extends Component {
  state = {};

  render() {
    return (
      <Modal
        open={this.props.openModal}
        onClose={() => this.props.closeEvent()}
        center
      >
        <div className="modal-text-container">
          <h2 className="modal-text">You are about to create a meme!</h2>

          <h2 className="modal-text">Are you finished editing?</h2>
        </div>

        <div className="modal-buttons">
          <button
            className="modal-button-confirm"
            onClick={() => this.props.confirmEvent()}
          >
            Yes
          </button>
          <button
            className="modal-button-cancel"
            onClick={() => this.props.closeEvent()}
          >
            No
          </button>
        </div>
      </Modal>
    );
  }
}

export default MemeModal;
