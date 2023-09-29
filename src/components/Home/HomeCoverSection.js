import { sortBlogs } from '../../utils/index.js';

import Image from 'next/image';





const HomeCoverSection = ({ blogs }) => {

  const sortedBlogs = sortBlogs(blogs)
  const blog = sortedBlogs[0]
  return (
    <article>
      <Image src={blog.image.filePath.replace("../public", "")}
        placeholder='blur'
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        fill
        className='w-full h-full object-center object-cover rounded-3xl -z-10'
        sizes='100vw'
        priority
      />
    </article>
  )
}

export default HomeCoverSection