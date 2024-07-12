import { posts, users } from "../../public/data";



const isActiveInLast24Hours = (user) => {
    const now = new Date();
    const last24Hours = new Date(now.getTime() - 24 * 60 * 60 * 1000); // 24 hours ago
    const userLastActive = new Date(user.lastActive);
    return userLastActive >= last24Hours;
};

export const activeUsers = users.filter((item) => isActiveInLast24Hours(item));







const isPostInLast24Hours = (item) => {
    const now = new Date();
    const last24Hours = new Date(now.getTime() - 24 * 60 * 60 * 1000); // 24 hours ago
    const userLastActive = new Date(item.posted_on);
    return userLastActive >= last24Hours;
};

 export const activePosts = posts.filter((item) => isPostInLast24Hours(item));







