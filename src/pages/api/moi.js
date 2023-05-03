// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let validator_nodes, twitter, telegram, discord
let validator_nodes_response, twitter_response, telegram_response, discord_response

export default async function handler(req, res) {

  console.log(req.query)
  if (req.query.id != undefined) {
    console.log("Yay working")
    validator_nodes = await fetch(`https://api.moinet.io/moi-id/moinode/list?userID=${req.query.id}`)
    validator_nodes_response = await validator_nodes.json()

    twitter = await fetch(`https://qa-sm.moinet.io/api/v1/engagement/twitter/${req.query.id}`)
    twitter_response = await twitter.json()

    telegram = await fetch(`https://qa-sm.moinet.io/api/v1/engagement/telegram/${req.query.id}`)
    telegram_response = await telegram.json()

    discord = await fetch(`https://qa-sm.moinet.io/api/v1/engagement/discord/${req.query.id}`)
    discord_response = await discord.json()
  }
  res.status(200).json({ 
    validator_nodes: validator_nodes_response,
    twitter : twitter_response,
    telegram : telegram_response,
    discord : discord_response
  })
}
