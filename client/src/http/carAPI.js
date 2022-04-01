import {$authHost, $host} from "./index";


export const createCar = async (car) => {
    const {data} = await $authHost.post('api/car', car)
    return data
}

// export const fetchAvatar = async (typeId, brandId, page, limit= 5) => {
//     const {data} = await $host.get('api/avatar', {params: {
//             typeId, brandId, page, limit
//         }})
//     return data
// }

export const car = async (car) => {
    const {data} = await $host.get('api/car', car)
    return data
}


// export const fetchOneUserPhoto   = async (id) => {
//     const {data} = await $host.get('api/profile/' + id)
//     return data
// }
