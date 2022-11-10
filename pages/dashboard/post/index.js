import React, { useEffect, useState } from 'react'
import EditButton from '../../../components/dashboard/button/EditButton'
import {
  ListCol,
  ListHeader,
} from '../../../components/dashboard/ListColWithHeader'
import TopHeader from '../../../components/dashboard/TopHeader'
import DeleteButton from '../../../components/dashboard/button/DeleteButton'
import { useGetData } from '../../../hooks/DataApi'

export default function Add() {
  const [list, setList] = useState()

  const { data, refetch } = useGetData('blogs', '/blogs')
  useEffect(() => {
    setList(data?.data)
  }, [data])

  return (
    <div className="card w-full">
      <TopHeader title="Blogs List" btn="Save" path="/dashboard/post/addBlog" />

      <div className="list-wrapper">
        <div className="md:grid grid-cols-2 list-header">
          <ListHeader label="Title" />
          {/* <ListHeader label="description" /> */}
          <ListHeader label="" />
        </div>
        {list?.length > 0 &&
          list.map((item) => (
            <div
              key={item.blogId}
              className="grid grid-cols-1 md:grid-cols-2 list-body"
            >
              <ListCol label="Title :" value={item.title} />
              <div className="flex justify-end space-x-2">
                <EditButton path={`/dashboard/post/edit/${item.blogId}`} />
                <DeleteButton path={`/blogs/${item.blogId}`} action={refetch} />
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
