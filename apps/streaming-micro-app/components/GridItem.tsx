import { Suspense } from "react";
import Loading from "./Loading";

type Props = {
  backgroundColor: string;
  text: string;
  delay?: number;
};

export default function GridItem({ backgroundColor, text, delay }: Props) {
  return (
    <div className="flex items-center justify-center">
      <Suspense fallback={<Loading />}>
        <DelayedContent
          backgroundColor={backgroundColor}
          text={text}
          delay={delay}
        />
      </Suspense>
    </div>
  );
}

async function DelayedContent({ backgroundColor, text, delay = 0 }: Props) {
  await new Promise((resolve) => setTimeout(resolve, delay));

  return (
    <div
      className={`flex items-center justify-center h-60 w-60 p-4 text-black rounded-2xl ${backgroundColor}`}
    >
      {text}
    </div>
  );
}
