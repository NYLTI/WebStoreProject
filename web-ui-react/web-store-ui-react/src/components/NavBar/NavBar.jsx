import "../../css/navbar.css"
import "../../css/searchbox.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";

function NavBar() {

    return (
        <div>
            <nav class="sticky navbar">
                <div class="brand  display__logo">
                    <a href="/" class="nav__link"> <span class="logo">Home</span></a>
                </div>
                {/* search box */}
                <div class="box">
                    <form name="search">
                        <input type="text" class="input" name="txt" placeholder="Search the store ..."></input>
                        <i><FontAwesomeIcon icon={faSearch}/></i>
                    </form>
                </div>

                <div class="nav">
                    <ul class="nav__items">
                        <li class="nav__item"><a href="/login" class="nav__link">Profile</a></li>
                        <li class="nav__item"><a href="/orders" class="nav__link">Orders</a></li>
                        <li class="nav__item"><a href="/cart" class="nav__link">Cart</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default NavBar