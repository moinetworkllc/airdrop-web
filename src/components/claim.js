var axios = require('axios');
const { ethers } = require("ethers");
const { Network, Alchemy } = require("alchemy-sdk");
require('dotenv').config();


const AUTH='Bearer '+ ""
const ALCHEMY_API_KEY = ""
const URL=""

export default function claim() {
    console.log("IN CLAIM")
    axios.get("https://api.pinata.cloud/data/testAuthentication",
    {
        headers: {
            'Authorization': AUTH
        }
    }).then(response => {
    console.log(response.data);
})

// STEP 2: Upload the Claim data in JSON format and get the CID
var data = JSON.stringify({
    "userID": "0xABC",
    "points": 28500,
    "details": {
        "wallet": {
            "creation": 1,
            "kyc": {
                "phone": 2,
                "email": 2,
                "id": 5
            }
        },
        "validator": {
            "setup": 20,
            "early": 10,
            "rewards": [
                {
                    "kramaID": "Qm...",
                    "rewards": 1000
                },
                {
                    "kramaID": "Qm...",
                    "rewards": 5000
                }
            ]
        },
        "engagement": {
            "twitter": 10,
            "telegram": 20,
            "discord": 30,
            "transactions": 50
        },
        "apps": {
            "created": 50,
            "joined": 10
        },
        "avatars": {
            "created": 10,
            "scanned": 5
        }
    }
})

var cid = "";
axios.post('https://api.pinata.cloud/pinning/pinJSONToIPFS',
    data,
    {
        'Content-Type': 'application/json',
        headers: {
            'Authorization': AUTH
        }
    }).then(response => {
    cid = response.data.IpfsHash;
    console.log(cid);
    console.log(response.data);
})

// STEP 3: Sign the CID
// Load wallet - replace process.env.SEPOLIA_PRIVATE_KEY with MOI ID private key of user
const wallet = new ethers.Wallet("");
// Load Alchemy
const settings = {
    apiKey: ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
    network: URL, // Replace with your network.
};
const alchemy = new Alchemy(settings);
// Sign the message

return cid, wallet


}

export {claim}
