import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { selectorFirestoreTodo} from '../features/firestore/firestoreSlice'
import './Cardlayout.scss'


const styles={
    cardWraper:{
        margin:'8px 0',
        // backgroundColor:'lightblue',
        backgroundColor:'lightgrey',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:'300px',
        borderRadius:'4px',
    }
}
const Cardlayout = () => {
    const firestoreTodo = useSelector(selectorFirestoreTodo)
    console.log(firestoreTodo);
    const todoStart = () => {
        console.log('Todo start');
    }
    return (
        <div className="c-cl-cards">
            <div className="c-cl-cards__item">
                <div style={styles.cardWraper}>
                    {firestoreTodo === null 
                        ? <div onClick={todoStart}>Todo Start</div>
                        : <div>Activity</div>
                    }
                </div>
            </div>
            <div className="c-cl-cards__item">
                <div style={styles.cardWraper}>
                    Blog
                </div>
            </div>
            <div className="c-cl-cards__item">
                <div style={styles.cardWraper}>
                    Gallery
                </div>
            </div>
            <div className="c-cl-cards__item">
                <div style={styles.cardWraper}>
                    Chats
                </div>
            </div>
        </div>
    )
}

export default Cardlayout
