import { redirect } from "next/navigation";

async function shouldRedirect() {
  redirect("/");
}

export default async function ShouldRedirect() {
  await shouldRedirect();

  return <h1>Should never show</h1>;
}
