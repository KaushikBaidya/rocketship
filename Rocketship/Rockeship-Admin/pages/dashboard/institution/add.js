import TopHeader from "../../../components/admin/dashboard/TopHeader";
import { usePostData } from "../../../hooks/DataApi";
import InstitutionForm from "../../../components/admin/forms/InstitutionForm";

const Add = () => {
  const defaultValues = {
    institutionId: "",
    name: "",
    image: "",
  };

  const { mutateAsync } = usePostData();

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader
        title="Add institution"
        btn="Return"
        path="/dashboard/institution"
      />
      <InstitutionForm
        defaultValues={defaultValues}
        action={() => {}}
        btnText="Save"
        path="/institution/createInstitution"
        returnPath="/dashboard/institution"
        mutateAsync={mutateAsync}
      />
    </div>
  );
};

export default Add;
