import Web3 from "web3";
import { bindActionCreators } from "redux";
import { addBlock } from "../actions/index";

export default function listener(dispatch) {

    // set the provider you want from Web3.providers
    const web3 = new Web3(
      new Web3.providers.WebsocketProvider("wss://rinkeby.infura.io/_ws")
    );
    const web3Http = new Web3(
      new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/VYDF3dhGnawnGEaGGnAg"
      )
    );

  //  subscribe for new block headers
  web3.eth
    .subscribe("newBlockHeaders", (error, result) => {
      if (error) {
        console.log(error);
      }
    })
    .on("data", blockHeader => {
      web3Http.eth
        .getBlock(blockHeader.number)
        .catch(err => {
          console.log(err);
        })
        .then(block => {
          if (block) {
            dispatch(addBlock(block));
          }
        });
    });
}

// listens for new blocks from server then dispatches action
// export default function listener(dispatch) {
//   const ws = new WebSocket("ws://localhost:5000");

//   ws.onopen = () => {
//     console.log("websocket is connected...");
//     ws.send("connected");
//   };
//   ws.onmessage = message => {
//     const data = JSON.parse(message.data);
//     dispatch(addBlock(data));
//   };
// }
