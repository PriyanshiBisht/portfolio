import React from 'react'

export default function Education() {
  return (
    <section className="py-20 px-6" id="education">

      <div className="bg-slate-800 rounded-xl border border-slate-700 max-w-2xl mx-auto mt-10 p-6">

        <div className='text-center text-4xl font-bold pt-5 text-white'>
          <h2>Education</h2>
        </div>

        {/* Timeline wrapper */}
        <div className="relative mt-10 ml-4">

        

          <div className="flex flex-col gap-10">

           
            <div className="relative pl-8">
          
              <div className="border-2 border-slate-700 rounded-lg px-4 py-3 bg-slate-900">
                <div className='inline-block bg-emerald-400/20 text-emerald-400 text-sm px-3 py-1 rounded-full mb-2'>2021</div>
                <h3 className='text-white font-bold'>Class 10</h3>
                <p className='text-slate-400'>Sarvodaya Kanya Vidyalaya</p>
                <p className='text-slate-400'>Percentage: 95%</p>
              </div>
            </div>

            
            <div className="relative pl-8">
              
              <div className="border-2 border-slate-700 rounded-lg px-4 py-3 bg-slate-900">
                <div className='inline-block bg-emerald-400/20 text-emerald-400 text-sm px-3 py-1 rounded-full mb-2'>2023</div>
                <h3 className='text-white font-bold'>Class 12</h3>
                <p className='text-slate-400'>Sarvodaya Kanya Vidyalaya</p>
                <p className='text-slate-400'>Percentage: 95%</p>
              </div>
            </div>

          
            <div className="relative pl-8">
           
              <div className="border-2 border-slate-700 rounded-lg px-4 py-3 bg-slate-900">
                <div className='inline-block bg-emerald-400/20 text-emerald-400 text-sm px-3 py-1 rounded-full mb-2'>2024-2028</div>
                <h3 className='text-white font-bold'>B.Tech (Information Technology)</h3>
                <p className='text-slate-400'>Bhagwan Parshuram Institute of Technology (GGSIPU)</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
                  <p className="text-slate-400">Currently Pursuing</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}