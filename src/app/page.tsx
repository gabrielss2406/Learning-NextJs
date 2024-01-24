import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Principal</h1>
      <Link href="/pages/lists/produtos">VOLTAR</Link>
    </div>
  )
}