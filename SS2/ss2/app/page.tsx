import BaseButton from "@/components/BaseButton";
import BaseCart from "@/components/BaseCart";
import BT1 from "@/components/BT1";
import BT2 from "@/components/BT2";
import BT3 from "@/components/BT3";
import BT4 from "@/components/BT4";
import BT5 from "@/components/BT5";
import BT6 from "@/components/BT6";
import Button from "@/components/BT7";
import BT8 from "@/components/BT8";
import BT9 from "@/components/BT9";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <BT1 />
      <BT2 />
      <BT3 />
      <BT4/>
      <BT5/>
      <BT6/>
      <BT9/>
      <Button type="primary">Thêm mới</Button>
      <BT8/>
      <BaseCart
        content="Áo phông nam mặt mè"
        title="Áo phông nam"
        image="https://th.bing.com/th/id/OIP.7ZxepcJaDNoUZqs3JZPxKwHaHa?w=206&h=207&c=7&r=0&o=5&pid=1.7"
      >
        <BaseButton children="Thêm vào giỏ hàng" type="primary" />
      </BaseCart>
    </>
  );
}
