import Nav from "react-bootstrap/Nav";
import Image from "next/image";
import crave from "../../public/crave.svg";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = ({ signOutCallback }) => {
  function handleSignout() {
    signOutCallback(false);
  }
  return (
    <div>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Link href="/" className={styles.logo}>
            <Image src={crave} alt="crave logo" width={100} height={40} />
          </Link>
        </Nav.Item>
        <Nav.Link>
          <Link href="/shows">TV Shows</Link>
        </Nav.Link>
        <Nav.Link>
          <Link href="/movies">Movies</Link>
        </Nav.Link>
        <Nav.Item>
          <Nav.Link>My Crave</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>On Air</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Gift Crave</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleSignout}>Sign Out</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
export default Header;
