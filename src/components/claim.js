
export default function getData(moiState, loginData, points, totalPoints, rewards, amount, kramaIds) {

// STEP 2: Upload the Claim data in JSON format and get the CID
var details = {
    "payload": {
      "address": loginData.userid,
      "total_tokens": amount,
      "total_points": totalPoints,
      "total_rewards": rewards,
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
          "rewards": kramaIds
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
    },
  }
var data = JSON.stringify(details)
   
return data

}

export {getData}
