import React, { useState, useContext } from "react";
import Context from "../store/utils/context";
import { Button } from "primereact/button";
import Image from "next/image";
import Link from "next/link";
import SideBar from "./Sidebar";

function Header(props: any) {
  const [visibleSidebar, setVisibleSidebar] = useState(false);
  const { cartItems } = useContext(Context);
  const length = cartItems.length;
  console.log("props", props);

  return (
    <header
      className="flex px-8 align-items-center text-sm justify-content-between  "
      style={{
        color: `var(--base-85)`,
        height: "4rem",
      }}
    >
      <SideBar
        cartItems={props.cartItems}
        visible={visibleSidebar}
        setVisible={setVisibleSidebar}
      />
      <div>
        <div className="flex align-items-center justify-content-start">
          <div className=" mr-5">
            <i className="pi pi-phone mr-3 "></i>
            <span>(+237) 777 777 777</span>
          </div>
          <span
            className=" border-circle mr-2"
            style={{
              backgroundColor: `var(--our-blue-75)`,
              height: `7px`,
              width: `7px`,
            }}
          ></span>{" "}
          <span>
            <Link
              href=""
              className="p-button-text"
              style={{ color: `var(--our-red-85)` }}
            >
              Live Chat
            </Link>
          </span>
        </div>
      </div>
      <div>
        <Link href="/">
          <Image src={"/images/logo.png"} height={40} width={239} alt="logo" />
        </Link>
      </div>
      <div className="grid align-items-center gap-5">
        <div className="grid align-items-center">
          <span>
            {" "}
            <Link
              href=""
              style={{ color: `var(--our-red-85)` }}
              className="p-button-text"
            >
              <i className="pi pi-heart mr-2"></i>
              Wish List
            </Link>
          </span>
        </div>
        <div className="grid align-items-center">
          <span>
            {" "}
            <Link
              href="signin"
              style={{ color: `var(--our-red-85)` }}
              className="p-button-text"
            >
              <i className="pi pi-user mr-2"></i>
              Sign in
            </Link>
          </span>
        </div>
        <div className="grid align-items-center">
          <span>
            {" "}
            <Button
              icon="pi pi-shopping-cart"
              iconPos="left"
              style={{ color: `var(--our-red-85)` }}
              className="p-button-text"
              badge={`${length}`}
              badgeClassName="cart-badge"
              label="Cart"
              onClick={(e) => setVisibleSidebar(true)}
            />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
