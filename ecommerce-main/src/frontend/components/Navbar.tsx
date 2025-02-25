import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import Link from "next/link";
import { useRouter } from "next/router";
import { InputText } from "primereact/inputtext";

function Navbar(props: any) {
  console.log("props >>>>>>", props);

  const router = useRouter();
  const [search, setSearch] = useState("");
  const [displaySearch, setDisplaySearch] = useState(false);
  const items = [
    {
      label: "WOMEN",
      command: () => {
        router.push("/products");
      },
    },
    {
      label: "MEN",
      command: () => {
        router.push("/products");
      },
    },
    {
      label: "KIDS",
      command: () => {
        router.push("/products");
      },
    },
    // {
    //   label: "GOODS",
    //   command: () => {
    //     router.push("/products");
    //   },
    // },
    {
      label: "ACCESSORIES",
      command: () => {
        router.push("/products");
      },
    },
    {
      label: "BRANDS",
      command: () => {
        router.push("/products");
      },
    },
    {
      label: "BLOGS",
      command: () => {
        router.push("/products");
      },
    },
  ];
  return (
    <div>
      <Menubar
        className="px-8  "
        model={items}
        end={
          <div className="flex align-items-center">
            {displaySearch && (
              <InputText
                value={search}
                className="h-2rem mr-3 scalein animation-duration-500"
                style={{ borderColor: "var(--base-15)" }}
                onChange={(e) => {
                  setSearch(e.target.value);
                  //  check if we are in the products page and if yes filter products directly on the page
                }}
              />
            )}
            <Button
              icon={`pi ${displaySearch ? "pi-send" : " pi-search"}`}
              onClick={() => {
                displaySearch
                  ? // This is where we will do the search
                    // console.log(search)
                    setSearch("")
                  : // setDisplaySearch(false);

                    setDisplaySearch(true);
              }}
              style={{
                backgroundColor: "inherit",
                color: "var(--base-50)",
                borderLeft: "1px solid var(--base-30)",
                borderRadius: "0",
              }}
              tooltip={`${displaySearch ? "Request" : "Search Product"}`}
            />
            {displaySearch && (
              <Button
                icon="pi pi-times"
                tooltip="Cancel"
                onClick={() => setDisplaySearch(false)}
                style={{
                  backgroundColor: "inherit",
                  color: "var(--base-50)",

                  // borderLeft: "1px solid var(--base-30)",
                  borderRadius: "0",
                }}
              />
            )}
          </div>
        }
        start={
          <Button
            icon="pi pi-align-left"
            style={{
              backgroundColor: "inherit",
              color: "var(--base-50)",
              borderRight: "1px solid var(--base-30)",
              borderRadius: "0",
            }}
          />
        }
      />
    </div>
  );
}

export default Navbar;
