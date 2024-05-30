import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://codify-teens.vercel.app'
})

export{
    axiosInstance
}