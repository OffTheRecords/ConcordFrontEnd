import {ref, onMounted, onUnmounted} from 'vue'

export function useCookieeByName(cookieName){
    var cookie = document.cookie.match(new RegExp('(^| )' + cookieName + '=([^;]+)'));
    if (cookie){
        return cookie[2];
    }
    else{
        console.log("Cookiee with name " + cookieName + " not found.")
        return "error"
    }
}