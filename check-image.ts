import { getPayload } from 'payload'
import configPromise from './payload.config'

async function checkImage() {
  const payload = await getPayload({ config: configPromise })
  
  const posts = await payload.find({
    collection: 'posts',
    limit: 1,
    sort: '-createdAt',
  })
  
  if (posts.docs.length > 0) {
    const post = posts.docs[0];
    console.log('Post Title:', post.title);
    
    if (post.featuredImage) {
      if (typeof post.featuredImage === 'object') {
        console.log('Image URL:', post.featuredImage.url);
      } else {
        console.log('Image ID only (not populated):', post.featuredImage);
      }
    } else {
      console.log('No featured image attached');
    }
  } else {
    console.log('No posts found');
  }
  process.exit(0)
}

checkImage().catch(err => {
  console.error(err)
  process.exit(1)
})
