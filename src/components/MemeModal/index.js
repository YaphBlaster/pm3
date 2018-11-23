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
        classNames={{
          modal: "meme-modal",
          closeButton: "modal-button-close"
        }}
      >
        <div className="modal-text-container">
          <div className="modal-title">Create Meme</div>

          <h2 className="modal-subtitle">Are you finished editing?</h2>
        </div>

        <div className="modal-buttons">
          <button
            className="modal-button-cancel"
            onClick={() => this.props.closeEvent()}
          >
            No
          </button>
          <button
            className="modal-button-confirm"
            onClick={() => this.props.confirmEvent()}
          >
            Yes
          </button>
        </div>
      </Modal>
    );
  }
}

export default MemeModal;
