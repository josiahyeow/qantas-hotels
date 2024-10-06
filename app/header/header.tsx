import Image from "next/image";
import qantasLogo from "./qantas-logo.png";

export function Header() {
  return (
    <div className="py-8">
      <Image src={qantasLogo} alt="qantas logo" width={200} />
    </div>
  );
}
