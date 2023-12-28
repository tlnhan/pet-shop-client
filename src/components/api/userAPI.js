import { json } from "react-router-dom";
import axiosClient from "./axiosClient";

const userAPI = {
    login(data, navigate) {
        const url = `/users/login`;
        axiosClient.post(url, data).then((res) => {
            const data = res.other;
            localStorage.setItem('accessToken', res.accessToken);
            if (data.isAdmin) {
                localStorage.setItem('user', 'true');
                navigate('/admin');
            } else {
                localStorage.setItem('user', 'false');
                navigate('/');
            }
        }).catch((err) => {
            console.log(err);
        }
        );
    }

};


export default userAPI;