import styles from "/components/header.module.css";
import Link from "next/link";

export default function Header()
{
    const headLinks = [
        {
            name: "Movies",
            url: "/"
        }
    ];

    return(
        <>
            <header className={styles.header}>
                <ul>
                    {headLinks.map(({name, url}) => (
                        <li>
                            <Link href={url} className="header-link">
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </header>
        </>
    );
}