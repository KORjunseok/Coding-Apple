'use client'
export default function DateTime(req, res){

  if(req.method == 'GET') {
    let titi = new Date()
    return res.status(200).json(titi)
    }
}