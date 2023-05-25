import { PaperLayout } from "@/@components";
import { getMyAccount } from "@/api/treasure";
import { useQuery } from "react-query";

const SelectMyAccount = () => {
  const { data: myAccount, isError, error } = useQuery(["myAccount"], getMyAccount);

  console.log(myAccount);

  if (isError) {
    console.log({ error });
  } else {
    console.log(myAccount);
  }

  return (
    <>
      <PaperLayout>
        <h1>투자</h1>
        {/* {myAccount?.map((i: any) => console.log(i))} */}
      </PaperLayout>
    </>
  );
};

export default SelectMyAccount;
