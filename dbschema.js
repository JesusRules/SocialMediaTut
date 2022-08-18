let db = {
    users: [
        {
            userId: 'dh23ggj5h32g543j5gf43',
            email: 'user@email.com',
            handle: 'user',
            createdAt: '2019-03-15T10:59:52.798Z',
            imageUrl: 'image/asdasdasdasdasd',
            bio: 'Hello, my name is user, nice to meet you',
            website: 'https://user.com',
            location: 'London, UK'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'This is a sample scream',
            createdAt: '2019-03-15T10:59:52.Z98Z',
            likeCount: 5,
            commentCount: 3
        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: 'asdasddfgdfgdfg',
            body: 'nice one mate!',
            createdAt: '2019-03-15T10:59:52.798Z'
        }
    ],
    notifications: [
        {
            recipient: 'user',
            sender: 'john',
            read: 'true | false',
            screamId: 'sfasdasdasdasdasd',
            type: 'like | comment',
            createdAt: '2019-03-15T10:59:52.798Z'
        }
    ]
};
const userDetails = {
    // Redux data
    credentials: {
        userId: 'N43KJ5H43LKJW4K5J3KW<ERJB',
        email: 'user@email.com',
        handle: 'user',
        createdAt: '2019-03-15T10:59:52.798Z',
        imageUrl: 'image/dasdasdasdasd',
        bio: 'Hello, my name is user, nice to meet you',
        website: 'https://user.com',
        location: 'Canada, ON'
    },
    likes: [
        {
            userHandle: 'user',
            screamId: 'hh705oWfWucVzGbHH2pa',
        },
        {
            userHandle: 'user',
            screamId: '3IOnFBXOoQexRcofs5Oh',
        },
        
    ]
}