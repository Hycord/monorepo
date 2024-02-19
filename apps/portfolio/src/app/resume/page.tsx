import { redirect } from "next/navigation";

function Page() {
  return redirect(
    "https://docs.google.com/document/d/e/2PACX-1vTK4SYMfU_B462PUlRbApZBZyqtNp7GXoAivCXRREImwPe4pAhud3hix-doU4gRtlsM5Xl_DYddsth5/pub"
  );
}

export default Page;
