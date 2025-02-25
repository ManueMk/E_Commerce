import React from "react";
import Image from "next/image";
function Brands() {
  return (
    <div
      className="flex px-7 align-items-center h-6rem justify-content-between"
      style={{ backgroundColor: "var(--base-05)" }}
    >
      <Image alt="brand" src="/images/apple.png" height={90} width={139} />

      <Image
        alt="brand"
        src="/images/samsung-logo.png"
        height={90}
        width={139}
      />
      <Image alt="brand" src="/images/sony.png" height={90} width={139} />
      <Image alt="brand" src="/images/huawei.png" height={90} width={139} />
      <Image alt="brand" src="/images/meizu.png" height={90} width={139} />
    </div>
  );
}

export default Brands;
