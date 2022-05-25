import store from "@/store";

export function retrieveLocalCache(){
    store.commit("setUser", localStorage.getItem("userid"))
    store.commit("setJwtTokenTTL", localStorage.getItem("jwtTTL"))
}