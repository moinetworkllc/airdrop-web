// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let validator_nodes, karma_id
let validator_nodes_response, karma_id_response

export default async function handler(req, res) {

  console.log(req.query)
  if (req.query.id != undefined) {
    console.log("Yay working")
    validator_nodes = await fetch(`https://api.moinet.io/moi-id/moinode/list?userID=${req.query.id}`)
    validator_nodes_response = await validator_nodes.json()
  }
  res.status(200).json({ 
    validator_nodes: validator_nodes_response[0] })
}
