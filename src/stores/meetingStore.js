import { observable, action, makeObservable } from 'mobx';
import axios from 'axios';

class MeetingStore {
    meetingList = [];


    constructor() {
        makeObservable(this, {
            meetingList: observable,
            addMeeting: action,
            getMeeting: action,

        })
    }
    getMeeting = () => {
        axios.get("http://localhost:8787/appointments")
            .then((res) => {
                if (res.status === 200) {
                    this.meetingList = res.data;
                }
            })
            .catch(err => {
                console.log(err)
            })

    }
    addMeeting = (meeting) => {
        axios.post("http://localhost:8787/appointment", meeting)
            .then((res) => {
                if (res.status === 200) {
                    this.meetingList = [...this.meetingList, meeting]
                    alert(' השיעור נוסף בהצלחה')
                }
            })
            .catch(err => {
                alert('שגיאה בהוספת שיעור')
            })

    }


}
export default new MeetingStore();