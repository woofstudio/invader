/* eslint-disable array-callback-return */
import { Readable } from 'stream'

import { NextApiRequest, NextApiResponse } from 'next'
import { SitemapStream, streamToPromise } from 'sitemap'

import { sanityClient } from '../../sanity'
import { IBlogPreview } from '../../types/interface'

// const nextSiteMap = async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const smStream = new SitemapStream({
//       hostname: `https://${req.headers.host}`,
//       // cacheTime: 600000,
//     });

//     // List of posts
//     const posts: any[] = [];

//     // Create each URL row
//     posts.forEach((post) => {
//       smStream.write({
//         url: `/post/${post.slug}`,
//         changefreq: 'daily',
//         priority: 0.9,
//       });
//     });

//     // End sitemap stream
//     smStream.end();

//     // XML sitemap string
//     const sitemapOutput = (await streamToPromise(smStream)).toString();

//     // Change headers
//     res.writeHead(200, {
//       'Content-Type': 'application/xml',
//     });

//     // Display output to user
//     res.end(sitemapOutput);
//   } catch (e) {
//     res.send(JSON.stringify(e));
//   }
// };

// export default nextSiteMap;

const getAllslug = async () => {
  const query = `*[_type == "post"]{
        "slug": slug.current,
  }`
  const response: IBlogPreview[] = await sanityClient.fetch(query)
  const paths = response.map((blog: IBlogPreview) => ({
    params: {
      slug: blog.slug,
    },
  }))
  return paths
}

const nextSiteMap = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // An array with your links
    const links: any[] = []
    const paths = await getAllslug()
    paths.forEach((blog) => {
      links.push({
        url: `/${blog.params.slug}`,
        changefreq: 'daily',
        priority: 0.9,
      })
    })

    // Add other pages
    const pages = ['/']
    pages.forEach((url) => {
      links.push({
        url,
        changefreq: 'daily',
        priority: 0.9,
      })
    })

    // Create a stream to write to
    const stream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    })

    res.writeHead(200, {
      'Content-Type': 'application/xml',
    })

    const xmlString = await streamToPromise(
      Readable.from(links).pipe(stream),
    ).then((data) => data.toString())

    res.end(xmlString)
  } catch (e) {
    console.log(e)
    res.send(JSON.stringify(e))
  }
}

export default nextSiteMap
