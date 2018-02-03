import mirror, { actions, connect } from 'mirrorx';
import React from "react";
import User from "components/User";
import UserModal from "models/users";


mirror.model(UserModal);

mirror.hook((action, getState) => {
    // console.log(action);
    // console.log(getState());
});

export default connect(
    state => state.users
)(User)