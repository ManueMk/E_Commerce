import React, { useState, useRef, useEffect } from "react";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Menubar } from "primereact/menubar";
import { useRouter } from "next/router";
import { Toast } from "primereact/toast";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { InputText } from "primereact/inputtext";
/**
 *
 * @returns
 *
 * Hello Dekel use the useState to strack the various fields and then use the useEffect to make the post request
 * like this
 *
 * useEffect(() => {
 * fetch("the backend url", {method: "POST", body: {here you send the object from the form}})
 * },[ this is an empty dependency array. having nothing inside means that thsi effect will run only on initial render of the component ])
 * this exact same theory applies to the user creation and signin
 */
function NewProduct() {
  const toast = useRef(null);
  const router = useRouter();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("ecommerce_user");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

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

  return (
    <>
      {isAuthenticated ? (
        <div>
          {" "}
          <div style={{ height: "100vh" }}>
            <Toast ref={toast} />
            <Header />
            <ConfirmDialog />

            <Menubar model={items} className="px-7" />

            <Link
              href={"customer/profile"}
              className="p-button my-5 mx-8 p-button-text p-button-rounded "
            >
              {" "}
              Back{" "}
            </Link>
            <p className="font-bold px-8 text-3xl"> Create A new Product </p>
            <section className="h-30rem mx-8 py-3 "></section>
            <Footer />
          </div>{" "}
        </div>
      ) : (
        <> Your are not authenticated</>
      )}
    </>
  );
}

export default NewProduct;
