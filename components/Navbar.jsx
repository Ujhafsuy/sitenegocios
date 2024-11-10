import Link from "next/link"

export default function Navbar(){
    return (
        <div className="navbar-main">
        <nav className="navbar-content">
          <h1><Link href="/">Seu logo</Link></h1>
          <ul className="nav-list">
            <li><Link href="/">Sobre nós</Link></li>
            <li><Link href="/">Fazer orçamento</Link></li>
            <li><Link href="/registro">Produtos</Link></li>
            <li><Link href="/login">Contatos</Link></li>
          </ul>
        </nav>
      </div>
    )
}