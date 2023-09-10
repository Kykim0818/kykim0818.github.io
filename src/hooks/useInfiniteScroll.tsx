import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react'
import { PostListItemType } from 'types/PostItem.types'

export type useInfiniteScrollType = {
  containerRef: MutableRefObject<HTMLDivElement | null>
  postList: PostListItemType[]
}

const NUMER_OF_ITEMS_PER_PAGE = 10
// 한번에 10개
const useInfiniteScroll = function (
  selectedCategory: string,
  posts: PostListItemType[],
): useInfiniteScrollType {
  const containerRef = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(1)

  const postListByCategory = useMemo<PostListItemType[]>(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostListItemType) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  )

  const observer: IntersectionObserver = new IntersectionObserver(
    (entries, observer) => {
      if (entries[0].isIntersecting === false) return
      setCount(value => value + 1)
      observer.disconnect()
    },
  )

  useEffect(() => setCount(1), [selectedCategory])
  useEffect(() => {
    if (
      NUMER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0
    )
      return

    observer.observe(
      containerRef.current.children[containerRef.current.children.length - 1],
    )
  }, [count, selectedCategory])

  return {
    containerRef,
    postList: postListByCategory.slice(0, count * NUMER_OF_ITEMS_PER_PAGE),
  }
}

export default useInfiniteScroll
