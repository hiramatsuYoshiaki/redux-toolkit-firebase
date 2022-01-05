import React from 'react'
import {useHistory} from 'react-router-dom'

const Done = () => {
    const history = useHistory()
    const activity = history.location.state.activity
    return (
        <div>
            Done
            <div>{activity.id}</div>
            <div>{activity.title}</div>
            <div>距離:{activity.distance}ｋｍ</div>
            <div>獲得標高:{activity.elevation}ｍ</div>
            <div>タイム:</div>
            <div>平均速度:</div>
        </div>
    )
}

export default Done
