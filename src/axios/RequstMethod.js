import axios from "axios";

const TOEKN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDRiZjUyYjdlM2I3NjM5N2NiNTczZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDk0NjcwNCwiZXhwIjoxNjQ1MjA1OTA0fQ.MUmMWjBYQbWUvm4J4UQXXbGZavpf6BpCx3-U_XHDSq0"
 const publicRequest = axios.create({
    baseURL:"http://localhost:5000/api/"
})

const userRequest = axios.create({
    baseURL:"http://localhost:5000/api/",
    headers: `Bearer ${TOEKN}`
})


export {
    publicRequest,
    userRequest
}