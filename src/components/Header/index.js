import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import links from './links'

const Header = () => {
  const router = useRouter()
  
  const [data, setData] = useState('')
  
  const handleSearchClick = (q) => {
    if (q) {
      window.location = '/search?q=' + q
    }
  }

  const handleKeyPress = (event) => {
    // This is perfectly safe in react, it correctly detect the keys
    if(event.key == 'Enter') {
      event.preventDefault();
      handleSearchClick(data)
    }
   }

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
        <Link href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <Image src={'/assets/icons/deploy-de-sexta-coursive.png'} alt="Minha foto de avatar" width={150} height={41} />
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          {links.map((link, i) => (
            <li key={i}>
              <Link 
                href={link.url}
                className={router.pathname === link.url ? 'nav-link px-2 link-secondary' : 'nav-link px-2 link-dark'}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <form className="col-md-3 d-none d-md-block text-end" role="search">
          <input 
            type="search" 
            className="form-control" 
            placeholder="Explorar..." 
            aria-label="Search" 
            onChange={(ev) => setData(ev.target.value)}
            onKeyDown={handleKeyPress}
          />
        </form>
      </header>
    </div>
  )
}

export default Header
