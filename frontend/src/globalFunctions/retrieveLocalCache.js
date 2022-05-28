import store from "@/store";

export function retrieveLocalCache(){
    if (localStorage.getItem("jwtTTL") != null){
        store.commit("setUser", localStorage.getItem("userid"))
        store.commit("setJwtTokenTTL", localStorage.getItem("jwtTTL"))
    }
}