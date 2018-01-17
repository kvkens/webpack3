import mirror, { actions, connect } from 'mirrorx';
import React from "react";
import User from "components/User";

mirror.model({
    name: "users",
    initialState: {
        list: [],
        value : 0
    },
    reducers : {
        add(state){
            return {...state,value:state.value+1}
        }
    }
});

mirror.hook((action, getState) => {
    console.log(action);
    console.log(getState());
});

export default connect(
    state => state.users
)(User)