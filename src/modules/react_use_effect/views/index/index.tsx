import React, { useEffect, useState } from 'react'

type DataType = {
  name?: 'string'
}

function usePageData(page: number, url: string) {
  const [data, setData] = useState<DataType>({})

  useEffect(() => {
    App.request({
      url,
      data: {
        page,
      },
      method: 'GET',
    }).then((r: any) => {
      setData(r)
    })
    return () => {
      console.log('unmount')
    }
  }, [page])

  return data
}
const View = () => {
  const [page, setPage] = useState(1)
  const data = usePageData(page, 'login')
  console.log(data, page, '渲染')
  return (
    <>
      <button
        onClick={() => {
          setPage(page + 1)
        }}
      >
        下一页
      </button>
      <div>
        {data.name}
        {page}
      </div>
    </>
  )
}

export default View
