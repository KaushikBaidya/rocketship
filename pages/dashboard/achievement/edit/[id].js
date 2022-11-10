import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import TopHeader from '../../../../components/dashboard/TopHeader'
import { useGetData, usePutData } from '../../../../hooks/DataApi'
import AchievementFrom from '../../../../components/forms/achievementFrom'
import { PuffLoading } from '../../../../components/Loader'

function Details() {
  const router = useRouter()
  const { id } = router.query
  console.log(id)
  const [isLoading, setLoading] = useState(true)
  const { mutateAsync } = usePutData()

  const { data, refetch } = useGetData('achievement', `/achievement/${id}`)
  const [list, setList] = useState()

  useEffect(() => {
    setList(data?.data[0])
    setLoading(false)
  }, [data])
  console.log(list)

  if (isLoading) return <PuffLoading />
  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader
        title="Edit achievement Post"
        btn="Return"
        path="/dashboard/achievement"
      />
      {list && (
        <AchievementFrom
          defaultValues={{
            achievementId: list.achievementId,
            title: list.title,
            description: list.description,
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
