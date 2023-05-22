import { AccountLogData } from "./AccountLog";

type LogDetailProps = {
  log: AccountLogData;
};

function LogDetailContainer({ log }: LogDetailProps) {
  return (
    <div>
      <p>{log.detail}</p>
    </div>
  );
}

export default LogDetailContainer;
