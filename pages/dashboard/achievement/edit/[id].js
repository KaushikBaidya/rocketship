import React from 'react'
import { useRouter } from 'next/router'
import TopHeader from '../../../../components/dashboard/TopHeader'
import { useGetData, usePutData } from '../../../../hooks/DataApi'
import AchievementFrom from '../../../../components/forms/achievementFrom'
import { Loader } from '../../../../components/Loader'
import { Error } from '../../../../components/Error'

function Details() {
  const router = useRouter()
  const { id } = router.query
  const { mutateAsync } = usePutData()

  const { data: list, error, isLoading, isError, refetch } = useGetData(
    'achievement',
    `/achievement/${id}`,
  )

  if (isLoading) return <Loader />

  if (isError) return <Error message={error.message} />

  const data = list.data[0]

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader
        title="Edit achievement Post"
        btn="Return"
        path="/dashboard/achievement"
      />
      {data && (
        <AchievementFrom
          defaultValues={{
            achievementId: data.achievementId,
            title: data.title,
            description: data.description,
          }}
          action={refetch}
          btnText="Update"
          mutateAsync={mutateAsync}
          path={`achievement/${id}`}
          returnPath="/dashboard/achievement"
        />
      )}
    </div>
  )
}

export default Details
