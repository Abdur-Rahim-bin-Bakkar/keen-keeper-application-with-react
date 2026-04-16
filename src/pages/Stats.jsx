import { Pie, PieChart } from 'recharts';
import React, { useContext } from 'react';
import { StateProviderContext } from '../Contexts/Contexts';

const Stats = () => {
        const { history, setHistory } = useContext(StateProviderContext)
        console.log(history)

        const texts = history.filter(his => his.type === 'text')
        const call = history.filter(his => his.type === 'call')
        const video = history.filter(his => his.type === 'video')

        console.log(video)
        const data = [
            {name:'Text', value:texts.length, fill:'green'},
            {name:'Video', value:video.length, fill:'red'},
            {name:'Call', value:call.length, fill:'blue'},
        ]
        console.log(data)
    return (

        <div className='max-w-11/12 mx-auto py-10'>
            <h1 className='text-4xl font-bold'>Friendship Analytics</h1>

            <div className="card  p-5 max-w-100 mx-auto mt-5">
                    <PieChart  style={{ aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        // isAnimationActive={isAnimationActive}
      />
      {/* <RechartsDevtools /> */}
    </PieChart>
            </div>
        </div>
    );
};

export default Stats;