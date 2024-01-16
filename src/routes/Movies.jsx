import React from 'react'
import Layout from '../components/Layout'

export default function Movies() {
  return (
    <>
      <Layout>
       <div className="w-full flex justify-center py-16">
        <div className="w-[1000px] ">
          {/* item */}
          <div className="w-[180px] h-[340px] rounded-lg shadow-lg overflow-hidden">
            {/* 위: 그림 */}
            <div className="w-full h-[250px] ">
              <img className="w-full h-full object-cover" src = "https://plus.unsplash.com/premium_photo-1664640458482-23df72d8b882?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            {/* 아래: 내용 */}
            <div className="w-full h-[90px] ">
              <h2>타이틀</h2>
              <p>2024-01-16</p>
            </div>
          </div>
        </div>
       </div>
      </Layout>
    </>
  )
}
