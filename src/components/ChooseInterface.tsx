import Link from "next/link";

export default function ChooseInterface() {
  return (
    <main>
      <h2>Hello!</h2>
      <ul>
        <li>
          <Link href={"/gui"}>GUI</Link>
        </li>
        {/* <li> */}
        {/*   <Link href={"/tui"}>TUI</Link> */}
        {/* </li> */}
        {/* <li> */}
        {/*   <Link href={"/cli"}>CLI</Link> */}
        {/* </li> */}
      </ul>
    </main>
  );
}
