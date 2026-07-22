import WorksClient from "./WorksClient";
import { getWorks } from "../../src/lib/actions";

export default async function WorksPage() {
  const initialWorks = await getWorks();
  return <WorksClient initialWorks={initialWorks as any} />;
}