// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let validator_nodes, twitter, telegram, discord, phone_no, email, kyc, interactions
let validator_nodes_response, twitter_response, telegram_response, discord_response, phone_no_response, email_response, kyc_response, interactions_response

export default async function handler(req, res) {

  console.log(req.query)
  if (req.query.userId != undefined) {
    console.log("Yay working")
    console.log(req.query.userId)
    console.log(req.query.userName)

    phone_no = await fetch(`https://api.moinet.io/iome/v0/user/${req.query.userId}/digitalme?dimension=personal&attributes=phone`)
    phone_no_response = await phone_no.json()

    email = await fetch(`https://api.moinet.io/iome/v0/user/${req.query.userId}/digitalme?dimension=personal&attributes=email`)
    email_response = await email.json()

    kyc = await fetch(`https://api.moinet.io/iome/v0/user/${req.query.userId}/digitalme?dimension=personal&attributes=kyc`)
    kyc_response = await kyc.json()

    validator_nodes = await fetch(`https://api.moinet.io/moi-id/moinode/list?userID=${req.query.userId}`)
    validator_nodes_response = await validator_nodes.json()

    twitter = await fetch(`https://qa-sm.moinet.io/api/v1/engagement/twitter/${req.query.userId}`)
    twitter_response = await twitter.json()

    telegram = await fetch(`https://qa-sm.moinet.io/api/v1/engagement/telegram/${req.query.userId}`)
    telegram_response = await telegram.json()

    discord = await fetch(`https://qa-sm.moinet.io/api/v1/engagement/discord/${req.query.userId}`)
    discord_response = await discord.json()

    interactions = await fetch(`https://api.moinet.io/iome/v0/user/${req.query.userId}/interactions?offset=0&limit=100`)
    interactions_response = await interactions.json()
  }
  res.status(200).json({ 
    moiId: req.query.userId,
    phone_no : phone_no_response,
    email : email_response,
    kyc : kyc_response,
    validator_nodes : validator_nodes_response,
    twitter : twitter_response,
    telegram : telegram_response,
    discord : discord_response,
    interactions : interactions_response
  })
}
