import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x6A7F85B75CE570443C1089bEE7E9bB12Ac33E34f"
);

export default instance;
