import React from 'react'
import { Pagination } from 'antd';
const Paging = () => {
    return (
        <div className='paging'><Pagination defaultCurrent={1} total={50} /></div>
    )
}

export default Paging