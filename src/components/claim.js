
export default function getData(moiState, loginData, points, totalPoints) {

// STEP 2: Upload the Claim data in JSON format and get the CID
var data = JSON.stringify({
    "userName": loginData.userName,
    "points": totalPoints,
    "details": {
        "wallet": {
            "creation": points.moid,
            "kyc": {
                "phone": points.phone_no,
                "email": points.email,
                "id": points.kyc
            }
        },
        "validator": {
            "setup": points.validator_nodes,
            "early": points.validator_nodes_may,
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
            "twitter": points.twitter,
            "telegram": points.telegram,
            "discord": points.discord,
            "transactions": points.interactions
        },
        "apps": {
            "created": points.createdApp,
            "joined": points.partApp
        },
        "avatars": {
            "created": points.createdAvatar,
            "scanned": points.scannedAvatar
        }
    }
})
   
  return data

}

export {getData}
