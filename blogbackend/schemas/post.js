import author from "./author";

export default {
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },

        {
            name: 'mainimage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxlength: 96
            }
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: {type: 'author'}
        },
        {
            name: 'category',
            title: 'Category',
            type: 'array',
            of: [{type: 'reference', to : {type: 'category'}}]
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime'
        },
        {
            name: 'body',
            type: 'blockContent',
            title: 'Body'
        }
    ]
}