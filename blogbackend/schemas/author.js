export default{
    name: 'author', 
    type: 'document',
    title: 'Author',
    
    fields: [
        {
            name: 'username',
            title: 'Username',
            type: 'string'
        },
        {
            name: 'avatar', 
            title: 'Avatar',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ]
}