
export async function subscribeToNewsletter(email) {
  const response = await fetch(
    `/api/newsletter/subscribe`,
    {
      method: 'post',
      body: JSON.stringify({ email }),
      headers: {'Content-Type': 'application/json'},
    },
  )
  try {
    return await response.json()
  } catch (err) {
    return {
      message: 'Ops! Não foi possível realizar a inscrição.',
      status: 'danger',
    }
  }
}