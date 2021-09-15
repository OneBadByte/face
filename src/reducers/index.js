const mockPosts = [
    {
        id: 1,
        title: "testing 1",
        text: "text 1, what do you think!",
        date: Date.now()
    },
    {
        id: 2,
        title: "testing 2",
        text: "text 2, what do you think!",
        date: Date.now()
    },
    {
        id: 3,
        title: "testing 3",
        text: "text 3, what do you think!",
        date: Date.now()
    },
]


export default function posts(state = {posts: mockPosts}, action) {
    return state
}
