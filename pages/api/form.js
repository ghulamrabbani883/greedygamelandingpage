export default function handler(req, res) {
    const body = req.body
    const {name,email,phone,link,revenue} = body;
    console.log( {name,email,phone,link,revenue})
    res.status(200).json({ data:{name,email,phone,link,revenue} })
  }