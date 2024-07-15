class Post {

    id: number;
    title: string;

    constructor(id: number, title: string) { // 위의 필드를 지우고 생성자 매개변수에서 직접 접근제어자를 명시해도 된다. public 포함 (이렇게하면 밑의 this 키워드 코드도 제거 가능)
        this.id = id;
        this.title = title;
    }

    getPost() {
        return `postId ${this.id}, postTitle: ${this.title}`;
    }
}

const post: Post = new Post(1, 'title 1');
