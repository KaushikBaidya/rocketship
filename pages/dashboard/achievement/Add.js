import TopHeader from '../../../components/dashboard/TopHeader'
import AchievementFrom from '../../../components/forms/achievementFrom'
// import { usePostData } from "../../../hooks/DataApi";

const Add = () => {
  const defaultValues = {
    achievementId: '',
    title: '',
    description: '',
  }

  // const { mutateAsync } = usePostData();

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader
        title="Add New achievement"
        btn="Return"
        path="/dashboard/achievement"
      />
      <AchievementFrom
        defaultValues={defaultValues}
        action={() => {}}
        btnText="Save"
        path="/achievement/createAchievement"
        returnPath="/dashboard/achievement"
        // mutateAsync={mutateAsync}
      />
    </div>
  )
}

export default Add
