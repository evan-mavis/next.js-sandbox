import { Spinner } from "./ui/spinner";

export default function Loading({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Spinner />
      <p>{message}</p>
    </div>
  );
}
