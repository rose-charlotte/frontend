/** @module repository */

import { USER_MAIN_DATA } from "../_mocks_/store.js";

/**
 *
 * @returns {UserData[]} all user data
 */
function getUserData() {
    const usersData = USER_MAIN_DATA;
    return usersData;
}

/**
 *
 * @returns {number[]} user ids
 */
export function getAllUserIds() {
    const usersId = USER_MAIN_DATA.map((userId) => userId.id);

    return usersId;
}

/**
 * Get user infos from it's id
 * @param {number} id user id to fetch
 * @returns {UserInfos | undefined} data for the specified user or undefined
 */
export function getUserInfos(id) {
    const usersData = getUserData();
    const userData = usersData.find((userData) => userData.id === id);
    const userInfos = userData?.userInfos;
    console.log(userInfos);
    return userInfos;
}

// export class UsersData {
//     // #route;
//     // constructor(route) {
//     //     this.route = route;
//     // }

//     async getUsersData() {
//         const response = await Promise.resolve(USER_MAIN_DATA);

//         return response;
//     }

//     async getUserData(id) {
//         const usersData = await this.getUsersData();
//         const userData = usersData.find((userData) => userData.id === id);
//         return userData;
//     }
// }