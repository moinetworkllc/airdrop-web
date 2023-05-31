// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let validator_nodes, twitter, telegram, discord, phone_no, email, kyc, interactions, kramaID, social
let validator_nodes_response, twitter_response, telegram_response, discord_response, phone_no_response, email_response, kyc_response, interactions_response, kramaID_response, social_response

export default async function handler(req, res) {

  if (req.query.userId != undefined) {
   
    phone_no = await fetch(`https://api.moinet.io/iome/v0/user/${req.query.userId}/digitalme?dimension=personal&attributes=phone`)
    phone_no_response = await phone_no.json()

    email = await fetch(`https://api.moinet.io/iome/v0/user/${req.query.userId}/digitalme?dimension=personal&attributes=email`)
    email_response = await email.json()

    kyc = await fetch(`https://api.moinet.io/iome/v0/user/${req.query.userId}/digitalme?dimension=personal&attributes=kyc`)
    kyc_response = await kyc.json()

    validator_nodes = await fetch(`https://api.moinet.io/moi-id/moinode/list?userID=${req.query.userId}`)
    validator_nodes_response = await validator_nodes.json()

    social = await fetch(`https://api.moinet.io/iome/v0/user/${req.query.userId}/digitalme?dimension=social&attributes=twitter,telegram,discord`)
    social_response = await social.json()

    if (social_response.data.result.givenAttributes.telegram) {
      telegram = await fetch(`https://qa-sm.moinet.io/api/v1/engagement/telegram/${social_response.data.result.givenAttributes.telegram.value.username}`)
      telegram_response = await telegram.json()
    } 
    if (social_response.data.result.givenAttributes.discord) {
      discord = await fetch(`https://qa-sm.moinet.io/api/v1/engagement/discord/${social_response.data.result.givenAttributes.discord.value.username}`)
      discord_response = await discord.json()
    } 
    if (social_response.data.result.givenAttributes.twitter) {
      twitter = await fetch(`https://qa-sm.moinet.io/api/v1/engagement/twitter/${social_response.data.result.givenAttributes.twitter.value.username}`)
      twitter_response = await twitter.json()
    } 
    
    interactions = await fetch(`https://api.moinet.io/iome/v0/user/${req.query.userId}/interactions`)
    interactions_response = await interactions.json()

    kramaID = await fetch(`https://api.moinet.io/moi-id/moinode/list?userID=${req.query.userId}`)
    kramaID_response = await kramaID.json()
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
    interactions : interactions_response,
    kramaID : kramaID_response
  })
}
