import React, { useState, useContext } from "react";
import Context from "../store/utils/context";

import { Sidebar } from "primereact/sidebar";

import Image from "next/image";
import { Button } from "primereact/button";

function SideBar(props: any) {
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart } =
    useContext(Context);
  const l = cartItems.length;
  let total = 0;
  cartItems.map((item: any) => {
    return (total = total + item.quantity * item.price);
  });
  return (
    <Sidebar
      fullScreen
      visible={props.visible}
      onHide={() => props.setVisible(false)}
      style={{ backgroundColor: "var(--base-05)" }}
    >
      <div className="border-round-md mx-auto w-9 h-5 bg-white">
        <div className="flex justify-content-center gap-5 ">
          <div
            className="font-bold"
            style={{ borderTop: "2px solid var(--our-blue-75)" }}
          >
            <p className="py-2">Cart</p>
          </div>
          <div>
            <p className="py-2">Customer Information</p>
          </div>
          <div>
            <p className="py-2">Shipping & Payment</p>
          </div>
          <div>
            <p className="py-2">Confirmation</p>
          </div>
        </div>
        <hr />
        <div
          className="flex flex-column gap-4 "
          style={{ padding: "3rem 8rem" }}
        >
          <p className="font-bold" style={{ color: "var(--base-90)" }}>
            Cart <span style={{ color: "var(--base-50)" }}> {l} </span>
          </p>{" "}
          <div
            className="border-round-md flex flex-column  w-12"
            style={{ backgroundColor: "var(--base-05)" }}
          >
            <div className="flex justify-content-between text-center  p-3">
              <div className="col-4 text-left">Item</div>
              <div className="col-2">Price</div>

              <div className="col-3">Quantity</div>

              <div className="col-1">Total</div>

              <div className="col-2">{""}</div>
            </div>
            <hr style={{ margin: "0" }} />
            {cartItems.map((ci: any) => {
              const itemTol = ci.newPrice * ci.quantity;
              return (
                <>
                  <div
                    key={ci.id}
                    className="flex justify-content-between p-3 align-items-center"
                  >
                    <div className="col-4 text-left flex gap-2 ">
                      <div
                        className="bg-white border-round-md flex align-items-center justify-content-center"
                        style={{ height: "60px", width: "60px" }}
                      >
                        <Image
                          src="/images/cata.png"
                          height={54}
                          width={38}
                          alt="product"
                        />
                      </div>
                      <div className="flex flex-column">
                        <p className=" text-sm font-bold"> {ci.title} </p>
                        <p className="text-sm">Color : Yellow</p>
                      </div>
                    </div>
                    <div className="col-2"> {ci.newPrice} </div>

                    <div className="col-2 flex justify-content-center  ">
                      <div
                        className=" flex w-8 h-2rem align-items-center "
                        style={{
                          border: "1px solid var(--base-50)",
                          borderRadius: "50px",
                        }}
                      >
                        <Button
                          icon="pi pi-minus"
                          style={{ color: "var(--base-50)" }}
                          className="p-button-sm p-button-text  p-button-rounded"
                          onClick={() => decrementQuantity(ci)}
                        />
                        <span> {ci.quantity} </span>
                        <Button
                          onClick={() => incrementQuantity(ci)}
                          icon="pi pi-plus"
                          style={{ color: "var(--base-50)" }}
                          className="p-button-sm p-button-text  p-button-rounded"
                        />
                      </div>
                    </div>

                    <div className="col-1">{itemTol}</div>

                    <div className="col-2 flex gap-3 justify-content-end">
                      <i className="pi pi-heart-fill"></i>
                      <i
                        className="pi pi-times"
                        onClick={() => removeFromCart(ci)}
                      ></i>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <hr className="mt-2" />
          <div className="flex align-items-center justify-content-between">
            <Button
              icon="pi pi-arrow-left"
              className="p-button-text"
              style={{ color: "var(--base-70)" }}
              label="Back to Shopping"
            />
            <div className="flex justify-content-start align-items-center gap-2 ">
              <p>
                Total Price: <span className="font-bold"> XAF {total} </span>
              </p>
              <Button
                icon="pi pi-arrow-right"
                iconPos="right"
                className="p-button-rounded px-3 h-2rem"
                style={{ backgroundColor: "var(--our-blue-100)" }}
                label="Continue"
              />
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}

export default SideBar;
