const { nanoid } = require('nanoid');
const pasteBin = require("../models/pastebin")
async function urlGeneratorHandler(req,res)
{
  const body = req.body;
  if(!body) return res.status(400).json({error:"Write something idiot"})
  if(!body.snippet) return res.status(400).json({error:"Where is snippet"})
  const url = nanoid(8);

  const snippet = req.body.snippet;
  await pasteBin.create({
    snippet:snippet,
    url:url,
    visitHistory:[{timestamp:Date.now(),IP:req.ip}]
  })
  res.status(200).json({created:url})
}

async function urlRedirectHandler(req,res)
{
  const redirectURL = req.params.url;
  const result = await pasteBin.findOne({url:redirectURL})
  if(!result) res.status(404).json({error:"Not found"})
  res.status(200).json({snippet:`Your snippet is ${result.snippet}`})
}


module.exports = {
  urlGeneratorHandler,urlRedirectHandler
}