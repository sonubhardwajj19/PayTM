import { PrismaClient } from "@repo/db";
const client = new PrismaClient();

export default function Home() {
  return (<>
    <div className="text-6xl"> 
      hello there
    </div>
  </>
  );
}
