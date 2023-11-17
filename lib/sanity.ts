import {createClient} from 'next-sanity'
import ImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'bifz7lf9',
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: true
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source: any)=> {
    return builder.image(source)
}