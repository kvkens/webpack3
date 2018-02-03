import mirror from 'mirrorx';

export default {
    name: "users",
    initialState: {
        list: [{
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号'
        }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号'
        }],
        value: 0
    },
    reducers: {
        add(state, data) {
            return { ...state, ...data }
        }
    }
}