import React, { useEffect, useState, Fragment } from 'react'
import EditButton from '../../../components/dashboard/button/EditButton'
import {
  ListCol,
  ListHeader,
} from '../../../components/dashboard/ListColWithHeader'
import TopHeader from '../../../components/dashboard/TopHeader'
import { useGetData } from '../../../hooks/DataApi'
import DeleteButton from '../../../components/dashboard/button/DeleteButton'

export default function Add() {
  const [list, setList] = useState()

  const { data, refetch } = useGetData('achievement', `/achievement`)

  useEffect(() => {
    setList(data?.data)
  }, [data])

  return (
    <div className="card w-full">
      <TopHeader
        title="achievement List"
        btn="Save"
        path="/dashboard/achievement/addAchievement"
      />

      <div className="list-wrapper">
        <div className="md:grid grid-cols-3 list-header">
          <ListHeader label="Title" />
          <ListHeader label="Description" />
          <ListHeader label="" />
        </div>
        {list?.length > 0 &&
          list.map((item) => (
            <div
              key={item.achievementId}
              className="grid grid-cols-1 md:grid-cols-3 list-body"
            >
              <ListCol label="Title :" value={item.title} />
              <ListCol label="Description :" value={item.description} />
              <div>
                <div className="flex justify-end space-x-2">
                  <EditButton
                    path={`/dashboard/achievement/edit/${item.achievementId}`}
                  />
                  <DeleteButton
                    path={`/achievement/${item.achievementId}`}
                    action={refetch}
                  />
                </div>
              </div>
            </div>
          ))}

        <div className="list-footer">
          <div className="col-span-10"></div>
          <div className="flex justify-center">
            <span className="font-semibold">TOTAL : {list?.length}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
