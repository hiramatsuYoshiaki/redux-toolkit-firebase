import { Timestamp } from "firebase/firestore"; 
export const activityDataSet = (profile,data,file) => {
    const activityData ={
        id:'',
        owner:profile,
        title:data.title,
        date:Timestamp.fromDate(data.datePicker),//js date --> firebase timestamp
        couse:data.couse,
        start:data.start,
        gole:data.gole,
        distance:data.distance,
        elevation:data.elevation,
        couse_map:data.couse_map,
        couse_link:data.link,
        segment:data.segment,
        coment:data.coment,
        public:data.public,
        participation:[],
        done:false,
        garmin:'',
        relive:'',
        strava:'',
        file:file,
        create_at:null,
        update_at:null,
        starus:'idle',
    }
    return activityData
}