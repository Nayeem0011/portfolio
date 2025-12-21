import Body from "./component/Body";
import LenisProvider from "./LenisProvider";

export default function Home() {
  return (
    <>
      <LenisProvider>
      <Body />
    </LenisProvider>
    </>
  );
}
