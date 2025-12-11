import { Client } from "./client";
import { Suspense } from "react";

const page = async () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Client />
    </Suspense>
  );
};

export default page;
