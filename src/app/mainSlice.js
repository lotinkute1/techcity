import {createSlice} from "@reduxjs/toolkit";
import Firebase from '../features/Firebase/Firebase';
import { getDatabase, ref, push,child, onValue,get } from 'firebase/database';

const db=getDatabase();
const dbRef=ref(db,'/');

const mainSlice = createSlice({
    name: 'main',
    initialState:{
    },
    reducers: {
        getData: function (state) {
            let cc=[];
            // await get(child(dbRef,'/'))
            // .then((snapshot) => {
            //     if (snapshot.exists()) {
            //         cc=(snapshot.val());
            //       } else {
            //         console.log("No data available");
            //       }
            // }).catch((error) => {
            //     console.error(error);
            // });
            // console.log(cc);
            onValue(dbRef, (snapshot) => {
                let temp = [];
                snapshot.forEach((item) => {
                  temp.push(item.val())
                })
            })
            
            
        },
    }
})
const {actions,reducer} = mainSlice;
export const {getData,testRedux} = actions;
export default reducer;