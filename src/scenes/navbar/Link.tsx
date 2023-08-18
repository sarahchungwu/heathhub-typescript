import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
  page: string
}

const Link = ({page}: Props) => {
  return (
    <AnchorLink>
      {page}
    </AnchorLink>
  )
}


export default Link