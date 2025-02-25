import React, { useState } from "react";
import { Inter } from "@next/font/google";
import styles from "../styles/footer.module.scss";
import { InputText } from "primereact/inputtext";

import { Dropdown } from "primereact/dropdown";

import Link from "next/link";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button } from "primereact/button";

function Footer() {
  const currencies = [
    {
      name: "XAF",
      code: "XAF",
    },
    {
      name: "USA",
      code: "USA",
    },
    {
      name: "EU",
      code: "EU",
    },
  ];

  const languages = [
    {
      name: "ENG",
      code: "ENG",
    },
    {
      name: "FRE",
      code: "FRE",
    },
  ];

  const [value3, setValue3] = useState("");
  const [currency, setCurrency] = useState(currencies[0]);
  const [language, setLanguage] = useState(languages[0]);

  return (
    <>
      {/* footer */}
      <footer>
        <div
          className="px-8 py-6"
          style={{ backgroundColor: "var(--our-blue-25)" }}
        >
          <div className=" flex flex-column text-center">
            <div className="py-2  ">
              <h1 className={styles.title_sup}>
                UNIVERSAL{" "}
                <span style={{ color: "var(--our-blue-50)" }}>STORE</span>
              </h1>

              <p className={styles.title_sub}>
                Sign up now 20% off one item of your choice + free standard
                shipping
              </p>
            </div>
            <div className="">
              <span className="p-input-icon-right my-3">
                <i
                  className="pi pi-send"
                  style={{ color: "var(--our-blue-75)" }}
                />
                <InputText
                  style={{ height: "2.3rem", borderColor: "var(--base-30)" }}
                  value={value3}
                  onChange={(e) => setValue3(e.target.value)}
                  placeholder="Enter your email"
                />
              </span>
            </div>
            <div className="flex mt-5 gap-8 justify-content-between ">
              <div
                className={`${styles.list} flex flex-column align-items-start gap-3 `}
              >
                <h6 className="text-base">Company</h6>
                <div
                  style={{ color: "var(--base-70)" }}
                  className="flex flex-column align-items-start line-height-4 "
                >
                  <span>
                    <a>About Us</a>
                  </span>
                  <span>
                    <a>Our Store</a>
                  </span>
                  <span>
                    <a>Careers</a>
                  </span>
                  <span>
                    <a>Blog</a>
                  </span>
                </div>
              </div>
              <div className="flex flex-column align-items-start gap-3">
                <h6 className="text-base">Patners</h6>
                <div
                  style={{ color: "var(--base-70)" }}
                  className="flex flex-column align-items-start line-height-4 "
                >
                  <span>
                    <a>Home</a>
                  </span>
                  <span>
                    <a>Affiliate Program</a>
                  </span>
                  <span>
                    <a>FAQ</a>
                  </span>
                  <span>
                    <a>Get Advertise</a>
                  </span>
                  <span>
                    <a>Vendor Database</a>
                  </span>
                  <span>
                    <a>Database</a>
                  </span>
                </div>
              </div>
              <div className={`flex flex-column align-items-start gap-3 `}>
                <h6 className="text-base">How to Buy</h6>
                <div
                  style={{ color: "var(--base-70)" }}
                  className="flex align-items-start flex-column line-height-4"
                >
                  <span>
                    <a>Making Payments</a>
                  </span>
                  <span>
                    <a>Delivery Options</a>
                  </span>
                  <span>
                    <a>Buyer Protection</a>
                  </span>
                  <span>
                    <a>Get New User Guide</a>
                  </span>
                </div>
              </div>
              <div className={`flex flex-column align-items-start gap-3 `}>
                <h6 className="text-base">Help</h6>
                <div
                  style={{ color: "var(--base-70)" }}
                  className="flex flex-column align-items-start line-height-4"
                >
                  <span>
                    <a>Contacts Us</a>
                  </span>
                  <span>
                    <a>FAQ</a>
                  </span>
                  <span>
                    <a>Privacy Policy</a>
                  </span>
                </div>
              </div>
              <div className={` flex flex-column gap-3 align-items-start `}>
                <h6 className="text-base">Social</h6>
                <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                  <div
                    style={{ color: "var(--base-70)" }}
                    className="list-unstyled list-inline flex line-height-3  flex-column social text-center"
                  >
                    <span>
                      <a className="flex">
                        <i className="bi bi-facebook mr-3 text-xl "></i>
                        <span>Facebook</span>
                      </a>
                    </span>
                    <span className="">
                      <a className="flex">
                        <i className="bi bi-twitter mr-3 text-xl "></i>
                        <span>Twitter</span>
                      </a>
                    </span>
                    <span className="list-inline-item">
                      <a className="flex">
                        <i className="bi bi-instagram mr-3 text-xl "></i>
                        Instagram
                      </a>
                    </span>
                    <span className="list-inline-item">
                      <a className="flex">
                        <i className="bi bi-linkedin mr-3 text-xl "></i>
                        LinkedIn
                      </a>
                    </span>
                    <span className="list-inline-item">
                      <a className="flex">
                        <i className="bi bi-google mr-3 text-xl "></i>
                        Google
                      </a>
                    </span>
                    <span className="list-inline-item">
                      <a className="flex">
                        <i className="bi bi-youtube mr-3 text-xl "></i>
                        Youtube
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Currency, Language and copyright section  */}

        <div
          style={{ color: "var(--base-50)" }}
          className="px-7 text-base flex h-7rem justify-content-between align-items-center"
        >
          <div className="flex gap-3 col-4">
            <Dropdown
              options={currencies}
              value={currency}
              optionLabel="name"
              onChange={(e) => setCurrency(e.target.value)}
            />
            <Dropdown
              options={languages}
              value={language}
              optionLabel="name"
              onChange={(e) => setLanguage(e.target.value)}
            />
          </div>
          <div className="col-4 text-center">
            <p>
              hello@forpeople.studio +2 800 089 45-34 3522 I-75, Business Spur
              Sault Sainte Marie, MI, 49783
            </p>
          </div>
          <div className="col-4 text-right">© 2022 Masters 1 students</div>
        </div>

        {/* payment section and top button */}
        <hr style={{ borderColor: "var(--base-05)" }} className="mx-5" />
        <div className={`${styles.payment} my-4 px-7 `}>
          <div style={{ color: "var(--base-50)" }} className="card-payement">
            <i className="bi bi-paypal text-4xl "></i>
            <span className="text-4xl font-bold">Paypal</span>
          </div>
          <span className="flex align-items-center gap-3">
            <label htmlFor="top-action" className="text-base">
              Top
            </label>
            <Button
              icon="pi pi-chevron-up"
              className="p-button-outlined p-button-rounded "
            />
          </span>
        </div>
      </footer>
      {/* footer */}
    </>
  );
}

export default Footer;
