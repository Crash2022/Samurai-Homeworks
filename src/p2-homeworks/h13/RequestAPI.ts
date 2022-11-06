import axios from "axios";

/*https://neko-cafe-back.herokuapp.com/auth/test*/
// без settings (withCredentials не нужен, API_KEY не нужен, мой сервер работает без этого)
// body: {success: true}

export const RequestAPI = {
    // getAuth() {
    //     return (
    //         axios
    //             .get('https://neko-cafe-back.herokuapp.com/auth/test/', {})
    //             .then(response => response.data)
    //     )
    // },
    postCheckbox(success: boolean) {
        return (
            axios
                .post('https://neko-cafe-back.herokuapp.com/auth/test/', {success}, {})
                .then(response => response.data)
        )
    }
}