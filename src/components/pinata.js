var axios = require("axios");
require("dotenv").config();

export default async function getCid(data) {
  const AUTH = "Bearer " + process.env.NEXT_PUBLIC_AUTH;
  // Check Connection
  axios
    .get("https://api.pinata.cloud/data/testAuthentication", {
      headers: {
        Authorization: AUTH,
      },
    })
    .then((response) => {});

  var cid = "";
  const cid_data = await axios
    .post("https://api.pinata.cloud/pinning/pinJSONToIPFS", data, {
      "Content-Type": "application/json",
      headers: {
        Authorization: AUTH,
      },
    })
    .then((response) => {
      cid = response.data.IpfsHash;
    });
  const cid_xx = await cid_data;
  return cid;
}

export { getCid };
