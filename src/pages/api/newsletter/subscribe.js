
const API_KEY = process.env.CONVERT_KIT_API_KEY;
const API_SECRET = process.env.CONVERT_KIT_API_SECRET;
const FORM_ID = process.env.CONVERT_KIT_FORM_ID;

async function addSubscriberToForm(email) {
  const data = {
    api_key: API_KEY,
    api_secret: API_SECRET,
    email,
  }

  const response = await fetch(
    `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
    {
      method: 'post',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'},
    },
  )
  try {
    const json = await response.json()
    if (json.error) {
      return {
        message: json.message,
        status: 'danger',
      }
    }

    return {
      message: 'Uhu! Agora só falta confirmar sua inscrição em seu e-mail.',
      status: 'success'
    }
  } catch (err) {
    console.error(err)
    return {
      message: 'Ops! Não foi possível realizar a inscrição.',
      status: 'danger',
    }
  }
}

export default async function handler(req, res) {
  
  if (req.method !== 'POST') {
    res.status(415).json({ message: 'Method not allowed.' })
  }

  const email = req.body.email
  if (!email) {
    res.status(422).json({ message: 'E-mail inválido.' })
  }

  const result = await addSubscriberToForm(email)
  return res.status(200).json(result)
}