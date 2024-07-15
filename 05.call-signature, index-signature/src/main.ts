// call signature
interface getLikeNumber {
    (like: number): number;
}

interface Post {
    id: number;
    title: string;
    getLikeNumber: getLikeNumber;
}
const post1: Post = {
    id: 1,
    title: 'post 1',
    getLikeNumber(like: number) {
        return like;
    }
}

post1.getLikeNumber(1);


// index signature

interface Post2 {
    [key: string]: unknown;
    id: number;
    title: string;
}

const post2: Post2 = {
    id: 1,
    title: 'post 2'
}

post2['description'] = 'description 2';
post2['pages'] = 225;

// 배열 index signature

interface Names {
    [item: number]: string;
}
const userNames: Names = ['son', 'kim', 'choi'];