import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import data from "../../utils/flasdeals.json";
import { Tag } from "primereact/tag";
import Image from "next/image";
import Link from "next/link";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import Footer from "../../components/Footer";
import { Toast } from "primereact/toast";
import { useRouter } from "next/router";

function Profile() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("ecommerce_user");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const [visible, setVisible] = useState<boolean>(false);
  const toast = useRef(null);
  const router = useRouter();
  const accept = () => {
    toast.current.show({
      severity: "info",
      summary: "Confirmed",
      detail: "You have Deleted the product",
      life: 3000,
    });
  };

  const reject = () => {
    toast.current.show({
      severity: "warn",
      summary: "Rejected",
      detail: "You have Not Deleted",
      life: 3000,
    });
  };

  const confirm = () => {
    confirmDialog({
      message: "Are you sure you want to proceed?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept,
      reject,
    });
  };
  const cardHeader = (cardInfo: any) => {
    return (
      <>
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
          <Button
            label="Delete"
            onClick={confirm}
            className="p-button-outlined p-button-danger h-2rem"
          />
          <Link
            href={`/products/${cardInfo.id}`}
            className=" p-button p-button-text text-xs"
            style={{ borderLeft: "1px solid var(--base-15)", borderRadius: 0 }}
          >
            View Product
          </Link>
        </div>
      </>
    );
  };
  const items = [
    {
      label: "Products",
      icon: "pi pi-fw pi-briefcase",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-plus",
          command: () => {
            router.push("/customer/newProduct");
          },
        },
      ],
    },
  ];
  const end = <InputText className="h-2rem" placeholder="Search" type="text" />;

  return (
    <>
      {isAuthenticated ? (
        <div style={{ height: "100vh" }}>
          <Toast ref={toast} />
          <Header />
          <ConfirmDialog />

          <Menubar model={items} className="px-7" end={end} />
          <section className="px-8 py-5">
            <p className="font-bold text-3xl mb-5">Products Created</p>
            <div className=" grid align-items-center justify-content-center gap-3 ">
              {data.map((d, i) => {
                return (
                  <Card
                    key={i}
                    style={{
                      height: "23.13rem",
                      width: "16rem",
                    }}
                    header={cardHeader(d)}
                    className=" text-center col-3 "
                    footer={cardFooter(d)}
                  >
                    <p className="font-bold"> {d.title} </p>
                  </Card>
                );
              })}
            </div>
          </section>
          <Footer />
        </div>
      ) : (
        <>You are not logged in </>
      )}
    </>
  );
}

export default Profile;
