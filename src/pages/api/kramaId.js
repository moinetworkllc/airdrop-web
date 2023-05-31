// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let rewards
let rewards_response

export default async function handler(req, res) {

  if (req.query.kramaId != undefined) {
    rewards = await fetch(`https://pnapi.moinet.io/moi/readtokensummary?kramaId=${req.query.kramaId}`)
    rewards_response = await rewards.json()
  }
  res.status(200).json({ 
    rewards: rewards_response,
   
  })
}
