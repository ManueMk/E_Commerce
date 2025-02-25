import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import data from "../utils/flasdeals.json";
import Image from "next/image";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import Link from "next/link";
import { useCountdown } from "../hooks/countDown";

function Flashdeals({ targetDate, cart }: any) {
  const [flash, setFlash] = useState<any[]>([]);

  useEffect(() => {
    fetch("backend_api", {
      method: "GET",
    })
      .then((result) => result.json())
      // get the user response(in this case token) from the backend and save to local storage to use
      .then((response) => {
        console.log("user", response);
        // set this item to the local storage for future usage
        //  you can set flash deals like this
        setFlash(response);
      })
      .catch((err) => console.log("err", err));
  }, []);
  const [hours, minutes, seconds] = useCountdown(targetDate);
  const cardHeader = (cardInfo: any) => {
    return (
      <>
        <div className="flex">
          <Tag
            style={{ backgroundColor: "var(--our-red-75)" }}
            className="mt-2 ml-3 w-3rem"
            value="Sale"
          ></Tag>
        </div>
        <div className="pt-5 px-5">
          <Image
            alt="card-image"
            height={160}
            width={165}
            src={cardInfo.imageURL}
          />
        </div>
      </>
    );
  };

  const cardFooter = (cardInfo: any) => {
    return (
      <>
        <div className="flex align-items-center text-xs  justify-content-between">
          <div>
            <span className="" style={{ textDecoration: "line-through" }}>
              {" "}
              {cardInfo.oldPrice}{" "}
            </span>{" "}
            <span className="font-bold">{cardInfo.newPrice}</span>
          </div>
          <Link
            href={`/products/${cardInfo.id}`}
            className=" p-button p-button-text text-xs"
            style={{ borderLeft: "1px solid var(--base-15)", borderRadius: 0 }}
          >
            Shop Now
          </Link>
        </div>
      </>
    );
  };
  return (
    <section className="py-5 px-8">
      <center>
        <h1 className="text-5xl ">FLASH DEALS</h1>
      </center>
      <article className="grid mt-8">
        <div className="grid align-items-center justify-content-center gap-3 col-9 ">
          {data.map((d, i) => {
            return (
              <Card
                key={i}
                style={{
                  height: "23.13rem",
                  width: "16rem",
                }}
                header={cardHeader(d)}
                className=" text-center"
                footer={cardFooter(d)}
              >
                <p className="font-bold"> {d.title} </p>
              </Card>
            );
          })}
        </div>
        <div className="flex grid gap-3 col-3   ">
          <Card
            className=""
            style={{
              height: "23.13rem",
              width: "16rem",
              backgroundColor: "var(--our-red-75)",
            }}
          >
            <div className="flex flex-column text-white text-center gap-3 justify-content-center">
              <p className="font-bold text-sm ">DEAL OF THE DAY !</p>
              <div className="flex justify-content-center gap-2">
                <span>
                  <p className="font-bold">{hours}</p>
                  <p className="font-light text-xs">hours</p>
                </span>{" "}
                :
                <span>
                  <p className="font-bold">{minutes}</p>
                  <p className="font-light text-xs">minutes</p>
                </span>{" "}
                :
                <span>
                  <p className="font-bold">{seconds}</p>
                  <p className="font-light text-xs">seconds</p>
                </span>
              </div>
              <center>
                <Image
                  alt="day-deal-picture"
                  src="/images/headset.png"
                  height={160}
                  width={112}
                />
              </center>
              <p className="font-bold">Beats by Dr. Beats Solo3</p>
              <div className="text-xs text-center  ">
                <span className="" style={{ textDecoration: "line-through" }}>
                  XAF 500,000
                </span>{" "}
                <span className="font-bold">XAF 300,000 </span>
              </div>
            </div>
          </Card>

          <Card
            style={{
              height: "23.13rem",
              width: "16rem",
              backgroundImage: "url(" + "/images/applewatch.png" + ")",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="flex align-items-end"
          >
            <div className="flex flex-column align-items-center text-center  text-white gap-4">
              <p className="font-bold">Apple Watch Series 3 38mm Smartwatch</p>
              <div className="text-xs  ">
                <span className="" style={{ textDecoration: "line-through" }}>
                  XAF 500,000
                </span>{" "}
                <span className="font-bold">XAF 300,000 </span>
              </div>
              <Button
                className="w-10rem text-sm h-3rem p-button-rounded"
                style={{
                  backgroundColor: "var(--our-blue-75)",
                }}
                label="Shop Now"
                icon="pi pi-shopping-cart"
              />
            </div>
          </Card>
        </div>
      </article>
    </section>
  );
}

export default Flashdeals;
