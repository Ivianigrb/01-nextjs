/*jika di html kita menggunakan a href untuk menghubungkan antar halaman atau link maka di nextjs kita menggunakan tag <Link></Link>
 agar ketika kita mengklik link tersebut maka asset yang berada di website kita tidak ke render semuanya tapi hanya merender bagian halaman yang akan kita tuju saja*/
import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>TESS</h1>
    <br />
    <Link href="/posts">POSTING PAGE</Link>
    <br />
    <Link href="/albums">ALBUM PAGE</Link>
    </>
  )
}
