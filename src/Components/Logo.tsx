import HederaLogo from "../assets/HederaAILogo.png";

export default function Logo() {
  return (
    <div className={`h-12 w-auto rounded-sm`}>
      <img src={HederaLogo} alt="Logo" className=" h-12 w-20 " />
    </div>
  );
}
