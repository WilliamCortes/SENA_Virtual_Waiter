import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className="device">
        <div className="container">
          {/* <!-- general header with hamburger menu --> */}

          <header id="header"></header>

          {/* <!-- This is the main content in the view --> */}

          <section className="main-content">
            <div className="home-container">
              {/* <!-- This is the basic card with link --> */}
              <a className="home-card" href="table.html">
                <img src="../assets/images/Table.png" alt="Table" />
              </a>
              {/* <!-- This is the basic card with link --> */}
              <a className="home-card" href="order.html">
                <img src="../assets/images/Restaurant.png" alt="Restaurant" />
              </a>
              {/* <!-- This is the basic card with link --> */}
              <a className="home-card" href="invoice.html">
                <img src="../assets/images/Invoice.png" alt="Invoice" />
              </a>
              {/* <!-- This is the basic card with link --> */}
              <a className="home-card" href="menu.html">
                <img src="../assets/images/BeefBurger.png" alt="BeefBurger" />
              </a>
              {/* <!-- This is the basic card with link --> */}
              <a className="home-card" href="login.html">
                <img src="../assets/images/User.png" alt="User" />
              </a>

              {/* <!-- This is the basic card with link --> */}
              <a className="home-card" href="signUp.html">
                <img src="../assets/images/AddUser.png" alt="AddUser" />
              </a>
            </div>
          </section>

          {/* <!-- general footer whit the tab-bar --> */}

          <footer id="tab-bar"></footer>

          {/* <!-- This is the container to menu drawer --> */}

          <aside id="menu-drawer-container"></aside>
        </div>
      </div>
    </main>
  );
}
