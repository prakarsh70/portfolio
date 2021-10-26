import Link from 'next/link'

const Navbar = () => {
    return ( <nav>
        <h1>portfolio</h1>
        <Link href="/"><a>home</a></Link>
        <Link href="/about"><a>about</a></Link>
        <Link href="/contact"><a>contact</a></Link>
    </nav> );
}
 
export default Navbar;