import React from "react";
import { connect } from "react-redux";

// Displays information from the currently selected block
const ContentArea = ({ block }) => {
  return (
    <div>
      Selected block: {block.blockdata ? block.blockdata.number : "null"}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    block: state.currentSelection
  };
}

export default connect(mapStateToProps)(ContentArea);
