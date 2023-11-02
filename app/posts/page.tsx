//jika kita akan membuat halaman baru, di folder app kita harus membuat folder lagi dengan nama foldernya bebas dan di dalam folder tersebut kia buat 1 file page.tsx
// cara memanggil di browser tinggal kita cantumkan nama foldernya contoh kita pangggil halaman yang ini caranya ketikan di browser http://localhost:3000/posts

// untuk mencantumkan nama classnya pada div dibawah kita perlu mengimport file style css nya terlebih dahulu
import styles from "./postPage.module.css"

const   Posts = () => {
    return (
        // cara memanggil nama classnya
        <div className={styles.bgRed}>POSTINGAN PAGE</div>

        // atau kita bisa memberikan langsung stylenya di dalam classnamenya karena sudah ada tailwind. contoh:
        // <div className="bg-fuchsia-500">POSTINGAN PAGE</div>
        // <div className="bg-[tomato]">POSTINGAN PAGE</div>
        // <div className="bg-[#95b8d1]">POSTINGAN PAGE</div>
    )
}

export default Posts