import Image from 'next/image'

import { subscribeToNewsletter } from 'lib/newsletter'
import * as S from './styled'
import { useState } from 'react'

const Newsletter = () => {

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(null)

  const _subscribe = async (ev) => {
    const result = await subscribeToNewsletter(email)
    setMessage(result)
    if (result.status !== 'success') {
      setTimeout(() => {
        setMessage(null)
      }, 1500)
    }
  }

  return (
    <>
     <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
          <S.Callout>
            <S.Title>
              Bem vindos
              <S.Name>Javeiros</S.Name>
            </S.Title>
            <S.Text>
              Compartilhando um pouco do mundo Java e carreiras em tecnologia.
            </S.Text>
          </S.Callout>
          {
            message ? (
              <div className="row">
                <div className="col-12">
                  <div className={`alert alert-${message.status}`}>
                    {message.message}
                  </div>
                </div>
              </div>
            ) : (
              <div className="row align-items-center">
                <div className="col-4">
                </div>
              </div>
            )
          }
        </div>
      </div>
     </div>
    </>
  )
}

export default Newsletter
