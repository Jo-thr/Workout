import datas from "@data/datas";
import { Step } from "@components/Steps/Step";

export default function WarmupPage() {
  const data = datas.warmup;

  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        <Step tabs={data.works} title={data.name} />
      </div>
    </>
  );
}
