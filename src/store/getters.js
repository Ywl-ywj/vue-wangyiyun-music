
const getter = {
    remdList: state => { //切割推荐歌单数据
        return {
            one: state.remdList.slice(0,3),
            two: state.remdList.slice(3)
        }
    },
    newSong: state => state.newSong,
    rank: state => state.rank,
    hotWord: state => state.hotWord,
    searchResult: state => state.searchResult,
    listDetail: state => state.listDetail,
    currentPlayUrl: state => state.currentPlayUrl,
    isLoad: state => state.isLoad,
    isToast: state => state.isToast,
    isPlayer: state => state.isPlayer
};

export default getter
