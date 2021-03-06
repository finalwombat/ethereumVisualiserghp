import React from "react";
import { connect } from "react-redux";
import TransactionList from "../components/TransactionList"
import styled from 'styled-components'

// Displays information from the currently selected block
const ContentArea = ({ block }) => {
  console.log('block', block)
  if(!block.number) {return(
    <MainDiv className="contentArea"><h1>Select block to start exploring</h1></MainDiv>
  )}
  else {
  return (
    <MainDiv className="contentArea">
      <InfoDiv>
      <div><h1>Block: #</h1> <h2>{block.number}</h2></div>
      <div><h3>Difficulty: </h3> <p>{block.difficulty}</p></div>
      <div><h3>Gas used:</h3> <p>{block.gasUsed}</p></div>
      <div><h3>Gas limit:</h3> <p>{block.gasLimit}</p></div>
      <div><h3>Miner:</h3> <p>{block.miner}</p></div>
      <div><h3>Transactions:</h3><p>{block.transactions.length}</p></div>
      </InfoDiv>
      
    </MainDiv>
  )};
};

function mapStateToProps(state) {
  return {
    block: state.currentSelection
  };
}

export default connect(mapStateToProps)(ContentArea);

const MainDiv = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    color: white;
    border: 1px solid #454545;
`
const InfoDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex; 
    flex-direction: column;
    flex-wrap: wrap;

    & div {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 10px;
    }

    & div p {
      text-align: center;
    }
`